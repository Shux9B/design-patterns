# 外观模式
## 定义
1. 为子系统中的一组接口提供一个一致的界面，此模式定义了一个高层接口，这个接口使得这一子系统更加容易使用
## 使用场景
1. 在设计初期应该有意识的将不同的两层分离，并在层与层之间建立外观
2. 在开发阶段，子系统往往因为不断的重构烟花而变得越来越复杂，增加外观可以提供一个简单的接口，减少他们之间的依赖
3. 在维护一个大型系统的时候，可能这个系统已经非常难以维护和扩展了，此时为新系统开发一个外观类，来提供谁粗糙或高度复杂的遗留代码的比较清晰简单的接口，让新系统与Facade对象交互，Facade与遗留代码交互所有复杂的工作。