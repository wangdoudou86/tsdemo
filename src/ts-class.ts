
{
    // 接口
    interface A {
        num: number;
        b: boolean;
        str: string;
        optional?: string;
        add(n1: number, n2:number): number;
        readonly r: string;
    }

    //类
    class A {
        a1: number;
        a2(): void{};
        constructor(a1: number){
            this.a1 = a1
        }
    }
    class B extends A {
        b1: string;
        b2():void {};
        constructor(a1: number, b1: string){
            super(a1)
            this.b1 = b1
        }
    }
}