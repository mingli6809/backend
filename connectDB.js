const { mongoose } = require('mongoose')
const dotenv = require("dotenv")
dotenv.config();
// console.log(process.env)

const connectDB = async (input) => {
  try {
  //  const x = await mongoose.connect("mongodb://localhost:27017/test")
    const x=await  mongoose.connect('mongodb+srv://greenvideo1:lm970131@cluster0.1ndekrv.mongodb.net/test');
    console.log("Connected to db");
    if (input.drop === true)
      mongoose.connection.db.dropDatabase();
    // console.log("Dropped db");
    // get the data from Github 
  } catch (error) {
    console.log('db error');
  }
}

module.exports = { connectDB }