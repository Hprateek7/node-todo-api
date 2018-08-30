// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

//     db.collection('Todos').findOneAndUpdate({
//         _id: new ObjectID('5b86f5183953b9e2209eda8d')
//     },
// {
//     $set: {
//         completed: true
//     }
// },
// {
//     returnOriginal: false
// }).then((result) => console.log(result) , (err) => console.log(err) )

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b8785fb3953b9e2209ee6d3')
    },
        {
            $set: {
                name: 'Harsh'
            },
            $inc: {
                age : 1
            }
        },
        {
            returnOriginal: false
        }).then((result) => console.log(result), (err) => console.log(err))

    // db.close();
});
