'use strict';

// 生成一个唯一的guid
function getGuid() {
  let s = [];
  let hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";
  let uuid = s.join("");
  return uuid;
}

const style = `<style>
  @page: pseudo-class {
    size: A4 landscape;
    margin: 2 cm;
  }
  @media print {
    section {page-break-before: always;}
    h1 {page-break-after: always;}
    p {
      page-break-inside: avoid;
      orphans: 3;
      widows: 2;
    }
  }
</style>`

// 打印组件
class ReactPrint extends React.Component {
  constructor() {
    super();
    this.guid = getGuid();
    this.inter = null;
  }
  // 创建iframe容器
  createdIframe() {
    // 约定iframe的id为#reactPrintIframe
    let iframe = document.getElementById('reactPrintIframe');
    if (!iframe) {
      iframe = document.createElement('IFRAME');
      iframe.setAttribute('id', 'reactPrintIframe');
      // 让iframe不可见
      iframe.setAttribute('style', 'position:fixed;width:0px;height:0px;left:-3500px;top:-3500px;z-index:-1;margin:0;');
      document.body.appendChild(iframe);
    }
    return iframe;
  }
  // 获取需要打印的HTML
  getPrintContent() {
    return document.getElementById(this.guid).innerHTML;
  }
  // 获取当前内容所在document的head, 并且过滤掉js
  getParentHead() {
    const head = document.head;
    const childs = head.childNodes;
    for (var i = 0; i < childs.length; i++) {
      const child = childs[i];
      if (child.nodeType === 1 && child.tagName.toLowerCase() === 'script') {
        head.removeChild(child);
        i--;
      }
    }
    return head;
  }
  // 打印方法
  print() {
    if (this.inter) {
      clearTimeout(this.inter);
    }
    const iframe = this.createdIframe();
    const parentHead = this.getParentHead();
    let doc = iframe.contentWindow.document || iframe.contentDocument.document;


    doc.head.innerHTML = parentHead.innerHTML + style;
    doc.body.innerHTML = this.getPrintContent();
    doc.close();
    // 延迟打印
    this.inter = setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }, 350);
  }
  render() {
    return e(
      'div', {
        id: this.guid,
      },
      this.props.children
    )
  }
}
