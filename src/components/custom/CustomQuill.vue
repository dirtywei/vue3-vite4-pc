<template>
  <quill-editor ref="myQuillEditor" :placeholder="placeholder" :toolbar="toolbarOptions"></quill-editor>
</template>

<script setup>
  import { QuillEditor, Quill } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css'
  import '@/styles/css/quill.custom.css'

  // 获取hooks & config
  import { useEditor, useHandler, useMatcher } from '@/hooks/business/component'
  import { editorIcons, placeholder, toolbarOptions } from '@/config'
  const { matcherElement } = useMatcher()
  const { PictureBlot, EmojiBlot, DividerBlot, VideoBlot, myQuillEditor } = useEditor()
  const { emoji, picture, divider } = editorIcons
  const { handlerObject } = useHandler(myQuillEditor)

  //添加或更换toolbar icon
  const icons = Quill.import('ui/icons')
  icons.emoji = emoji
  icons.picture = picture
  icons.divider = divider

  //注册自定义Blot
  Quill.debug('error')
  Quill.register(VideoBlot)
  Quill.register(PictureBlot)
  Quill.register(EmojiBlot)
  Quill.register(DividerBlot)

  onMounted(() => {
    const toolbar = myQuillEditor.value.getQuill().getModule('toolbar')
    Object.keys(handlerObject).forEach((key) => {
      toolbar.addHandler(key, handlerObject[key])
    })

    // eslint-disable-next-line no-undef
    myQuillEditor.value.getQuill().clipboard.addMatcher(Node.ELEMENT_NODE, matcherElement)
  })
</script>
