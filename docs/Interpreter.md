# 解释器模式
## 定义
1. 如果一种特定类型的问题发生的频率足够高，那么可能就值得将该问题的各个实例表述为一个简单语言中的句子
2. 相当于构建一个解释器，该解释器通过解释这些句子来解决问题
## 好处
1. 容易地改变和扩展文法，因为该模式使用类来便是文法规则，你可使用继承来改变或扩展该文法
## 坏处
1. 需要为每一条规则至少定义了一个类，因此包含许多规则的文法可能难以管理和维护
## 使用场景
1. 当有一个语言需要解释执行，并且你可将该语言中的句子表示为一个抽象语法树时