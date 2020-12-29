const express = require('express')
const router = express.Router();
const Code = require('../model/code')


router.post('/',(req,res)=>{
    const data = new Code({
        language:req.body.language,
        topic:req.body.topic,
        code:req.body.code,
        createdOn:req.body.createdOn
    })
    data.save()
    .then(bon=>{
        res.json(bon)
    })
})

router.get('/allcode',(req,res)=>{
    Code.find()
    .then(data=>{
        res.json(data)
    })
})



module.exports = router;