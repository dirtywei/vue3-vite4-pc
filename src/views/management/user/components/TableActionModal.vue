<template>
  <n-modal v-model:show="modalVisible" preset="card" :title="title" class="w-700px">
    <n-form ref="formRef" label-placement="left" :label-width="80" :model="formModel" :rules="rules">
      <n-grid :cols="24" :x-gap="18">
        <n-form-item-grid-item :span="12" label="用户名" path="userName">
          <n-input v-model:value="formModel.userName" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="年龄" path="age">
          <n-input-number v-model:value="formModel.age" clearable />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="性别" path="gender">
          <n-radio-group v-model:value="formModel.gender">
            <n-radio v-for="item in genderOptions" :key="item.value" :value="item.value">{{ item.label }}</n-radio>
          </n-radio-group>
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="手机号" path="phone">
          <n-input v-model:value="formModel.phone" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="邮箱" path="email">
          <n-input v-model:value="formModel.email" />
        </n-form-item-grid-item>
        <n-form-item-grid-item :span="12" label="状态" path="userStatus">
          <n-select v-model:value="formModel.userStatus" :options="userStatusOptions" />
        </n-form-item-grid-item>
      </n-grid>
      <n-space class="w-full pt-16px" :size="24" justify="end">
        <n-button class="w-72px" @click="closeModal">取消</n-button>
        <n-button class="w-72px" type="primary" @click="handleSubmit">确定</n-button>
      </n-space>
    </n-form>
  </n-modal>
</template>

<script setup>
  import { ref, computed, reactive, watch } from 'vue'
  import { formRules, createRequiredFormRule } from '@/utils'
  import { genderOptions, userStatusOptions } from '@/config'

  const props = defineProps({
    type: { default: 'add' },
    editData: null
  })

  const emit = defineEmits('isShowModal')

  const modalVisible = computed({
    get() {
      return props.isShowModal
    },
    set(isShowModal) {
      emit('update:isShowModal', isShowModal)
    }
  })
  const closeModal = () => {
    modalVisible.value = false
  }

  const title = computed(() => {
    const titles = {
      add: '添加用户',
      edit: '编辑用户'
    }
    return titles[props.type]
  })

  const formRef = ref()

  const formModel = reactive(createDefaultFormModel())

  const rules = {
    userName: createRequiredFormRule('请输入用户名'),
    age: createRequiredFormRule('请输入年龄'),
    gender: createRequiredFormRule('请选择性别'),
    phone: formRules.phone,
    email: formRules.email,
    userStatus: createRequiredFormRule('请选择用户状态')
  }

  function createDefaultFormModel() {
    return {
      userName: '',
      age: null,
      gender: null,
      phone: '',
      email: null,
      userStatus: null
    }
  }

  function handleUpdateFormModel(model) {
    Object.assign(formModel, model)
  }

  function handleUpdateFormModelByModalType() {
    const handlers = {
      add: () => {
        const defaultFormModel = createDefaultFormModel()
        handleUpdateFormModel(defaultFormModel)
      },
      edit: () => {
        if (props.editData) {
          handleUpdateFormModel(props.editData)
        }
      }
    }

    handlers[props.type]()
  }

  async function handleSubmit() {
    await formRef.value?.validate()
    window.$message?.success('新增成功!')
    closeModal()
  }

  watch(
    () => props.isShowModal,
    (newValue) => {
      if (newValue) {
        handleUpdateFormModelByModalType()
      }
    }
  )
</script>

<style scoped></style>
