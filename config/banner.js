const figlet = require("figlet");
const colors = require("./colors");

function displayBanner() {
  const banner = figlet.textSync("PawWallet BOT", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
  });

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█ █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█ █░░║║║╠─║─║─║║║║║╠─░░█ █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█ █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

module.exports = displayBanner;
