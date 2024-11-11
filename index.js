//1 import Json Server
const jsonserver = require('json-server')

//2 Create Server Application Using Json server
const mediaAppServer = jsonserver.create()

//3 Create A MiddleWare used by json Server
const middleWare = jsonserver.defaults()

//4 Create router: setup router for db.json file
const router = jsonserver.router('db.json')

//5 Applying middleware to server
mediaAppServer.use(middleWare)

//6 Applying router to server
mediaAppServer.use(router)

//7 Define Port
const PORT = 3000

//8 Starting The Server
mediaAppServer.listen(PORT, () => {
    console.log("Media APP Server Started on  PORT" + PORT);

})