/**
 * successor的鏈式處理
 */
interface IHandler {
    handle(payload:number):number
}
class Successor1 implements IHandler {
    handle(payload:number) {
        const test = Math.floor(Math.random() * 2) + 1
        if (test === 1) {
            payload += 1
            payload = new Successor1().handle(payload)
        } else {
            payload -= 1
            payload = new Successor2().handle(payload)
        }
        return payload
    }
}
class Successor2 implements IHandler {
    handle(payload:number) {
        const test = Math.floor(Math.random() * 3) + 1
        if (test === 1) {
            payload = payload * 2
            payload = new Successor1().handle(payload)
        } else if (test === 2) {
            payload = payload / 2
            payload = new Successor2().handle(payload)
        }
        return payload
    }
}
/**
 * 總的來説，責任鏈模式，是一個有多種處理器（successor）組成的單向鏈表
 * 再每個Successor執行時，將自己所有能做的部分全部處理掉，如果超出自己的範圍，則傳遞給下一個successor
 */
export default class Chain {
    start (payload: number) {
        return new Successor1().handle(payload)
    }
}