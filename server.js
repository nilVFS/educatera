import { createServer, Model } from "miragejs";

createServer({
    models: {
        users: Model
    },

    seeds(server) {
        server.create("user", 
        { 
            id: "1", 
            firstName: "Владислав",
            lastName: "Низьев",
            image: "https://sun9-2.userapi.com/impg/nDinKvPOpfkbjtcdCAJX9nHWG6KxnCgrkVkH4g/N40UNCHYGGk.jpg?size=1080x1080&quality=95&sign=71f5b911aadecf07212fc24e7207ea1b&type=album",
            specialization: ["Иностранный язык", "Экономика"],
        })
        server.create("user", 
        { 
            id: "2", 
            firstName: "Владислав",
            lastName: "Низьев",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
            specialization: ["Иностранный язык", "Экономика"],
        })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/users", (schema, request) => {
            return schema.users.all()
        })

        this.get("/users/:id", (schema, request) => {
            const id = request.params.id
            return schema.users.find(id)
        })
    }
})

