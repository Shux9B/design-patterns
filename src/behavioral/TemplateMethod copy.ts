import {fn} from 'jest'
abstract class AbstractClass {
    stepOne():void {}
    abstract stepTwo():void
    stepThree():void {}
    templateMethod() {
        this.stepOne()
        this.stepTwo()
        this.stepThree()
    }
}
class SubClassA extends AbstractClass {
    stepTwo = fn()
}
class SubClassB extends AbstractClass {
    stepOne = fn()
    stepThree = fn()
    stepTwo = fn()
}