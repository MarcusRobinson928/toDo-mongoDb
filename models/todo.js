mongoose = require('mongoose');


Schema = mongoose.Schema;


ToDoSchema = new Schema({
  todo: {
    type: String,
    unique: true,
    required: "You must include a to do"
  },
});


ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;