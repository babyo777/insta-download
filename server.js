const app = require("express")()
const cors = require("cors")
const instagram = require("./utils/insta")

app.use(cors())

app.get("/api/v1",async(req,res)=>{
    const url = req.query.link
        try {
          const dataList = await instagram(url);
          res.status(200).json(dataList)
        } catch (error) {
          res.status(402).json(error.message)
        }
})

app.use((req,res,next)=>{
    res.status(404).send('s3x')
})

app.listen(process.env.PORT ?? 3000,()=>{
    console.log(`http://localhost:${process.env.PORT ?? 3000}`);
})
