import { User } from "../entities/User";
import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import argon2 from 'argon2';

@InputType()
class UsernamePasswordInput {
    @Field()
    username: string
    @Field()
    password: string
}

@ObjectType()
class FieldError {
    @Field()
    field: string
    @Field()
    message: string
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[]
    @Field(() => User, { nullable: true })
    user?: User
}

@Resolver()
export class UserResolver {
    @Query(() => User, { nullable: true })
    async me(
        @Ctx() {req, em}: MyContext
    ) {
        if (!req.session.userId) {
            return null
        }
        const user = await em.findOne(User, { id: req.session.userId })
        return user
    }
    @Mutation(() => UserResponse)
    async register(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() {em}: MyContext
    ): Promise<UserResponse> {

        if(options.username.length <= 2) {
            return {
                errors:[{
                    field: "username",
                    message: "username too short"
                }]
            }
        }

        if(options.password.length <= 2) {
            return {
                errors:[{
                    field: "password",
                    message: "password too short"
                }]
            }
        }
        const hashedPassword = await argon2.hash(options.password)
        const user = em.create(User, {
             username: options.username, 
             password: hashedPassword 
        })
        try{
            await em.persistAndFlush(user)
        }
        catch(err) {
            //duplicate username error
            if(err.code === "23505") {
                return {
                    errors: [{
                        field: "username",
                        message: "this username already exists"
                    }]
                }
            }

        }
        return {
            user
        } 
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() {em, req}: MyContext
    ):Promise<UserResponse> {

        const user = await em.findOne(User, { username: options.username.toLowerCase() })

        if(!user) {
            return {
                errors: [{
                    field: "username",
                    message: "no such user"
                }]
            }
        }
        const valid = await argon2.verify(user.password, options.password)

        if(!valid) {
            return {
                errors: [{
                    field: "password",
                    message: "wrong password"
                }]
            }
        }
        
       req.session.userId = user.id;

        return {
            user
        }
             
    }
}