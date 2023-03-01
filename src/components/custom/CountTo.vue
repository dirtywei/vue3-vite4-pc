<template>
  <span>{{ value }}</span>
</template>
<script setup>
  import { TransitionPresets, useTransition } from '@vueuse/core'
  import { isNumber } from '@/utils'

  const props = defineProps({
    startValue: { default: 0 },
    endValue: { default: 2021 },
    duration: { default: 1500 },
    autoplay: { default: true },
    decimals: { default: 0 },
    prefix: { default: '' },
    suffix: { default: '' },
    separator: { default: '' },
    decimal: { default: '' },
    useEasing: { default: true },
    transition: { default: 'linear' }
  })

  const emit = defineEmits(['on-started', 'on-finished'])

  const source = ref(props.startValue)
  let outputValue = useTransition(source)
  const value = computed(() => formatNumber(outputValue.value))
  const disabled = ref(false)

  function run() {
    outputValue = useTransition(source, {
      disabled,
      duration: props.duration,
      onStarted: () => emit('on-started'),
      onFinished: () => emit('on-finished'),
      ...(props.useEasing ? { transition: TransitionPresets[props.transition] } : {})
    })
  }

  function start() {
    run()
    source.value = props.endValue
  }

  function formatNumber(num) {
    if (num !== 0 && !num) {
      return ''
    }
    const { decimals, decimal, separator, suffix, prefix } = props
    let number = Number(num).toFixed(decimals)
    number = String(number)

    const x = number.split('.')
    let x1 = x[0]
    const x2 = x.length > 1 ? decimal + x[1] : ''
    const rgx = /(\d+)(\d{3})/
    if (separator && !isNumber(separator)) {
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, `$1${separator}$2`)
      }
    }
    return prefix + x1 + x2 + suffix
  }

  watch([() => props.startValue, () => props.endValue], () => {
    if (props.autoplay) {
      start()
    }
  })

  watchEffect(() => {
    source.value = props.startValue
  })

  onMounted(() => {
    if (props.autoplay) {
      start()
    }
  })
</script>

<style scoped></style>
