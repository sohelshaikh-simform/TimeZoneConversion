const expres = require("express");
const inquirer = require("inquirer");
const app = expres();
const validation = require("./util/validationTime");
const convert=require('./util/convertTime')
inquirer
  .prompt([
    {
      type: "input",
      name: "currentTimeZone",
      message: "CURRENT_TIMEZONE : ",
    },
    {
      type: "input",
      name: "convertToZone",
      message: "CONVERT_TO_TIMEZONE : ",
    },
    {
      type: "input",
      name: "currentTime",
      message: "CURRENT_TIME : ",
    },
  ])
  .then((answer) => {
    let CURRENT_TIMEZONE = answer.currentTimeZone
    let CONVERT_TO_TIMEZONE = answer.convertToZone;
    let CURRENT_TIME = answer.currentTime;

    if (!validation(CURRENT_TIME)) {
      throw new Error("PLease Enter Valid Time");
    }
    const ConvertedTime=convert(CURRENT_TIMEZONE,CONVERT_TO_TIMEZONE,CURRENT_TIME)
    console.log(ConvertedTime);
  })
  .catch((err) => {
    console.log(err);
  });
