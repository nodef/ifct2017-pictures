<!-- Copyright (C) 2025 Subhajit Sahu -->
<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- See LICENSE for full terms -->

This package provides single representative *photo* of each foods in IFCT2017 (JPEG, 307x173). For more details, please refer to the [@nodef/ifct2017](https://jsr.io/@nodef/ifct2017) package.

▌
📦 [JSR](https://jsr.io/@nodef/ifct2017-pictures),
📰 [Docs](https://jsr.io/@nodef/ifct2017-pictures/doc),

<br>


```javascript
import * as pictures from '@nodef/ifct2017-pictures';
// picturesUnpkg(code) → UNPKG URL | null
// picturesJsDelivr(code) → jsDelivr URL | null
// pictures(code)
// → path is present, null otherwise


pictures('A001');
// → C:\Documents\pictures\A001.jpeg

picturesUnpkg('A001');
// → https://unpkg.com/@ifct2017/pictures/assets/A001.jpeg

picturesJsDelivr('A001');
// → https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/A001.jpeg
```

<br>


## License

As of 18 April 2025, this project is licensed under AGPL-3.0. Previous versions remain under MIT.

<br>
<br>

> Data was obtained from the book [Indian Food Composition Tables 2017].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>

[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/ifct2017-pictures)

[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Indian Food Composition Tables 2017]: http://ifct2017.com/
[pictures-doc]: https://docs.google.com/document/d/1UVWVh-wPOR80M2sTy5naIJvR5DUNtf7lbOaPgCNQ9t4/edit?usp=sharing
[pictures-web]: https://docs.google.com/document/d/e/2PACX-1vSyo24GtsTF0wuhKUndF6w5KZa1gZU7kDyDun-6-QZvsO-Hy7Zn2chxxyYa3gSp5kzy-4AQrfHqF0N0/pub

<!-- [![](https://i.imgur.com/D5UYmbD.jpg)](http://ifct2017.com/)<br> -->
