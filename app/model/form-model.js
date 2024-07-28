const { text } = require("express");
const mongoose = require("mongoose");

const { Schema, model } = mongoose; //destrucred from mongoose

const formSchema = new Schema({
  title: String,
  textFields: [
    {
      label: String,
      inputType: String,
      value: String,
      placeholder: String,
    }
  ],
  numberFields: [
    {
      label: String,
      inputType: String,
      value: Number,
      placeholder: String,
    },
  ],
  emailFields: [
    {
      label: String,
      inputType: String,
      value: String,
      placeholder: String,
    }
  ],
  passwordFields: [
    {
      label: String,
      inputType: String,
      value: String,
      placeholder: String,
    }
  ],
  dateFields: [{
    label: String,
    inputType: String,
    value: String,
    placeholder: String,
  }],
});

const Formtask = model("Form-Task", formSchema);

module.exports = Formtask;
