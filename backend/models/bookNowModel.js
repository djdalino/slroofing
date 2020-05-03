const mongoose = require("mongoose");
const bookNowSchema = new mongoose.Schema({
  startDate: { type: String, required: true },
  pickTime: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  stateValue: { type: String, required: true },
  postal_code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BookNow", bookNowSchema);
