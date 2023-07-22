const NODE_ENV = process.env.NODE_ENV || 'production'

const config = {
    production: {
        MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/challenge?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`
    },
}

const URL = config[NODE_ENV]
export  {URL}
