import { h } from 'vue'
import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'
import SvgIcon from '@/components/common/SvgIcon.vue'

export function renderIcon(icon, props = { size: 12 }) {
  return () => h(NIcon, props, { default: () => h(Icon, { icon }) })
}

export function renderCustomIcon(customIcon, props = { size: 12 }) {
  return () => h(NIcon, props, { default: () => h(SvgIcon, { customIcon }) })
}
