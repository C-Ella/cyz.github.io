(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{176:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"组件封装基础-例：封装countup组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件封装基础-例：封装countup组件","aria-hidden":"true"}},[s._v("#")]),s._v(" 组件封装基础(例：封装countup组件)")]),s._v(" "),t("h3",{attrs:{id:"使用-count-to-vue-封装组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-count-to-vue-封装组件","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("count-to.vue")]),s._v(" 封装组件")]),s._v(" "),t("ol",[t("li",[s._v("引入countup.js")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import CountUp from 'countup'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("组件HTML")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\x3c!-- <slot name="left"></slot> --\x3e\n<span :class="countClass" :id="eleId" ref="number"></span>\n\x3c!-- <slot name="right"></slot> --\x3e\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("调用组件")])]),s._v(" "),t("p",[s._v("实例创建并且挂载到html上时触发，DOM已经挂载上，但不确定元素已渲染完成")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mounted () {\n    // 页面所有DOM渲染完时调用\n    this.$nextTick(() => {\n        this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {\n            useEasing: this.useEasing,\n            useGrouping: this.useGrouping,\n            separator: this.separator,\n            decimal: this.decimal\n        })\n        setTimeout(() => {\n            this.counter.start()\n        }, this.delay)\n    })\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("使用prop传入自定义属性")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("props: {\n    /**\n        * @description 起始值\n    */\n    startVal: {\n        type: Number,\n        default: 0\n        // 对象\n        // default: () => {\n        //   return {}\n        // }\n        // 数组\n        // default: () => {\n        //   return []\n        // }\n    }\n    ...\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("使用组件")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<count-to ref="countTo" :end-val="endVal" @on-animation-end="handleEnd">\n    <span slot="left">总金额：</span>\n    <span slot="right">元</span>\n</count-to>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("引入css\n"),t("ul",[t("li",[s._v("script中引入 "),t("code",[s._v("import './count-to.less'")])]),s._v(" "),t("li",[s._v("style中引入 "),t("code",[s._v("@import './count-to.less'")])])])])]),s._v(" "),t("h3",{attrs:{id:"使用-index-js-导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-index-js-导出","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("index.js")]),s._v(" 导出")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import CountTo from './count-to.vue'\nexport default CountTo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"组件中使用id值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件中使用id值","aria-hidden":"true"}},[s._v("#")]),s._v(" 组件中使用\bId值")]),s._v(" "),t("p",[s._v("使用uid，每个组件的uid都不相同 "),t("code",[s._v("${this._uid}")])]),s._v(" "),t("h2",{attrs:{id:"组件中获取dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件中获取dom","aria-hidden":"true"}},[s._v("#")]),s._v(" 组件中获取DOM")]),s._v(" "),t("h4",{attrs:{id:"使用ref属性获取dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用ref属性获取dom","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用ref属性获取DOM")]),s._v(" "),t("ul",[t("li",[s._v("ref 加在普通的元素上 "),t("code",[s._v('ref="name"')]),s._v(" ，用 "),t("code",[s._v("this.ref.name")]),s._v(" 获取到的是dom元素，如")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("this.$refs.number.innerText\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("ref 加在子组件上，用 "),t("code",[s._v("this.ref.name")]),s._v(" 获取到的是组件实例，可以使用组件的所有方法，如")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("this.$refs.countTo.getCount()\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("如何利用 v-for 和 ref 获取一组数组或者 dom 节点\n当 v-for 用于元素或者组件的时候，引用信息将包含 DOM 节点或组件实例的数组。\n"),t("blockquote",[t("p",[s._v("关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们，它们还\b不存在！ $refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定")])]),s._v(" "),t("ul",[t("li",[s._v("ref 需要在dom渲染完成后才会有，在使用的时候确保dom已经渲染完成。比如在生命周期 "),t("code",[s._v("mounted(){}")]),s._v(" 钩子中调用，或者在 "),t("code",[s._v("this.$nextTick(()=>{})")]),s._v(" 中调用。")]),s._v(" "),t("li",[s._v("如果ref 是循环出来的，有多个重名，那么ref的值会是一个数组 ，此时要拿到单个的ref 只需要循环就可以了。")])])])])])}],!1,null,null,null);n.options.__file="JS.Library.md";a.default=n.exports}}]);