[Food pictures] in [Indian Food Composition Tables 2017].

```javascript
const pictures = require('@ifct2017/pictures');
// pictures.unpkg(<code>) -> picture url (unpkg.com) | null
// pictures.jsdelivr(<code>) -> picture url (cdn.jsdelivr.net) | null
// pictures(<code>)
// -> picture path || null (if not present)


pictures('A001');
// C:\Base\Forge\pictures\A001.jpeg

pictures.unpkg('A001');
// https://unpkg.com/@ifct2017/pictures/assets/A001.jpeg

pictures.jsdelivr('A001');
// https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/A001.jpeg
```


[![ifct2017](http://ninindia.org/images/ifct_2017.png)](https://www.npmjs.com/package/ifct2017)
> You can ask about composition of 528 key foods in India here: [ifct2017.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[Indian Food Composition Tables 2017]: http://ifct2017.com/
[Food pictures]: https://unpkg.com/@ifct2017/pictures@0.2.0/
[ifct2017.github.io]: https://ifct2017.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/document/d/1UVWVh-wPOR80M2sTy5naIJvR5DUNtf7lbOaPgCNQ9t4/edit?usp=sharing
[Webpage]: https://docs.google.com/document/d/e/2PACX-1vSyo24GtsTF0wuhKUndF6w5KZa1gZU7kDyDun-6-QZvsO-Hy7Zn2chxxyYa3gSp5kzy-4AQrfHqF0N0/pub
