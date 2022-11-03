const mongoose = require("mongoose")

const ListSchema = mongoose.Schema({
  name: String,
  carted: {
    type: Boolean,
    default: false,
  },
})

mongoose.model("List", ListSchema)

module.exports = { ListSchema }
