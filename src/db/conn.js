const mongoose = require('mongoose')

const url = `mongodb+srv://mah111:mah111@cluster0.exavd.mongodb.net/students?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
   
    
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })