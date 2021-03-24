#!/usr/bin/env ts-node
"use strict";
{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.children = [];
            this.name = name;
        }
        Person.prototype.sayHi = function () {
            console.log('我是' + this.name);
        };
        Person.prototype.addChild = function (child) {
            this.children.push(child);
        };
        Person.prototype.introduceFamily = function (n) {
            var nn = n || 0;
            var prefix = '----'.repeat(nn);
            console.log("" + prefix + this.name);
            this.children.forEach(function (child) {
                child.introduceFamily(nn + 1);
            });
        };
        return Person;
    }());
    var grandpa = new Person('张锤');
    var child1 = new Person('张一');
    var child11 = new Person('张大一');
    var child12 = new Person('张大二');
    var child2 = new Person('张二');
    var child21 = new Person('张二一');
    grandpa.addChild(child1);
    grandpa.addChild(child2);
    child1.addChild(child11);
    child1.addChild(child12);
    child2.addChild(child21);
    grandpa.introduceFamily();
}
