Single representative [photo] of each foods (JPEG, 307x173).

> This is part of package [ifct2017].<br>
> Online database: [ifct2017.github.io].

<br>

```javascript
const pictures = require('@ifct2017/pictures');
// pictures(code)
// → path is present, null otherwise


pictures('A001');
// C:\Documents\pictures\A001.jpeg

pictures.unpkg('A001');
// https://unpkg.com/@ifct2017/pictures/assets/A001.jpeg

pictures.jsDelivr('A001');
// https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/A001.jpeg
```

```javascript
// Additional methods:
pictures.unpkg(code) // → UNPKG URL | null
pictures.jsDelivr(code) // → jsDelivr URL | null
```

<br>
<br>

[![](https://i.imgur.com/D5UYmbD.jpg)](http://ifct2017.com/)

> Data was obtained from the book [Indian Food Composition Tables 2017].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[ifct2017]: https://www.npmjs.com/package/ifct2017
[Indian Food Composition Tables 2017]: http://ifct2017.com/
[photo]: https://unpkg.com/@ifct2017/pictures@0.2.0/
[ifct2017.github.io]: https://ifct2017.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/document/d/1UVWVh-wPOR80M2sTy5naIJvR5DUNtf7lbOaPgCNQ9t4/edit?usp=sharing
[Webpage]: https://docs.google.com/document/d/e/2PACX-1vSyo24GtsTF0wuhKUndF6w5KZa1gZU7kDyDun-6-QZvsO-Hy7Zn2chxxyYa3gSp5kzy-4AQrfHqF0N0/pub
