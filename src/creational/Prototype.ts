/**
 * 在有些系统中，存在大量相同或相似对象的创建问题，如果用传统的构造函数来创建对象，会比较复杂且耗时耗资源，用原型模式生成对象就很高效
 * 1. 同一学校的“三好学生”奖状除了获奖人姓名不同，其他都相同，属于相似对象的复制，同样可以用原型模式创建
 * 2. 对象之间相同或相似，即只是个别的几个属性不同的时候。
 * 3. 创建对象成本较大，例如初始化时间长，占用CPU太多，或者占用网络资源太多等，需要优化资源。
 * 4. 创建一个对象需要繁琐的数据准备或访问权限等，需要提高性能或者提高安全性。
 * 5. 系统中大量使用该类对象，且各个调用者都需要给它的属性重新赋值
 */
interface Cloneable {
    clone(): this
}
export default class Certificate implements Cloneable  {

    info:string[] = ['同学：在2016学年第一学期中表现优秀，被评为三好学生']
    name:string
    grant():string {
        return this.name + this.info.join('')
    } 
    constructor(name:string) {
        this.name = name
    }
    clone(): this {
        return Object.assign({grant: this.grant}, this)
    }
}