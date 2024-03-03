import  express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.js";
import cors from "cors"
const app = express();

const PORT = process.env.PORT || 5000;
app.get('/',(req,ress)=>{
    ress.json("DEDe")
})
mongoose.connect("mongodb+srv://onlyaddy68:onlyaddy123@confess.bgv01wx.mongodb.net/confessing?retryWrites=true&w=majority&appName=confess",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{

    app.listen(PORT,()=>{
        console.log("sdssxds")
    })
}).catch((err)=>{
    console.log(err)
})
app.use(cors())
app.use(express.json())
app.use('/user',userRoute)