const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/User');

var id = '5b898f94c5771c14e48b2db3';

var userid = '5b88dd4027adfb2820d7e044';

if (!ObjectID.isValid(id)) {
    console.log('Id is not valid');
}

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo', todo);
}).catch((err) => {
    console.log(err);
});

//5b88dd4027adfb2820d7e044

User.findById(userid).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => {
    console.log(err);
});