const mongoose = require('mongoose');

const url = 'mongodb+srv://mirror:1234@cluster0.gghxf3n.mongodb.net/'

async function mongo() {
        await mongoose.connect(url);
  }
mongo().then(()=>{
    console.log('Connected to mongoDB')
}).catch((error)=>{
    console.log('Unable to connect to mongoDB', error)
})
