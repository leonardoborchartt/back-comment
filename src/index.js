/*var moment = require('moment');
var recursiva = function () {
 
console.log(moment().format());
//console.log(moment().hours());
//console.log(moment().isoWeek());

 
 setTimeout(recursiva,1000);
}
recursiva();

*/
  
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const Comment = require('./Comment')


const app = express();


mongoose.connect('mongodb+srv://migrate:migrate@cluster0-caszl.mongodb.net/bdcomment?retryWrites=true&w=majority',
    { useNewUrlParser: true });


app.use(express.json());// receber info do front
app.use(cors());// usa o cors para o front poder chamar o back



app.post('/comment', async (req, res) => { 
    const dNow = new Date();
    const localdate01 = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();

    const comment = await Comment.create(req.body);
    comment.localdate1 = localdate01;
    console.log(" comments " + comment.name + comment.localdate1);

    return res.json(comment);
});
app.get('/comment', async (req, res) => {
    const comment = await Comment.find();
    return res.json(comment);
});