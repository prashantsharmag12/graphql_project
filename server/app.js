const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors=require('cors');

app.use(cors());
mongoose.connect('mongodb+srv://peesu:peesu@cluster0-cp70c.mongodb.net/graphql?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log("connected to the online database");
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
    
}));
app.listen(4000,()=>{
    console.log("listeningdfd ....");
});