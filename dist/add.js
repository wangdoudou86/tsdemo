#!/usr/bin/env ts-node
"use strict";
var aa = parseInt(process.argv[2]);
var bb = parseInt(process.argv[3]);
if (Number.isNaN(aa) || Number.isNaN(bb)) {
    console.log('输入不合法');
    process.exit(2);
}
console.log(process.argv);
console.log(aa + bb);
process.exit(0);
