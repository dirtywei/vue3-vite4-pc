/**
 * @description  editor hook
 * @author DirtyWei
 */
import { Quill } from '@vueup/vue-quill'
import { ref } from 'vue'

export function useEditor() {
  const myQuillEditor = ref()

  // 自定义插入图片
  let ImageBlot = Quill.import('formats/image')
  class PictureBlot extends ImageBlot {
    static blotName = 'picture'
    static tagName = 'img'

    static create(value) {
      let node = super.create()
      node.setAttribute('alt', value.alt)
      node.setAttribute('src', value.url)
      node.setAttribute('class', 'my-quill-picture')
      node.setAttribute('style', 'max-width: 100%;margin: 8px auto;display: block;')
      return node
    }

    static value(node) {
      return {
        alt: node.getAttribute('alt'),
        url: node.getAttribute('src'),
        class: node.getAttribute('class')
      }
    }
  }

  // 插入表情====
  class EmojiBlot extends ImageBlot {
    static blotName = 'emoji'
    static tagName = 'img'

    static create(value) {
      let node = super.create()
      node.setAttribute('alt', value.alt)
      node.setAttribute('src', value.url)
      node.setAttribute('class', value.class)
      return node
    }

    static value(node) {
      return {
        alt: node.getAttribute('alt'),
        url: node.getAttribute('src'),
        class: node.getAttribute('class')
      }
    }
  }

  class DividerBlot extends ImageBlot {
    static blotName = 'divider'
    static tagName = 'img'

    static create(value) {
      let node = super.create()
      node.setAttribute('alt', value.alt)
      node.setAttribute('src', value.url)
      node.setAttribute('class', 'my-quill-divider')
      node.setAttribute('style', 'width: 60%;display: block;margin: 0 auto;')
      return node
    }

    static value(node) {
      return {
        alt: node.getAttribute('alt'),
        url: node.getAttribute('src'),
        class: node.getAttribute('class')
      }
    }
  }

  const BlockEmbed = Quill.import('blots/block/embed')

  class VideoBlot extends BlockEmbed {
    static blotName = 'video'
    static tagName = 'video'

    static create(value) {
      const node = super.create(value)
      node.setAttribute('src', value.url)
      node.setAttribute('class', 'my-quill-video')
      node.setAttribute('controls', true)
      // node.setAttribute('name', value.name)
      node.setAttribute('controlsList', 'nodownload')
      node.setAttribute('controlsList', 'nodownload noremoteplayback') // 控制删除
      node.setAttribute('type', 'video')
      node.setAttribute('style', 'object-fit:fill;width: 100%;')
      node.setAttribute('preload', 'auto') // auto - 当页面加载后载入整个视频  meta - 当页面加载后只载入元数据  none - 当页面加载后不载入视频
      node.setAttribute('playsinline', 'true')
      node.setAttribute('x-webkit-airplay', 'allow')
      // node.setAttribute('x5-video-player-type', 'h5') // 启用H5播放器,是wechat安卓版特性
      node.setAttribute('x5-video-orientation', 'portraint') // 竖屏播放 声明了h5才能使用  播放器支付的方向，landscape横屏，portraint竖屏，默认值为竖屏
      node.setAttribute('x5-playsinline', 'true') // 兼容安卓 不全屏播放
      node.setAttribute('x5-video-player-fullscreen', 'true')
      return node
    }

    // 添加value获取当前的audio元素。拿到audio元素的属性。
    static value(node) {
      return {
        alt: node.getAttribute('alt'),
        url: node.getAttribute('src'),
        class: node.getAttribute('class')
      }
    }
  }

  return {
    PictureBlot,
    EmojiBlot,
    DividerBlot,
    VideoBlot,
    myQuillEditor
  }
}

export function useHandler(myQuillEditor) {
  const handlerLink = (value) => {
    // this.uploadType = 'link'
    if (value) {
      // this.uploadTypeShow = true
      // 打开自定义填写链接弹窗
      myQuillEditor.value.getQuill().format('link', 'https://baidu.com')
    } else {
      myQuillEditor.value.getQuill().format('link', false)
    }
  }
  const handlerPicture = (state) => {
    console.log(state)
    handleUpload()
    /**
     * TODO:此处处理图片上传功能
     */
  }
  const handleUpload = (e) => {
    // TODO:此处处理文件上传内容
    console.log(e)

    const nodeAttribute = {
      alt: '自定义图片',
      url: 'https://upload-bbs.miyoushe.com/upload/2023/04/02/333591459/d9394f2bca65cc2bccef6d3bd4be0c0c_8325997222024832472.jpg'
    }
    handleInsert('picture', nodeAttribute)
  }
  const handlerEmoji = (item) => {
    let className = 'emoji-icon second-emoji-class'
    const nodeAttribute = {
      alt: item?.title || '表情',
      url: item?.url || 'https://pingtai-img.shiyue.com/bbs/SyEmoji/changan/03-色.gif',
      class: className
    }
    handleInsert('emoji', nodeAttribute)
  }

  const handlerDivider = () => {
    const nodeAttribute = {
      alt: '分割线',
      url: 'https://pingtai-img.shiyue.com/bbs/SyQuill/sy-quill-divider.png'
    }
    handleInsert('divider', nodeAttribute)
  }

  const handlerVideo = () => {
    const nodeAttribute = {
      alt: '视频',
      url: 'https://game.gtimg.cn/images/x5m/cp/a20230323five/kv.mp4'
    }
    handleInsert('video', nodeAttribute)
  }

  const handleInsert = (type, nodeAttribute) => {
    const index = myQuillEditor.value.getQuill().getSelection().index
    myQuillEditor.value.getQuill().insertEmbed(index, type, nodeAttribute)
    // 重置光标位置
    myQuillEditor.value.getQuill().setSelection(index + 1)
  }

  const handlerObject = {
    picture: handlerPicture,
    link: handlerLink,
    emoji: handlerEmoji,
    divider: handlerDivider,
    video: handlerVideo
  }

  return {
    handlerObject
  }
}

export function useMatcher() {
  const matcherElement = (node, Delta) => {
    Delta.ops.forEach((op) => {
      if (op.insert && typeof op.insert === 'object' && op.insert.picture) {
        //base64 && file本地资源拦截
        if (op.insert.picture.url.includes('file://') || op.insert.picture.url.includes('data:image')) {
          // 提示语占位图片顶替
          op.insert.picture.url =
            'https://bbs-media-1256453865.cos.ap-guangzhou.myqcloud.com/temp/2023-4-3/1680506994146_.png'
        }
      }
    })
    return Delta
  }
  return {
    matcherElement
  }
}
