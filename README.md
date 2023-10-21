# ⚠️ This package is deprecated. Telegraf has a builtin command parser now. See [v4.13.0 release notes](https://github.com/telegraf/telegraf/releases/tag/v4.13.0).

# Command Parts for Telegraf

This module is a plugin for the [Telegraf](http://telegraf.js.org/) Telegram
Bot Framework.

It provides a middleware that splits a command in a Telegram text message to
its parts. These parts are stored in `ctx.state.command`.

For example, if your text message is `/start@yourbot Hello world!`, the
`ctx.state.command` holds the following properties:

- `text` '/start@yourbot Hello world!'
- `command` 'start'
- `bot` 'yourbot'
- `args` 'Hello world!'
- `splitArgs` ['Hello', 'world!']

## installation

To use this module in your Telegraf app, require it and pass it to app.use.

```javascript
const commandParts = require('telegraf-command-parts');

app.use(commandParts());
```
