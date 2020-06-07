'use strict';

class App extends React.Component {
  constructor() {
    super();
    this.$reactPrint = React.createRef();
  }
  render() {
    return e(
      'div',
      {},
      e(
        'button',
        { 
          onClick: () => {
            // 点击按钮调用打印组件的打印方法
            this.$reactPrint.current.print();
          } 
        },
        '打印下面HTML'
      ),
      e(
        ReactPrint, 
        {
          ref: this.$reactPrint
        },
        e(PrintContent)
      )
    );
  }
}

ReactDOM.render(e(App), document.getElementById('root'));