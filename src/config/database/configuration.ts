import {registerAs} from '@nestjs/config'

export default registerAs('database', () => ({
    postgresHost:process.env.POSTGRES_HOST,
    postgresPort:process.env.POSTGRES_PORT,
    postgresDatabase:process.env.POSTGRES_DATABASE,
    postgresUser:process.env.POSTGRES_USER,
    postgresPassword:process.env.POSTGRES_PASSWORD,
    mode:process.env.APP_ENV
}));