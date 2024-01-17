const app = require("express")()
const cors = require("cors")
const instagram = require("../utils/insta")

app.use(cors())

app.get("/api/v1/:link",async(req,res)=>{
    const url = req.params.link
    console.log(url);
        try {
          const dataList = await instagram(url);
          res.json(dataList)
        } catch (error) {
          res.json(error.message)
        }
})

app.use((req,res,next)=>{
    res.send('s3x')
})

app.listen(process.env.PORT ?? 3000,()=>{
    console.log(`http://localhost:${process.env.PORT ?? 3000}`);
})