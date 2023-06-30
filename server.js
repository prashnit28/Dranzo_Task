const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())





app.post('/api/login', async (req, res) => {
    console.log(req.body,"this is body")
    setTimeout(() =>{
        return res.json({ msg:"logged in successful"});
    },5000);
	
})




app.listen(1337, () => {
	console.log('Server started on 1337')
})