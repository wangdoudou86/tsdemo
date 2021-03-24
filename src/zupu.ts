#!/usr/bin/env ts-node
{
    class Person {
        public name: string; 
        public children: Person[] = [];
        constructor(name: string){
            this.name = name
        }
        sayHi(){
            console.log('我是' + this.name)
        }
        addChild(child: Person): void{
            this.children.push(child)
        }
        introduceFamily(n?: number): void{
            let nn = n || 0
            let prefix = '----'.repeat(nn)
            console.log(`${prefix}${this.name}`)
            this.children.forEach(child => {
                child.introduceFamily(nn+1)
            })
        }

    }
    let grandpa  = new Person('张锤')
    let child1  = new Person('张一')
    let child11  = new Person('张大一')
    let child12  = new Person('张大二')
    let child2  = new Person('张二')
    let child21  = new Person('张二一')
    grandpa.addChild(child1)
    grandpa.addChild(child2)
    child1.addChild(child11)
    child1.addChild(child12)
    child2.addChild(child21)
    grandpa.introduceFamily()

}