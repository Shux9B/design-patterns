import { describe, test, expect } from "@jest/globals";
import {Receiver, Command1, Command2, Invoker} from '../src/behavioral/Command'
describe('Command', () => {
    test('should be Called', () => {
       const reciver = new Receiver()
       const command1 = new Command1(reciver)
       const command2 = new Command2(reciver)
       const invoker = new Invoker()
       invoker.register('a',command1)
       invoker.register('b',command1)
       invoker.execute('a')
       expect(reciver.runCommand1).toBeCalledTimes(1)
    })
})