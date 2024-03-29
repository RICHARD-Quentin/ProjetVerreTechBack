import {createClient} from 'redis'
    const redisClient = createClient({url : "redis://db_cache_redis:6379"})
    redisClient.connect()
    redisClient.on('error', (err) => console.log('Redis Client Error', err));

export default class  {

    public async create(id_client: number, cart: Array<any>) {
        const key = id_client.toString() + '.cart'
        const value = JSON.stringify(cart)
        await redisClient.setEx(key, 60 * 60 * 24, value)
        return await redisClient.get(key)
    }
    public async search(id_client: number) {
        const key = id_client.toString() + '.cart'
        const data = await redisClient.get(key)
        if (data !== null) return JSON.parse(data)
        return data
    }
    public async delete(id_client: number) {
        const key = id_client.toString() + '.cart'
        return await redisClient.del(key)
    }
}