class SubSystemA {
    method(): string {
        return 'A'
    }
}
class SubSystemB {
    method(value: string): string {
        return value
    }
}
class SubSystemC {
    method(value: { C: number[] }): { C: number[] } {
        return value
    }
}
export default class SubSystem {
    SubSystemC (val:{ C: number[] }):{ C: number[] }{
        return new SubSystemC().method(val)
    }
    SubSystemB (val:string):string{
        return new SubSystemB().method(val)
    }
    SubSystemA ():string{
        return new SubSystemA().method(val)
    }
}