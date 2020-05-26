const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());


// Connect To Mlab database
let mlabUrl = 'mongodb://vdev:vdev123@ds157390.mlab.com:57390/graphql-project'
mongoose.connect(mlabUrl,{useNewUrlParser:true})
        .then(data => console.log('data connection successful'))
        .catch(err => console.log('Error Connecting Mongo '))


        
app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000,() => {
    console.log('now listening to requests on port 4000')
})