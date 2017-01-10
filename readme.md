# UUID in Javascript

This is a UUID for javascript packaged in UMD format so that you can use it in node or on the browser. A UUID - universally unique identifier, is a 128-bit number used to identify information in computer systems. Currently, this module creates UUID ver. 4 which is based on random numbers. Look for [wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier) and [RFC-41220](https://www.ietf.org/rfc/rfc4122.txt) for further information.

## Getting Started
You can use the uuid.js file from dist directory. In browser, you can include the build file and use it as follows,
```html
<script src="../dist/uuid.js"></script>
<script type="text/javascript">
var uuid1 = new UUID();
console.log(uuid1.val());
</script>
```

or you can use `CommonJS`, `AMD`, or ECMA2015 module and classes for this.

You can also use this module in node js.

```javascript
> var UUID = require('./dist/uuid');
undefined
> var uuid1 = new UUID();
undefined
> console.log(uuid1.val());
33d2ae01-d495-4100-9075-c6e588a3d054
undefined
> console.log(uuid1.toByteArray());
Int8Array [ 51, -46, -82, 1, -13, 73, 5, 65, 0, -9, 7, 5, -58, -27, -120, -93 ]
undefined                                                                      
```

## Running the tests

You can check with npm.
```bash
$ npm run test
```
or you can check it on the browser. `./spec/SpecRunner.html`

## Authors

* **Sang Wook Kim** - *Initial work* - [github](https://github.com/sangwook-kim/)
