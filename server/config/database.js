const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/ed-uni-hub";

exports.connect = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connection Success");
    })
    .catch((err) => {
      console.error("DB Connection Failed");
      console.error(err);
      process.exit(1);
    });
};
