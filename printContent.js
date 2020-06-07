'use strict';

const e = React.createElement;

// 创建一个头像组件
class Avatar extends React.PureComponent {
  render() {
    return e('img', {
      src: 'https://upload.jianshu.io/users/upload_avatars/3118313/d36ca6d9-04c3-4d6c-ba6a-28335df247db.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
      className: 'avatar'
    }, null);
  }
}

// 昵称
class Nickname extends React.PureComponent {
  render() {
    return e (
      'div',
      {
        className: 'nickname'
      },
      '内孤'
    );
  }
}

// 数据统计模块
class Count extends React.PureComponent {
  render() {
    const CountUnit = ({title, number}) => {
      return e(
        'div',
        {
          className: 'countUnit'
        },
        e(
          'div',
          {
            className: 'title'
          },
          title),
        e(
          'div',
          {
            className: 'number'
          },
          number)
      )
    }
    return e(
      'div',
      {
        className: 'countContainer'
      },
      e(
        CountUnit,
        {
          title: '关注',
          number: '35'
        },
      ),
      e(
        CountUnit, 
        {
          title: '粉丝',
          number: '57'
        },
      ),
      e(
        CountUnit, 
        {
          title: '文章',
          number: '67'
        },
      ),
      e(
        CountUnit, 
        {
          title: '字数',
          number: '25894'
        },
      ),
      e(
        CountUnit, 
        {
          title: '收藏喜欢',
          number: '110'
        },
      ),
      e(
        CountUnit, 
        {
          title: '总资产',
          number: 86
        },
      ),
    )
  }
}

class Link extends React.PureComponent {
  render() {
    return (
      e(
        'a',
        {
          target: '_blank',
          href: 'https://www.jianshu.com/u/0427dce733d3'
        },
        e(
          'img', 
          {
            src: './链接.png',
            className: 'link'
          }
        )
      )
    )
  }
}

// 整个容器
class PrintContent extends React.PureComponent {
  render() {
    return e(
      'div',
      {
        className: 'printContent'
      },
      e(
        Avatar
      ),
      e(
        'div',
        {
          className: 'infoModule'
        },
        e(
          Nickname,
        ),
        e(
          Count,
        )
      ),
      e(
        Link
      )
    )
  }
}