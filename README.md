# mediator

Mediator module (based on [component/emitter](https://github.com/component/emitter))

## Installation

Install with [component(1)](http://component.io):

```bash
$ component install nk-components/mediator
```

With npm:

```bash
$ npm i -S nk-mediator
```

## Usage

```js
var mediator = require('nk-mediator');

function handler(param) {}

mediator.sub('channel', handler);
mediator.subOnce('channel', function(param) {});

mediator.unsub('channel', handler);

mediator.pub('channel', 'param1', 'param2');
```

## License

MIT
