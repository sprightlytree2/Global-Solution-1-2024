import "reflect-metadata"
import { DataSource } from "typeorm"
import { Post } from "./entity/Post"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "aws-0-sa-east-1.pooler.supabase.com",
    port: 5432,
    username: "postgres.rvjemfkpbiuwugffcnpw",
    password: "raU6bspv#4pJpA3h",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Post],
    migrations: [],
    subscribers: [],
})