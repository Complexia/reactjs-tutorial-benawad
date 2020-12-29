import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from 'express';
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import "reflect-metadata";
const main = async () => {
    
    //connect to db
    const orm = await MikroORM.init(microConfig);
    //run migrations
    await orm.getMigrator().up();

    // const posts = await orm.em.find(Post, {});
    // console.log(posts);
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate: false,
        }),
        context: () => ({ em: orm.em })
    })
    

    apolloServer.applyMiddleware({ app })
    
    app.listen(4000, () => {
        console.log("server started on locahost:4000")
    })
}


main().catch((err) => {
    console.error(err)
});


