class Engine { info(): string { return 'common engine' } }
export class NormalEngine extends Engine {
    info(): string {
        return "normal Engine"
    }
}
export class SuperEngine extends Engine {
    info(): string {
        return "super Engine"
    }
}
class Wheel { info(): string { return 'common wheel' } }
export class NormalWheel extends Wheel {
    info(): string {
        return "normal wheel"
    }
}
export class SuperWheel extends Wheel {
    info(): string {
        return "super wheel"
    }
}
export default class Car {
    #wheel: Wheel
    #engine: Engine
    constructor() {
        this.#wheel = new NormalWheel()
        this.#engine = new NormalEngine()
    }
    add(module: Wheel | Engine) {
        if (module instanceof Wheel) {
            this.#wheel = module
        }
        if (module instanceof Engine) {
            this.#engine = module
        }
    }
    check(moduleName: string): string {
        if (moduleName === 'wheel') {
            return this.#wheel.info()
        }
        if (moduleName === 'engine') {
            return this.#engine.info()
        }
    }
}