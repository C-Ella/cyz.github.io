(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{216:function(s,e,n){"use strict";n.r(e);var a=n(0),t=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#入门","aria-hidden":"true"}},[s._v("#")]),s._v(" 入门")]),s._v(" "),n("h3",{attrs:{id:"基础类型和扩展类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础类型和扩展类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 基础类型和扩展类型")]),s._v(" "),n("p",[s._v("Typescript与Javascript共享相同的基本类型，但有一些额外的类型。")]),s._v(" "),n("ul",[n("li",[s._v("元组 Tuple")]),s._v(" "),n("li",[s._v("枚举 enum")]),s._v(" "),n("li",[s._v("Any 与 Void")])]),s._v(" "),n("h4",{attrs:{id:"基本类型合集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本类型合集","aria-hidden":"true"}},[s._v("#")]),s._v(" 基本类型合集")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 数字，二、八、十六进制都支持\nlet decLiteral: number = 6;\nlet hexLiteral: number = 0xf00d;\n\n// 字符串，单双引都行\nlet name: string = "bob";\nlet sentence: string = `Hello, my name is ${ name }.`\n\n// 数组，第二种方式是使用数组泛型，Array<元素类型>：\nlet list: number[] = [1, 2, 3];\nlet list: Array<number> = [1, 2, 3];\n\nlet u: undefined = undefined;\nlet n: null = null;\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h4",{attrs:{id:"特殊类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 特殊类型")]),s._v(" "),n("ol",[n("li",[s._v("元组 Tuple")])]),s._v(" "),n("p",[s._v("想象 元组 作为有组织的数组，你需要以正确的顺序预定义数据类型。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const messyArray = [\' something\', 2, true, undefined, null];\nconst tuple: [number, string, string] = [24, "Indrek" , "Lasn"]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("如果不遵循 为元组 预设排序的索引规则，那么Typescript会警告。")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("枚举 enum")])]),s._v(" "),n("p",[s._v("enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 默认情况从0开始为元素编号，也可手动为1开始\nenum Color {Red = 1, Green = 2, Blue = 4}\nlet c: Color = Color.Green;\n\nlet colorName: string = Color[2];\nconsole.log(colorName);  // 输出'Green'因为上面代码里它的值是2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("使用枚举来存储应用程序状态。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("enum AppStates {\n  hasErrors,\n  isFetching,\n  isUserLoggedIn,\n  doesUserHaveProfileImage\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("void")])]),s._v(" "),n("p",[s._v("在Typescript中，你必须在函数中定义返回类型。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('function sayMyName(name:string): string {\n  return name;\n}\n\nconsole.log(sayMyName("indrek"))\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("若没有返回值，则会报错：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function sayMyName(name:string): string {\n  console.log(name) // Error\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("我们可以将其返回值定义为void:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const sayMyName = function sayMyName(name:string): void {\n  myCallBack(name)\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("此时将无法 return")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function myCallBack(name: string)： void {\n  console.log(name)\n\n  return name; // Error\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("Any")])]),s._v(" "),n("p",[s._v("可以使用所有类型，当你无法确认在处理什么类型时可以使用这个（慎重使用）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let person: any = "XXX"\nperson = 25\nperson = true\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("主要应用场景：")]),s._v(" "),n("ul",[n("li",[s._v("接入第三方库")])]),s._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[s._v("Never")])]),s._v(" "),n("p",[s._v("具体的行为：")]),s._v(" "),n("ul",[n("li",[s._v("throw new Error(message)")]),s._v(" "),n("li",[s._v('return error("Something failed")')]),s._v(" "),n("li",[s._v("while (true) {} // 存在无法达到的终点")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const error = (message: string): never => {\n  throw new Error(message)\n}\n\nconst showError = () => error('generic error message')\n\nshowError()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"类型断言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类型断言","aria-hidden":"true"}},[s._v("#")]),s._v(" 类型断言")]),s._v(" "),n("p",[s._v("可以用来手动指定一个值的类型。")]),s._v(" "),n("p",[s._v("有两种写法，尖括号和as:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let someValue： any = "this is a string"\nlet strLength: number = (<string>someValue).length\nlet strLength: number = (someValue as string).length\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function getLength(something: string | number): number {\n    return something.length;\n}\n\n// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.\n//   Property 'length' does not exist on type 'number'.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("有时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法，此时需要断言才不会报错：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function getLength(something: string | number): number {\n    if ((<string>something).length) {\n        return (<string>something).length;\n    } else {\n        return something.toString().length;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"泛型：generics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型：generics","aria-hidden":"true"}},[s._v("#")]),s._v(" 泛型：Generics")]),s._v(" "),n("p",[s._v('可以使用"泛型"来创建可复用的组件，并且组件可支持多种数据类型。这样便可以让用户根据自己的数据类型来使用组件。')]),s._v(" "),n("h4",{attrs:{id:"泛型方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 泛型方法")]),s._v(" "),n("p",[s._v("在TypeScript里，声明泛型方法有以下两种方式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function gen_func1<T>(arg: T): T {\n    return arg;\n}\n// 或者\nlet gen_func2: <T>(arg: T) => T = function (arg) {\n    return arg;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("调用方式也有两种：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("gen_func1<string>('Hello world');\ngen_func2('Hello world'); \n// 第二种调用方式可省略类型参数，因为编译器会根据传入参数来自动识别对应的类型。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"泛型与any"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型与any","aria-hidden":"true"}},[s._v("#")]),s._v(" 泛型与Any")]),s._v(" "),n("p",[s._v("Ts 的特殊类型 Any 在具体使用时，可以代替任意类型，咋一看两者好像没啥区别，其实不然：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 方法一：带有any参数的方法\nfunction any_func(arg: any): any {\n    console.log(arg.length);\n\t\treturn arg;\n}\n// 打印了arg参数的length属性。因为any可以代替任意类型，所以该方法在传入参数不是数组或者带有length属性对象时，会抛出异常。\n\n// 方法二：Array泛型方法\nfunction array_func<T>(arg: Array<T>): Array<T> {\n\t  console.log(arg.length);\n\t\treturn arg;\n}\n// 定义了参数类型是Array的泛型类型，肯定会有length属性，所以不会抛出异常。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h4",{attrs:{id:"泛型类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#泛型类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 泛型类型")]),s._v(" "),n("p",[s._v("泛型接口：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface Generics_interface<T> {\n    (arg: T): T;\n}\n \nfunction func_demo<T>(arg: T): T {\n    return arg;\n}\n\nlet func1: Generics_interface<number> = func_demo;\nfunc1(123);     // 正确类型的实际参数\nfunc1('123');   // 错误类型的实际参数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"自定义类型：interface-vs-type-alias"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义类型：interface-vs-type-alias","aria-hidden":"true"}},[s._v("#")]),s._v(" 自定义类型：Interface vs Type alias")]),s._v(" "),n("p",[s._v("Interface，国内翻译成接口。")]),s._v(" "),n("p",[s._v("Type alias，类型别名。")]),s._v(" "),n("ol",[n("li",[s._v("相同点")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("都可以用来描述一个对象或函数：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface User {\n  name: string\n  age: number\n}\n\ntype User = {\n  name: string\n  age: number\n};\n\ninterface SetUser {\n  (name: string, age: number): void;\n}\ntype SetUser = (name: string, age: number): void;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("都允许拓展（extends）：")]),s._v(" "),n("p",[s._v("interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说interface可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。")]),s._v(" "),n("ul",[n("li",[s._v("interface extends interface"),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface Name { \n  name: string; \n}\ninterface User extends Name { \n  age: number; \n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])]),s._v(" "),n("li",[s._v("type extends type"),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("type Name = { \n  name: string; \n}\ntype User = Name & { age: number  };\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])]),s._v(" "),n("li",[s._v("interface extends type"),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("type Name = { \n  name: string; \n}\ninterface User extends Name { \n  age: number; \n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])]),s._v(" "),n("li",[s._v("type extends interface"),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface Name { \n  name: string; \n}\ntype User = Name & { \n  age: number; \n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])])])]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("不同点")])]),s._v(" "),n("h5",{attrs:{id:"type-可以而-interface-不行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-可以而-interface-不行","aria-hidden":"true"}},[s._v("#")]),s._v(" type 可以而 interface 不行")]),s._v(" "),n("ul",[n("li",[s._v("type 可以声明基本类型别名，联合类型，元组等类型")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 基本类型别名\ntype Name = string\n\n// 联合类型\ninterface Dog {\n    wong();\n}\ninterface Cat {\n    miao();\n}\n\ntype Pet = Dog | Cat\n\n// 具体定义数组每个位置的类型\ntype PetList = [Dog, Pet]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("type 语句中还可以使用 typeof获取实例的 类型进行赋值")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 当你想获取一个变量的类型时，使用 typeof\nlet div = document.createElement('div');\ntype B = typeof div\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("其他骚操作")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("type StringOrNumber = string | number;  \ntype Text = string | { text: string };  \ntype NameLookup = Dictionary<string, Person>;  \ntype Callback<T> = (data: T) => void;  \ntype Pair<T> = [T, T];  \ntype Coordinates = Pair<number>;  \ntype Tree<T> = T | { left: Tree<T>, right: Tree<T> };\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h5",{attrs:{id:"interface可以而-type不行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interface可以而-type不行","aria-hidden":"true"}},[s._v("#")]),s._v(" interface可以而 type不行")]),s._v(" "),n("ul",[n("li",[s._v("interface 能够声明合并")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface User {\n  name: string\n  age: number\n}\n\ninterface User {\n  sex: string\n}\n\n/*\nUser 接口为 {\n  name: string\n  age: number\n  sex: string \n}\n*/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("interface 有可选属性和只读属性")]),s._v(" "),n("ul",[n("li",[s._v("可选属性")])]),s._v(" "),n("p",[s._v("接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 例如给函数传入的参数对象中只有部分属性赋值了。带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个 "),n("code",[s._v("?")]),s._v(" 符号。如下所示")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface Person {\n  name: string;\n  age?: number;\n  gender?: number;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("只读属性")])]),s._v(" "),n("p",[s._v("顾名思义就是这个属性是不可写的，对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 "),n("code",[s._v("readonly")]),s._v(" 来指定只读属性，如下所示：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface User {\n  readonly loginName: string;\n  password: string;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"实现与继承：implements-vs-extends"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现与继承：implements-vs-extends","aria-hidden":"true"}},[s._v("#")]),s._v(" 实现与继承：implements vs extends")]),s._v(" "),n("p",[n("code",[s._v("implement")]),s._v(" 实现与 "),n("code",[s._v("C#")]),s._v(" 或 "),n("code",[s._v("Java")]),s._v(" 里接口的基本作用一样，"),n("code",[s._v("TypeScript")]),s._v(" 也能够用它来明确的强制一个类去符合某种契约")]),s._v(" "),n("h5",{attrs:{id:"implement基本用法："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implement基本用法：","aria-hidden":"true"}},[s._v("#")]),s._v(" implement基本用法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface IDeveloper {\n   name: string;\n   age?: number;\n}\n// OK\nclass dev implements IDeveloper {\n    name = 'Alex';\n    age = 20;\n}\n// OK\nclass dev2 implements IDeveloper {\n    name = 'Alex';\n}\n// Error\nclass dev3 implements IDeveloper {\n    name = 'Alex';\n    age = '9';\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("而 "),n("code",[s._v("extends")]),s._v(" 是继承父类，两者其实可以混着用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class A extends B implements C,D,E\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("搭配 "),n("code",[s._v("interface")]),s._v(" 和 "),n("code",[s._v("type")]),s._v(" 的用法有：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("interface Shape {\n  area(): number\n}\ntype Perimeter = {\n  perimiter(): number\n}\n\nclass Rectangle implement PointType, Shape, Perimeter {\n  x = 2\n  y = 3\n  area () {\n    return this.x * this.y\n  }\n  perimiter () {\n    return 2 * (this.x + this.y)\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"声明文件与命名空间：declare-和-namespace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明文件与命名空间：declare-和-namespace","aria-hidden":"true"}},[s._v("#")]),s._v(" 声明文件与命名空间：declare 和 namespace")]),s._v(" "),n("p",[s._v("Vue项目中的 "),n("code",[s._v("shims-tsx.d.ts")]),s._v(" 和 "),n("code",[s._v("shims-vue.d.ts")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// shims-tsx.d.ts\nimport Vue, { VNode } from 'vue';\n\ndeclare global {\n  namespace JSX {\n    // tslint:disable no-empty-interface\n    interface Element extends VNode {}\n    // tslint:disable no-empty-interface\n    interface ElementClass extends Vue {}\n    interface IntrinsicElements {\n      [elem: string]: any;\n    }\n  }\n}\n\n// shims-vue.d.ts\ndeclare module '*.vue' {\n  import Vue from 'vue';\n  export default Vue;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[n("code",[s._v("declare")]),s._v("：当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("declare var 声明全局变量\ndeclare function 声明全局方法\ndeclare class 声明全局类\ndeclare enum 声明全局枚举类型\ndeclare global 扩展全局变量\ndeclare module 扩展模块\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("code",[s._v("namespace")]),s._v("：“内部模块”现在称做“命名空间”")]),s._v(" "),n("p",[n("code",[s._v("module X {}")]),s._v(" (相当于现在推荐的写法 "),n("code",[s._v("namespace X {}")]),s._v(")")]),s._v(" "),n("h5",{attrs:{id:"跟其他-js-库协同"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#跟其他-js-库协同","aria-hidden":"true"}},[s._v("#")]),s._v(" 跟其他 JS 库协同")]),s._v(" "),n("p",[s._v("类似模块，同样也可以通过为其他 JS 库使用了命名空间的库创建 .d.ts 文件的声明文件，如为 D3 JS 库，可以创建这样的声明文件：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("declare namespace D3{\n    export interface Selectors { ... }\n}\ndeclare var d3: D3.Base;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("所以上述两个文件：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("shims-tsx.d.ts")]),s._v("， 在全局变量 "),n("code",[s._v("global")]),s._v(" 中批量命名了数个内部模块。")]),s._v(" "),n("li",[n("code",[s._v("shims-vue.d.ts")]),s._v("，意思是告诉 "),n("code",[s._v("TypeScript *.vue")]),s._v(" 后缀的文件可以交给 "),n("code",[s._v("vue")]),s._v(" 模块来处理。")])]),s._v(" "),n("h3",{attrs:{id:"访问修饰符：private、public、protected"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问修饰符：private、public、protected","aria-hidden":"true"}},[s._v("#")]),s._v(" 访问修饰符："),n("code",[s._v("private")]),s._v("、"),n("code",[s._v("public")]),s._v("、"),n("code",[s._v("protected")])]),s._v(" "),n("ol",[n("li",[s._v("默认为"),n("code",[s._v("public")])]),s._v(" "),n("li",[s._v("当成员被标记为"),n("code",[s._v("private")]),s._v("时，它就不能在声明它的类的外部访问，比如：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Animal {\n    private name: string;\n    constructor(theName: string) {\n        this.name = theName;\n    }\n}\n\nlet a = new Animal('Cat').name; //错误，‘name’是私有的\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[n("code",[s._v("protected")]),s._v(" 和 "),n("code",[s._v("private")]),s._v(" 类似，但是，"),n("code",[s._v("protected")]),s._v(" 成员在派生类中可以访问")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Animal {\n    protected name: string;\n    constructor(theName: string) {\n        this.name = theName;\n    }\n}\n\nclass Rhino extends Animal {\n    constructor() {\n        super('Rhino');\n   }         \n   getName() {\n       console.log(this.name) //此处的name就是Animal类中的name\n   }\n} \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"可选参数-和非空断言操作符（-）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可选参数-和非空断言操作符（-）","aria-hidden":"true"}},[s._v("#")]),s._v(" 可选参数 ( ?: )和非空断言操作符（!.）")]),s._v(" "),n("h4",{attrs:{id:"可选参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可选参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 可选参数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('function buildName(firstName: string, lastName?: string) {\n    return firstName + \' \' + lastName\n}\n\n// 错误演示\nbuildName("firstName", "lastName", "lastName")\n// 正确演示\nbuildName("firstName")\n// 正确演示\nbuildName("firstName", "lastName")\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h4",{attrs:{id:"非空断言操作符："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非空断言操作符：","aria-hidden":"true"}},[s._v("#")]),s._v(" 非空断言操作符：")]),s._v(" "),n("p",[s._v("能确定变量值一定不为空时使用。")]),s._v(" "),n("p",[s._v("与可选参数 不同的是，非空断言操作符不会防止出现 null 或 undefined。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let s = e!.name;  // 断言e是非空并访问name属性\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}],!1,null,null,null);t.options.__file="README.md";e.default=t.exports}}]);