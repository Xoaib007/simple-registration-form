require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://job-task-user:EWrXLrCmgZaM3W9Z@cluster0.7grdkwx.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const userCollection = client.db('job-task').collection('users');

        app.get('/users', async (req,res)=>{
            const query= {};
            const allUsers= await userCollection.find(query).toArray();
            res.send(allUsers)
        })

        app.post('/users', async (req, res)=>{
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result)
        })
    }
    finally{

    }
}

run();

app.get('/', (req,res) =>{
    res.send('Port is running')
});

app.listen(port, () =>{
    console.log(`port ${port}`)
})