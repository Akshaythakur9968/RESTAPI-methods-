const express = require("express");
const app = express()
app.use(express.json())
const notes = []


app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        Message: "note created successfully"
    })
})
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetch successfully",
        notes:notes
    })
})
 app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message:'note deleted successfully'
    })
 })
 app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index 
    const title = req.body.title
    const description = req.body.description
    notes [index].description = description
    notes [index].title = title
    res.status(200).json({
        message : 'notes updated '
    })
 })
module.exports = app
