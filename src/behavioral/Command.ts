interface ICommand {
    execute(): string
}
export class Invoker {
    #commands: {[id: string]: ICommand}
    constructor () {
        this.#commands = {}
    }
    register (commandName: string, command: ICommand) {
        this.#commands[commandName] = command
    }
    execute (commandName: string) {
        if (commandName in this.#commands) {
            this.#commands[commandName].execute()
        } else {
            console.log(`command [${commandName}] not recognised`)
        }
    }
}
export class Receiver {
    runCommand1 = jest.fn();
    runCommand2 = jest.fn();
}
export class Command1 implements ICommand {
    #receiver:Receiver
    constructor (receiver: Receiver) {
        this.#receiver = receiver
    }
    execute(): string {
        return this.#receiver.runCommand1()
    }
}
export class Command2 implements ICommand {
    #receiver: Receiver
    constructor(receiver: Receiver) {
        this.#receiver = receiver
    }
    execute():string {
        return this.#receiver.runCommand2()
    }
}

/**
 *  也是面嚮對象的封裝
 *  通過命令將實現和控制分離
 *  在暴露一個可用命令的enum更好
 */