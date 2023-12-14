
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT||3000 ;

// middleware
app.use(express.json())
app.use(cors())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://paria:paria@cluster0.bqaboup.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    // create db
    const db = client.db('jobportal')
    const jobsCollections = db.collection("jobs")

    //post a job
    app.post("/post-job",async(req,res)=>{
      const body = req.body;
      body.createAt = new Date();
      const result = await jobsCollections.insertOne(body);
      if(result.insertedId){
        return res.status(200).send(result);
      }else{
        return res.status(404).send({message:"something went wrong",
      status:false});
      }
    })

    //get all jobs
    app.get('/all-jobs', async (req, res) => {
      const jobs =await jobsCollections.find({}).toArray()
      res.send(jobs);
    })

    //get jobs by email
    app.get('/myJobs/:email',async(req,res)=>{
      //console.log(req.params.email)
      const jobs = await jobsCollections.find({postedBy:req.params.email}).toArray();
      res.send(jobs);
    })

    // delete job 

    app.delete('/job/:id',async(req,res)=>{
      const id = req.params.id;
      const filter = {
        _id: new ObjectId(id)
      }
      const result = await jobsCollections.deleteOne(filter);
      res.send(result);
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port,()=>{
  console.log(`Server is running on ${port}`)
})