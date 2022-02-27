export default class School {
    #Schools: Map<String,School>
    constructor () {
        this.#Schools = new Map()
    }
    createSchool(name:string) {
        if (this.#Schools.has(name)) {
            return this.#Schools.get(name)
        } else {
            this.#Schools.set(name, new School())
            return this.#Schools.get(name)
        }
    }
    join = jest.fn()
}