
const express = require('express');
const path = require('node:path');

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname,'public', 'form.html'));
});
app.post('/submit', (req,res)=>{
  const dataForm = req.body;
  console.log('Datos recibidos exitosamente: ', dataForm);
  const query = new URLSearchParams(dataForm).toString();

  res.redirect(`/confirm.html?${query}`);
});
app.get('/confirm.html', (req,res) =>{
  res.sendFile(path.join(__dirname, 'public', 'confirm.html'));
})
app.listen(PORT, ()=>{
  console.log(`Servidor funcionando en el puerto http://localhost:${PORT}`);
})