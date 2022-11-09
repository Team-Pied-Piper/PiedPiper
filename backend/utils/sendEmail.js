const { SchemaTypeOptions } = require("mongoose");
const nodemailer = require("nodemailer");

const sendEmail = async options => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b69bf7e6979ea7",
      pass: "9f79bc7b27ca27",
    },
  });

  const mensaje ={
    from : "Pipe Piper <noreply@vetyshop.com>",
    to : options.email,
    subject : options.subject,
    text : options.resetMessage
  }

  await transport.sendMail(mensaje)

};

module.exports = sendEmail;