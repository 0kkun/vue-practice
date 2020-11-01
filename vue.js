var app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Vue.jsで作った値を表示してるよ'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'マウスホバーしたらテキストが浮き出るよ ' + new Date().toDateString()
  }
})

//seen 式の値が真か否かに基づいて表示するか判定する
var app3 = new Vue({
  el:'#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'v-forで' },
      { text: 'データを' },
      { text: '表示してるよ' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: '下のボタンを押すと僕は反転するよ'
  },
  methods: { // メソッドプロパティ
    reverseMessage: function () {
      // `this` は app5 インスタンスを指します
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: '双方向バインディング！'
  }
})


// todo-item と呼ばれる新しいコンポーネントを定義
Vue.component('todo-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    rawHtml: '<span>htmlの要素を含めて渡したい</span>'
  }
})

var app9 = new Vue({
  el: '#app-9',
  data: {
    message: 'Hello'
  },
  computed: {
    // 算出 getter 関数
    reversedMessage: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    }
  }
})

var app10 = new Vue({
  el: '#app-10',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})

var app11 = new Vue({
  el: '#app-11',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: {
      // getter 関数
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})


var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'あなたが質問するまで待ってるよ!'
  },
  watch: {
    // この関数は question が変わるごとに実行されます。
    question: function (newQuestion, oldQuestion) {
      this.answer = '入力が終わるのを待ってます...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce は特にコストの高い処理の実行を制御するための
    // lodash の関数です。この場合は、どのくらい頻繁に yesno.wtf/api
    // へのアクセスすべきかを制限するために、ユーザーの入力が完全に
    // 終わるのを待ってから ajax リクエストを実行しています。
    // _.debounce (とその親戚である _.throttle )  についての詳細は
    // https://lodash.com/docs#debounce を見てください。
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'クエスチョンマークを入れて質問してね.'
        return
      }
      this.answer = '考え中...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'エラー! APIでは答えられないよ. ' + error
        })
    }
  }
})


var app12 = new Vue({
  el: '#app-12',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

var app13 = new Vue({
  el: '#app-13',
  data: {
    isActive: false,
    activeClass: 'bg-dark',
    errorClass: 'text-danger'
  }
})

var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // `methods` オブジェクトの下にメソッドを定義する
  methods: {
    greet: function (event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      alert('Hello ' + this.name + '!')
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})