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
            lastName: "Низьев"
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

