const { mount } = require('telegraf');

const regex = /^\/([^@\s]+)@?(?:(\S+)|)\s?([\s\S]+)?$/i;

/* eslint no-param-reassign: ["error", { "props": false }] */
module.exports = () => mount('text', (ctx, next) => {
  const parts = regex.exec(ctx.message.text.trim());
  if (!parts) return next();
  const command = {
    text: ctx.message.text,
    command: parts[1],
    bot: parts[2],
    args: parts[3],
    get splitArgs() {
      return !parts[3] ? [] : parts[3].split(/\s+/).filter(arg => arg.length);
    },
  };
  ctx.state.command = command;
  return next();
});
