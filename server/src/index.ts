import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from 'express';
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import "reflect-metadata";
import { UserResolver } from "./resolvers/user";

import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { MyContext } from "./types";

import cors from "cors";

const main = async () => {
    
    //connect to db
    const orm = await MikroORM.init(microConfig);
    //run migrations
    await orm.getMigrator().up();

    // const posts = await orm.em.find(Post, {});
    // console.log(posts);
    const app = express();

    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient({
        no_ready_check: true
    })

    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true
        })
    )
    app.use(
        session({
            name: 'qid',
            store: new RedisStore({
                 client: redisClient,
                 disableTouch: true,
                 disableTTL: true,
                 
                }),

            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, //10 years  
                httpOnly: true,
                secure: __prod__, //cookie only works in https (in production)
                sameSite: 'lax',//protecting csrf


            },

            saveUninitialized: false,

            secret: "sdhiusdsdhsudshdsdsd",
            resave: false
        })
    )


    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver, UserResolver],
            validate: false,
        }),
        context: ({ req, res }): MyContext => ({ em: orm.em, req, res })
    })
    

    apolloServer.applyMiddleware({ app, cors: false })
    
    app.listen(4000, () => {
        console.log("server started on locahost:4000")
    })
}


main().catch((err) => {
    console.error(err)
});


