#!/usr/bin/env ts-node

const aa: number = parseInt(process.argv[2]);
const bb: number = parseInt(process.argv[3]);

if (Number.isNaN(aa) || Number.isNaN(bb)) {
  console.log('输入不合法');
  process.exit(2);
}

console.log(process.argv)
console.log(aa + bb);
process.exit(0);