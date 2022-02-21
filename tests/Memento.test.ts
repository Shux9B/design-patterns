import { describe, test, expect } from "@jest/globals";
import {Originator, CareTaker} from '../src/behavioral/Memento'
describe('Memento', () => {
    test('should return state2', () => {
        const ori = new Originator()
        const taker = new CareTaker(ori)
        ori.state = 'state1'
        ori.state = 'state2'
        taker.create()
        ori.state = 'state3'
        taker.create()
        ori.state = 'state4'
        taker.create()
        expect(ori.state).toBe('state4')
        taker.restore(1)
        expect(ori.state).toBe('state3')
    })
})