const user_Controlllers = require("../controller/usercontroller")
const express =require("express")
const user_route = express()

user_route.set('view engine','ejs')
user_route.set('views', './views')

user_route.use(express.static('public'))


const path = require("path")
const multer = require("multer")


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.join(__dirname,'../public/image'));
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name)
    }
})

const upload =multer({storage:storage}); 


user_route.get('register',user_Controlllers.registerload )
user_route.get('register',user_Controlllers.register )








module.exports = user_route