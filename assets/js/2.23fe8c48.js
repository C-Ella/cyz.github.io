(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{170:function(s,t,n){s.exports=n.p+"assets/img/this.de3a8b15.png"},171:function(s,t,n){s.exports=n.p+"assets/img/==.6864123f.png"},172:function(s,t,n){s.exports=n.p+"assets/img/proto.ce4b0fc8.png"},173:function(s,t,n){s.exports=n.p+"assets/img/proto_1.0eda1a47.png"},208:function(s,t,n){"use strict";n.r(t);var a=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"原始（primitive）类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始（primitive）类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 原始（Primitive）类型")]),s._v(" "),a("blockquote",[a("p",[s._v("涉及面试题：原始类型有哪几种？null 是对象嘛？")])]),s._v(" "),a("h3",{attrs:{id:"共六种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共六种","aria-hidden":"true"}},[s._v("#")]),s._v(" 共六种")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("boolean")])]),s._v(" "),a("li",[a("code",[s._v("null")])]),s._v(" "),a("li",[a("code",[s._v("undefined")])]),s._v(" "),a("li",[a("code",[s._v("number")])]),s._v(" "),a("li",[a("code",[s._v("string")])]),s._v(" "),a("li",[a("code",[s._v("symbol")])])]),s._v(" "),a("blockquote",[a("p",[s._v("Tips")])]),s._v(" "),a("ol",[a("li",[s._v("原始类型存储的都是值，是没有函数可以调用的")]),s._v(" "),a("li",[s._v("JS 的 number 类型是浮点类型的")]),s._v(" "),a("li",[s._v("string 类型是不可变的，无论你在 string 类型上调用何种方法，都不会对值有改变")]),s._v(" "),a("li",[s._v("虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug")])]),s._v(" "),a("h2",{attrs:{id:"对象（object）类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象（object）类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 对象（Object）类型")]),s._v(" "),a("blockquote",[a("p",[s._v("涉及面试题：对象类型和原始类型的不同之处？函数参数是对象会发生什么问题？")])]),s._v(" "),a("ul",[a("li",[s._v("在 JS 中，除了原始类型那么其他的都是对象类型了。")]),s._v(" "),a("li",[s._v("对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function test(person) {\n  person.age = 26\n  person = {\n    name: 'yyy',\n    age: 30\n  }\n\n  return person\n}\nconst p1 = {\n  name: 'yck',\n  age: 25\n}\nconst p2 = test(p1)\nconsole.log(p1) // -> age: 26, name: \"yck\"\nconsole.log(p2) // -> age: 30, name: \"yyy\"\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[s._v("函数传参是传递对象指针的副本")])]),s._v(" "),a("h2",{attrs:{id:"typeof-vs-instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-vs-instanceof","aria-hidden":"true"}},[s._v("#")]),s._v(" typeof vs instanceof")]),s._v(" "),a("blockquote",[a("p",[s._v("涉及面试题：typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？")])]),s._v(" "),a("ul",[a("li",[s._v("typeof 对于原始类型来说，除了 null 都可以显示正确的类型")]),s._v(" "),a("li",[s._v("typeof 对于对象来说，除了函数都会显示 object")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typeof 1 // 'number'\ntypeof '1' // 'string'\ntypeof undefined // 'undefined'\ntypeof true // 'boolean'\ntypeof Symbol() // 'symbol'\ntypeof [] // 'object'\ntypeof {} // 'object'\ntypeof console.log // 'function'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("对于原始类型来说，你想直接通过 instanceof 来判断类型是不行的")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const Person = function() {}\nconst p1 = new Person()\np1 instanceof Person // true\n\nvar str = 'hello world'\nstr instanceof String // false\n\nvar str1 = new String('hello world')\nstr1 instanceof String // true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"instanceof-判断原始类型的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-判断原始类型的","aria-hidden":"true"}},[s._v("#")]),s._v(" instanceof 判断原始类型的")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class PrimitiveString {\n  static [Symbol.hasInstance](x) {\n    return typeof x === 'string'\n  }\n}\nconsole.log('hello world' instanceof PrimitiveString) // true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("Symbol.hasInstance：自定义 instanceof 行为")]),s._v(" "),a("h2",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换","aria-hidden":"true"}},[s._v("#")]),s._v(" 类型转换")]),s._v(" "),a("p",[s._v("在 JS 中类型转换只有三种情况，分别是：")]),s._v(" "),a("ul",[a("li",[s._v("转换为布尔值")]),s._v(" "),a("li",[s._v("转换为数字")]),s._v(" "),a("li",[s._v("转换为字符串")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[s._v("原始值")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("转换目标")]),s._v(" "),a("th",[s._v("结果")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("布尔值")]),s._v(" "),a("td",[s._v("除了0、-0、NaN都为true")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("布尔值")]),s._v(" "),a("td",[s._v("除了空串都为true")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("underfined、null")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("布尔值")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("引用类型")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("布尔值")]),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("字符串")]),s._v(" "),a("td",[s._v("5=>'5'")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("Boolean、函数、Symbol")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("字符串")]),s._v(" "),a("td",[s._v("‘true’")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("数组")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("字符串")]),s._v(" "),a("td",[s._v("[1,2]=>'1,2'")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("对象")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("字符串")]),s._v(" "),a("td",[s._v("'[object Object]'")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("数字")]),s._v(" "),a("td",[s._v("'1'=>1,'a'=>NaN")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("数组")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("数字")]),s._v(" "),a("td",[s._v("空数组为0，存在一个元素且为数字转数字，其他情况为NaN")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("null")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("数字")]),s._v(" "),a("td",[s._v("0")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("除了数组的引用类型")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("数字")]),s._v(" "),a("td",[s._v("NaN")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[s._v("Symbol")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("数字")]),s._v(" "),a("td",[s._v("抛错")])])])]),s._v(" "),a("h3",{attrs:{id:"转boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转boolean","aria-hidden":"true"}},[s._v("#")]),s._v(" 转Boolean")]),s._v(" "),a("p",[s._v("在条件判断时，除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象。")]),s._v(" "),a("h3",{attrs:{id:"对象转原始类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象转原始类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 对象转原始类型")]),s._v(" "),a("p",[s._v("对象在转换类型的时候，会调用内置的 [[ToPrimitive]] 函数")]),s._v(" "),a("ul",[a("li",[s._v("如果已经是原始类型了，那就不需要转换了")]),s._v(" "),a("li",[s._v("调用 x.valueOf()，如果转换为基础类型，就返回转换的值")]),s._v(" "),a("li",[s._v("调用 x.toString()，如果转换为基础类型，就返回转换的值")]),s._v(" "),a("li",[s._v("如果都没有返回原始类型，就会报错")])]),s._v(" "),a("blockquote",[a("p",[s._v("你也可以重写 Symbol.toPrimitive ，该方法在转原始类型时调用优先级最高")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let a = {\n  valueOf() {\n    return 0\n  },\n  toString() {\n    return '1'\n  },\n  [Symbol.toPrimitive]() {\n    return 2\n  }\n}\n1 + a // => 3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"四则运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四则运算符","aria-hidden":"true"}},[s._v("#")]),s._v(" 四则运算符")]),s._v(" "),a("p",[s._v("加法运算符不同于其他几个运算符，它有以下几个特点：")]),s._v(" "),a("ul",[a("li",[s._v("运算中其中一方为字符串，那么就会把另一方也转换为字符串")]),s._v(" "),a("li",[s._v("如果一方不是字符串或者数字，那么会将它转换为数字或者字符串")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1 + '1' // '11'（将数字 1 转换为字符串）\ntrue + true // 2（将 true 转为数字 1）\n4 + [1,2,3] // \"41,2,3\"（将数组通过 toString 转为字符串 1,2,3）\n'a' + + 'b' // -> \"aNaN\"（+ 'b' 等于 NaN，所以结果为 \"aNaN\"）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("只要其中一方是数字，那么另一方就会被转为数字")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("4 * '3' // 12\n4 * [] // 0\n4 * [1, 2] // NaN\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符","aria-hidden":"true"}},[s._v("#")]),s._v(" 比较运算符")]),s._v(" "),a("ul",[a("li",[s._v("如果是对象，就通过 toPrimitive 转换对象")]),s._v(" "),a("li",[s._v("如果是字符串，就通过 unicode 字符索引来比较")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let a = {\n  valueOf() {\n    return 0\n  },\n  toString() {\n    return '1'\n  }\n}\na > -1 // true（因为 a 是对象，所以会通过 valueOf 转换为原始类型再比较值）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this","aria-hidden":"true"}},[s._v("#")]),s._v(" this")]),s._v(" "),a("blockquote",[a("p",[s._v("如何正确判断 this？箭头函数的 this 是什么？")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function foo() {\n  console.log(this.a)\n}\nvar a = 1\nfoo()\n\x3c!-- 对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是 window --\x3e\n\nconst obj = {\n  a: 2,\n  foo: foo\n}\nobj.foo()\n\x3c!-- 对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下 foo 函数中的 this 就是 obj 对象 --\x3e\n\nconst c = new foo()\n\x3c!-- 对于 new 的方式来说，this 被永远绑定在了 c 上面，不会被任何方式改变 this --\x3e\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("箭头函数中的 this：箭头函数其实是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this。\n对箭头函数使用 bind 这类函数是无效的。")]),s._v(" "),a("p",[s._v("bind 这些改变上下文的 API 来说，this 取决于第一个参数，如果第一个参数为空，那么就是 window。")]),s._v(" "),a("blockquote",[a("p",[s._v("new 的方式优先级最高，接下来是 bind 这些函数，然后是 obj.foo() 这种调用方式，最后是 foo 这种调用方式，同时，箭头函数的 this 一旦被绑定，就不会再被任何方式所改变。")])]),s._v(" "),a("p",[a("img",{attrs:{src:n(170),alt:"this",title:"this"}})]),s._v(" "),a("h2",{attrs:{id:"vs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs","aria-hidden":"true"}},[s._v("#")]),s._v(" == vs ===")]),s._v(" "),a("blockquote",[a("p",[s._v("== 和 === 有什么区别？\n对于 == 来说，如果对比双方的类型不一样的话，就会进行类型转换")])]),s._v(" "),a("h3",{attrs:{id:"判断流程："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断流程：","aria-hidden":"true"}},[s._v("#")]),s._v(" 判断流程：")]),s._v(" "),a("ol",[a("li",[s._v("首先会判断两者类型是否相同。相同的话就是比大小了")]),s._v(" "),a("li",[s._v("类型不相同的话，那么就会进行类型转换")]),s._v(" "),a("li",[s._v("会先判断是否在对比 null 和 undefined，是的话就会返回 true")]),s._v(" "),a("li",[s._v("判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number")]),s._v(" "),a("li",[s._v("判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断")]),s._v(" "),a("li",[s._v("判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断\n"),a("img",{attrs:{src:n(171),alt:"==",title:"=="}})])]),s._v(" "),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[s._v("#")]),s._v(" 闭包")]),s._v(" "),a("blockquote",[a("p",[s._v("什么是闭包？")])]),s._v(" "),a("p",[s._v("闭包的定义其实很简单：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。")]),s._v(" "),a("p",[s._v("在 JS 中，闭包存在的意义就是让我们可以间接访问函数内部的变量。")]),s._v(" "),a("h3",{attrs:{id:"循环中使用闭包解决-var-定义函数的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环中使用闭包解决-var-定义函数的问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 循环中使用闭包解决 "),a("code",[s._v("var")]),s._v(" 定义函数的问题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for (var i = 1; i <= 5; i++) {\n  setTimeout(function timer() {\n    console.log(i)\n  }, i * 1000)\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决办法","aria-hidden":"true"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),a("ol",[a("li",[s._v("使用闭包的方式"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for (var i = 1; i <= 5; i++) {\n    ;(function(j) {\n        setTimeout(function timer() {\n        console.log(j)\n        }, j * 1000)\n    })(i)\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),s._v("我们首先使用了立即执行函数将 i 传入函数内部，这个时候值就被固定在了参数 j 上面不会改变，当下次执行 timer 这个闭包的时候，就可以使用外部函数的变量 j，从而达到目的。")]),s._v(" "),a("li",[s._v("使用 setTimeout 的第三个参数，这个参数会被当成 timer 函数的参数传入。"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for (var i = 1; i <= 5; i++) {\n    setTimeout(\n        function timer(j) {\n            console.log(j)\n        },\n        i * 1000,\n        i\n    )\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])]),s._v(" "),a("li",[s._v("使用 let 定义 i"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for (let i = 1; i <= 5; i++) {\n    setTimeout(function timer() {\n        console.log(i)\n    }, i * 1000)\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"深浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深浅拷贝","aria-hidden":"true"}},[s._v("#")]),s._v(" 深浅拷贝")]),s._v(" "),a("blockquote",[a("p",[s._v("什么是浅拷贝？如何实现浅拷贝？什么是深拷贝？如何实现深拷贝？")])]),s._v(" "),a("h3",{attrs:{id:"浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝","aria-hidden":"true"}},[s._v("#")]),s._v(" 浅拷贝")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("通过 Object.assign")]),s._v(" "),a("p",[s._v("Object.assign 只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let a = {\n    age: 1\n}\nlet b = Object.assign({}, a)\na.age = 2\nconsole.log(b.age) // 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("通过展开运算符 "),a("code",[s._v("...")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let a = {\n    age: 1\n}\nlet b = { ...a }\na.age = 2\nconsole.log(b.age) // 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"深拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝","aria-hidden":"true"}},[s._v("#")]),s._v(" 深拷贝")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("JSON.parse(JSON.stringify(object))")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let a = {\nage: 1,\njobs: {\n    first: 'FE'\n}\n}\nlet b = JSON.parse(JSON.stringify(a))\na.jobs.first = 'native'\nconsole.log(b.jobs.first) // FE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("局限性")]),s._v(" "),a("ul",[a("li",[s._v("会忽略 undefined")]),s._v(" "),a("li",[s._v("会忽略 symbol")]),s._v(" "),a("li",[s._v("不能序列化函数")]),s._v(" "),a("li",[s._v("不能解决循环引用的对象")])])])])]),s._v(" "),a("li",[a("p",[s._v("如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function structuralClone(obj) {\n    return new Promise(resolve => {\n        const { port1, port2 } = new MessageChannel()\n        port2.onmessage = ev => resolve(ev.data)\n        port1.postMessage(obj)\n    })\n}\n\nvar obj = {\n    a: 1,\n    b: {\n        c: 2\n    }\n}\n\nobj.b.d = obj.b\n\n// 注意该方法是异步的\n// 可以处理 undefined 和循环引用对象\nconst test = async () => {\n    const clone = await structuralClone(obj)\n    console.log(clone)\n}\ntest()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("lodash 的深拷贝函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function deepClone(obj) {\n    function isObject(o) {\n        return (typeof o === 'object' || typeof o === 'function') && o !== null\n    }\n\n    if (!isObject(obj)) {\n        throw new Error('非对象')\n    }\n\n    let isArray = Array.isArray(obj)\n    let newObj = isArray ? [...obj] : { ...obj }\n    Reflect.ownKeys(newObj).forEach(key => {\n        newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]\n    })\n\n    return newObj\n}\n\nlet obj = {\n    a: [1, 2, 3],\n    b: {\n        c: 2,\n        d: 3\n    }\n}\nlet newObj = deepClone(obj)\nnewObj.b.c = 1\nconsole.log(obj.b.c) // 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[s._v("#")]),s._v(" 原型")]),s._v(" "),a("blockquote",[a("p",[s._v("如何理解原型？如何理解原型链？")])]),s._v(" "),a("p",[s._v("每个 JS 对象都有 "),a("strong",[s._v("proto")]),s._v(" 属性")]),s._v(" "),a("p",[a("img",{attrs:{src:n(172),alt:"proto",title:"__proto__"}})]),s._v(" "),a("p",[a("img",{attrs:{src:n(173),alt:"proto",title:"__proto__"}})]),s._v(" "),a("ul",[a("li",[s._v("Object 是所有对象的爸爸，所有对象都可以通过 "),a("strong",[s._v("proto")]),s._v(" 找到它")]),s._v(" "),a("li",[s._v("Function 是所有函数的爸爸，所有函数都可以通过 "),a("strong",[s._v("proto")]),s._v(" 找到它")]),s._v(" "),a("li",[s._v("函数的 prototype 是一个对象")]),s._v(" "),a("li",[s._v("对象的 "),a("strong",[s._v("proto")]),s._v(" 属性指向原型， "),a("strong",[s._v("proto")]),s._v(" 将对象和原型连接起来组成了原型链")])])])}],e=n(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);i.options.__file="README.md";t.default=i.exports}}]);