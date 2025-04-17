// Copyright (C) 2025 Subhajit Sahu
// SPDX-License-Identifier: AGPL-3.0-or-later
// See LICENSE for full terms
import * as path from "jsr:@std/path@1.0.8";




//#region FUNCTIONS
/**
 * Gives path of a food picture.
 * @param code food code
 * @returns path if present, null otherwise
 * @example
 * ```javascript
 * pictures('A001');
 * // C:\Documents\pictures\A001.jpeg
 * ```
 */
export function pictures(code: string): string | null {
  if (code[0]>='M' && code[0]<'P') return null;
  return path.join(import.meta.dirname || '', code+'.jpeg');
}


/**
 * Gives UNPKG URL of a food picture.
 * @param code food code
 * @returns URL if present, null otherwise
 * @example
 * ```javascript
 * pictures.unpkg('A001');
 * // https://unpkg.com/@ifct2017/pictures/assets/A001.jpeg
 * ```
 */
export function picturesUnpkg(code: string): string | null {
  if (code[0]>='M' && code[0]<'P') return null;
  return `https://unpkg.com/@ifct2017/pictures/assets/${code}.jpeg`;
}


/**
 * Gives jsDelivr URL of a food picture.
 * @param code food code
 * @returns URL if present, null otherwise
 * @example
 * ```javascript
 * pictures.jsDelivr('A001');
 * // https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/A001.jpeg
 * ```
 */
export function picturesJsDelivr(code: string): string | null {
  if (code[0]>='M' && code[0]<'P') return null;
  return `https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/${code}.jpeg`;
}
//#endregion
