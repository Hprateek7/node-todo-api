// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // },
    // (err)=>{
    //     console.log('Not able to delete :', err);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // },
    //     (err) => {
    //         console.log('Not able to delete :', err);
    //     });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
    //     console.log(result);
        
    // }, (err) => {
    //     console.log('Unable to find and delete');
        
    // } );

    db.collection('Users').deleteMany({name:'Andrew'}).then((result) => console.log(result),(err) => console.log(err));

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b8786083953b9e2209ee6d9')
    }).then((result) => {
        console.log('Users');
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch and delete', err);
    });
    // db.close();
});
