const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://amit:TewTFc2JfjonIcEy@cluster01.4hqcj.mongodb.net/?retryWrites=true&w=majority");
    console.log('Database connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
