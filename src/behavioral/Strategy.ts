interface IStrategy {
    method(): string
}
interface IStrategyConstructor {
    new():IStrategy
}
export class ObjectContext {
    request(strategy: IStrategyConstructor) {
        return new strategy()
    }
}
export class Strategy1 implements IStrategy {
    method(): string {
        return 'Strategy1'
    }
}
export class Strategy2 implements IStrategy {
    method(): string {
        return 'Strategy2'
    }
}