# 建造者模式
## 定义
1. 将一个复杂对象的构建与他的表示分离，使得同样的构建过程可以创建不同的表示
2. 用户只需制定需要创造的类型，而具体建造的过程和细节就不需要知道了
## 包含
1. builder: 具体的建造者，构造和装配各个部件
2. director: 构建一个Builder的对象（Template） 
## 使用场景
1. 主要用于创建一些复杂的对象，这些对象内部构建间的建造顺序通常是稳定的，但对象内部的构建通常面临着复杂的变化。