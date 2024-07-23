const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  
  codeMeli: {
    type: String,
    required: true,
  },
  brithDay: {
    type: String,
    required: true,
    
  },
  result: {
    type: String,
    required: true,
    
  },
  school: {
    type: String,
    
  },

});



const model = mongoose.models.dbNatayej || mongoose.model("dbNatayej", schema);

export default model;