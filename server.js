const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`We running on ${app.get('port')}.`)
})

//USERS have ID (autoIncrementing), name, email, deleted attributes
//get all users
app.get('/api/v1/users', (request, response) => {
  database('users').select()
    .then((folders) => {
      response.status(200).json(folders);
    })
    .catch(function(error) {
      console.error('somethings wrong with db')
      console.log(error)
    });
})

//get one user by ID
app.get('/api/v1/users/:id', (request, response) => {
  const { id } = request.params;
  const userFiles = [];

  database('users').where('id', id).select()
  .then((user) => {
    userFiles.push({user})
  })
  .catch((error)=>{
    response.status(422).send({
      error: 'ID did not match any existing users'
    })
  })
  database('compositions').where('user_id', id).select()
    .then((compositions) => {
      userFiles.push({compositions})
    })
    .catch((error)=>{
      response.status(422).send({
        error: 'ID did not match any existing users'
      })
    })
  database('sounds').where('user_id', id).select()
    .then((sounds) => {
      userFiles.push({sounds})
      response.status(202).json(userFiles)
    })
    .catch((error)=>{
      response.status(422).send({
        error: 'ID did not match any existing users'
      })
    })

})

//post a user
app.post('/api/v1/users', (request, response) => {
  const { name, email } = request.body
  const newUser = { name, email, deleted:false }

  database('users').insert(newUser)
  .then(()=> {
    database('users').select()
      .then((users) => {
        response.status(200).json(users);
      })
      .catch((error) => {
        console.error(error)
      });
  })
})

//patch a user
app.patch('/api/v1/users/:id', (request, response) => {
  const { id } = request.params;
  const { name, email } = request.body

  database('users').where('id', id).select()
    .then((user)=> {
      database('users').where('id', id).select().update({ name, email })
        .then(()=> {
          res.status(200)
        })
    })
    .catch((error) => {
      console.error(error)
    });
})

//delete a user

//COMPOSITIONS have ID(autoIncrementing), attributes, user_id, deleted attributes
//get compositions
app.get('/api/v1/compositions', (request, response) => {
  database('compositions').select()
    .then((compositions) => {
      response.status(200).json(compositions);
    })
    .catch(function(error) {
      console.error('somethings wrong with db')
      console.log(error)
    });
})

//get one composition by ID
app.get('/api/v1/compositions/:id', (request, response) => {
  const { id } = request.params;
  database('compositions').where('id', id).select()
    .then((urlData) => {
      response.status(202).json(urlData)
    })
    .catch((error)=>{
      response.status(422).send({
        error: 'ID did not match any existing compositions'
      })
    })
})

//post a composition
app.post('/api/v1/compositions', (request, response) => {
  const { attributes, user_id } = request.body
  const newComposition = { attributes, user_id, deleted:false }

  database('compositions').insert(newComposition)
  .then(()=> {
    database('compositions').select()
      .then((compositions) => {
        response.status(200).json(compositions);
      })
      .catch((error) => {
        console.error(error)
      });
  })
})

//patch a composition
app.patch('/api/v1/compositions/:id', (request, response) => {
  const { id } = request.params;
  const { attributes } = request.body

  database('compositions').where('id', id).select()
    .then((user)=> {
      database('compositions').where('id', id).select().update({ attributes })
        .then(()=> {
          res.status(200)
        })
    })
    .catch((error) => {
      console.error(error)
    });
})

//delete a composition

//SOUNDS have ID(autoIncrementing), attributes, user_id, deleted attributes
//get sounds
app.get('/api/v1/sounds', (request, response) => {
  database('sounds').select()
    .then((sounds) => {
      response.status(200).json(sounds);
    })
    .catch(function(error) {
      console.error('somethings wrong with db')
      console.log(error)
    });
})

//get one sound by ID
app.get('/api/v1/sounds/:id', (request, response) => {
  const { id } = request.params;
  database('sounds').where('id', id).select()
    .then((urlData) => {
      response.status(202).json(urlData)
    })
    .catch((error)=>{
      response.status(422).send({
        error: 'ID did not match any existing sounds'
      })
    })
})

//post a sound
app.post('/api/v1/sounds', (request, response) => {
  const { attributes, user_id } = request.body
  const newSound = { attributes, user_id, deleted:false }

  database('sounds').insert(newSound)
  .then(()=> {
    database('sounds').select()
      .then((sounds) => {
        response.status(200).json(sounds);
      })
      .catch((error) => {
        console.error(error)
      });
  })
})

//patch a sound
app.patch('/api/v1/sounds/:id', (request, response) => {
  const { id } = request.params;
  const { attributes } = request.body

  database('sounds').where('id', id).select()
    .then((user)=> {
      database('sounds').where('id', id).select().update({ attributes })
        .then(()=> {
          res.status(200)
        })
    })
    .catch((error) => {
      console.error(error)
    });
})

//delete a sound

//display something at the root
app.get('/', function (request, response) {
  response.send('try out some real endpoints!')
})
