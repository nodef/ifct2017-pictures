# @ifct2017/pictures

[![ifct2017](http://ninindia.org/images/ifct_2017.png)](https://www.npmjs.com/package/ifct2017)

Food pictures in [Indian Food Composition Tables 2017].<br>
Check available [food pictures].

```javascript
const pictures = require('@ifct2017/pictures');
// pictures(<code>)
// -> picture url || null (if not present)

pictures('A001');
// https://unpkg.com/@ifct2017/pictures@0.2.0/A001.jpeg
pictures('T002');
// null
```


[Indian Food Composition Tables 2017]: http://ifct2017.com/
[food pictures]: https://unpkg.com/@ifct2017/pictures@0.2.0/
