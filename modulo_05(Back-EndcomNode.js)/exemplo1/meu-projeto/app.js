// Meu primeiro programa Node.js
const nome = "FATEC";
const ano = 2025;

console.log(`Olá, ${nome}!`);
console.log(`Ano: ${ano}`);

// Funcionalidades do Node.js
console.log("Diretório:", __dirname);
console.log("Arquivo:", __filename);
console.log("Processo:", process.version);

const fs = require('fs');

// Ler um arquivo
const conteudo = fs.readFileSync(
  'dados.txt', 'utf-8'
);
console.log(conteudo);

// Escrever em um arquivo
fs.writeFileSync(
  'saida.txt',
  'Olá, Node.js!'
);

console.log("Arquivo criado!");

const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
const users = fs.readFileSync('./users.json',{
  encoding: 'utf-8',
})

const saveUser = (users) => {
  fs.writeFileSync('./users.json', JSON.stringify(users, null, 2))
}

// Rota GET na raiz
app.get('/users', (req, res) => {
  return res.json(users);
});

app.post('/users', (req, res) => {
  const {name, age, email} = req.body;

  if(!name || !age || !email){
    return res.status(400).json({message: 'Todos os campos são obrigatórios!'});
  }

  if (users.find(user => user.email === email)){
    return res.status(400).json({ message: 'Email já cadastrado!'});
  }

  users.push({
    id: users.length + 1,
    name,
    age,
    email
  })
  saveUser(users);

  return res.status(201).json({ message: 'Usuário cadastrado com sucesso!'});
})

app.put('/users/:id', (req ,res) =>{
  const { id } = req.params;
  const {name, age, email} = req.body;
  const user = users.find(user => user.id === Number(id))

  if(!user){
    return res.status(404).json({message: 'Usuário não encontrado!'});
  }

  if(users.find(user => user.email === email && user.id !== id)){
    return res.status(400).json({message: 'Email já cadastrado!'});
  }

  name && (user.name = name)
  age && (user.age = age)
  email && (user.email = email)
  /*if(name){ user.name = name}
  if(age){ user.age = age}
  if(email){ user.email = email}*/

  //const userIndex = users.findIndex(user => user.id === id)

  //console.log(req)

  saveUser(users)
  return res.json({ok: true})
})

app.delete('/users/:id', (req, res) => { 
  const{id} = req.params;
  const user = users.find(user => user.id === Number(id));
  if(!user){
    return res.status(404).json({message: 'Usuário não encontrado'});
  }
  const filteredUsers = users.filteredUsers
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(
    `Servidor em http://localhost:${PORT}`
  );
});