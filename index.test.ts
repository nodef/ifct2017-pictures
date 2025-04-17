// Copyright (C) 2025 Subhajit Sahu
// SPDX-License-Identifier: AGPL-3.0-or-later
// See LICENSE for full terms
import {assertEquals} from "jsr:@std/assert";
import {
  picturesUnpkg,
  picturesJsDelivr,
} from "./index.ts";




//#region TEST UNPKG, JSDELIVR
Deno.test("picturesUnpkg()", () => {
  const a = picturesUnpkg('A001');
  const b = 'https://unpkg.com/@ifct2017/pictures/assets/A001.jpeg';
  assertEquals(a, b);
});


Deno.test("picturesJsDelivr()", () => {
  const a = picturesJsDelivr('A001');
  const b = 'https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/A001.jpeg';
  assertEquals(a, b);
});
//#endregion
