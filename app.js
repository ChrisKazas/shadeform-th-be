const express = require('express')
const app = express()
const port = 3000

// GET /instances
app.get('/instances', (req, res) => {
  const options = {method: 'GET', headers: {'X-API-KEY': '<api-key>'}};

  fetch('https://api.shadeform.ai/v1/instances', options)
    .then(response => response.json())
    .then(response =>  res.send(response))
    .catch(err => console.error(err));
})

// GET /instances/types
app.get('/instances/types', (req, res) => {
  const options = {method: 'GET', headers: {'X-API-KEY': '<api-key>'}};

  fetch('https://api.shadeform.ai/v1/instances/types', options)
    .then(response => response.json())
    .then(response =>  res.send(response))
    .catch(err => console.error(err));
})

// POST /instances/create
app.get('/instances/create', (req, res) => {
  const options = {
    method: 'POST',
    headers: {'X-API-KEY': '<api-key>', 'Content-Type': 'application/json'},
    body: '{"cloud":"massedcompute","region":"us-central-2","shade_instance_type":"A6000","shade_cloud":true,"name":"cool-gpu-server","launch_configuration":{"type":"docker","docker_configuration":{"image":"vllm/vllm-openai:latest","args":"--model mistralai/Mistral-7B-v0.1","shared_memory_in_gb":8,"envs":[{"name":"HUGGING_FACE_HUB_TOKEN","value":"hugging_face_api_token"}],"port_mappings":[{"host_port":80,"container_port":8000}],"volume_mounts":[{"host_path":"~/.cache/huggingface","container_path":"/root/.cache/huggingface"}]},"script_configuration":{"base64_script":"IyEvYmluL2Jhc2gKCiMgRW5kbGVzcyBsb29wCndoaWxlIHRydWUKZG8KICAgICMgRmV0Y2ggYSBjYXQgZmFjdCB3aXRoIGEgbWF4aW11bSBsZW5ndGggb2YgMTQwIGNoYXJhY3RlcnMKICAgIGN1cmwgLS1uby1wcm9ncmVzcy1tZXRlciBodHRwczovL2NhdGZhY3QubmluamEvZmFjdD9tYXhfbGVuZ3RoPTE0MAoKICAgICMgUHJpbnQgYSBuZXdsaW5lIGZvciByZWFkYWJpbGl0eQogICAgZWNobwoKICAgICMgU2xlZXAgZm9yIDMgc2Vjb25kcyBiZWZvcmUgdGhlIG5leHQgaXRlcmF0aW9uCiAgICBzbGVlcCAzCmRvbmUKCgo="}},"os":"ubuntu22.04_cuda12.2_shade_os"}'
  };
  
  fetch('https://api.shadeform.ai/v1/instances/create', options)
    .then(response => response.json())
    .then(response => res.send(response))
    .catch(err => console.error(err));
});

// POST /instances/:id/delete
app.post('/instances/:id/delete', (req, res) => {
  const instanceId = req.params.id;

  const options = {method: 'POST', headers: {'X-API-KEY': '<api-key>'}};

  fetch(`https://api.shadeform.ai/v1/instances/${instanceId}/delete`, options)
    .then(response => response.json())
    .then(response => res.send(response))
    .catch(err => console.error(err));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})