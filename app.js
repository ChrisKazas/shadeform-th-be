const express = require('express')
const app = express()
const PORT = 8080
const cors = require('cors')

app.use(cors())
app.use(express.json());

const APIKEY = ''

const instances = []

// GET /instances
app.get('/instances', (req, res) => {
  res.send(instances)
})

// GET /instances/types
app.get('/instances/types', (req, res) => {
  const options = {method: 'GET', headers: {'X-API-KEY': APIKEY}};

  fetch('https://api.shadeform.ai/v1/instances/types', options)
    .then(response => response.json())
    .then(response =>  res.send(response))
    .catch(err => console.error(err));
})

// POST /instances/create
app.post('/instances/create', (req, res) => {

  const instanceData = req.body;

  instances.push(instanceData)

  res.status(201).json({ message: 'Instance created successfully' });
  
});

// POST /instances/:id/delete
app.delete('/instances/:id/delete', (req, res) => {
  const instanceId = req.params.id;
;
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})