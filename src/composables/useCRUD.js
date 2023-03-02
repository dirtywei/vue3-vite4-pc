import { isNullOrWhitespace } from '@/utils'

const ACTIONS = {
  view: '查看',
  edit: '编辑',
  add: '新增'
}

export function useCRUD({ name, initForm = {}, doCreate, doDelete, doUpdate, refresh }) {
  const modalVisible = ref(false)
  const modalAction = ref('')
  const modalTitle = computed(() => ACTIONS[modalAction.value] + name)
  const modalLoading = ref(false)
  const modalFormRef = ref(null)
  const modalForm = ref({ ...initForm })

  /** 新增 */
  function handleAdd() {
    modalAction.value = 'add'
    modalVisible.value = true
    modalForm.value = { ...initForm }
  }

  /** 修改 */
  function handleEdit(row) {
    modalAction.value = 'edit'
    modalVisible.value = true
    modalForm.value = { ...row }
  }

  /** 查看 */
  function handleView(row) {
    modalAction.value = 'view'
    modalVisible.value = true
    modalForm.value = { ...row }
  }

  /** 保存 */
  function handleSave() {
    if (!['edit', 'add'].includes(modalAction.value)) {
      modalVisible.value = false
      return
    }
    modalFormRef.value?.validate(async (err) => {
      if (err) return
      const actions = {
        add: {
          api: () => doCreate(modalForm.value),
          cb: () => window.$message.success('新增成功')
        },
        edit: {
          api: () => doUpdate(modalForm.value),
          cb: () => window.$message.success('编辑成功')
        }
      }
      const action = actions[modalAction.value]

      try {
        modalLoading.value = true
        const data = await action.api()
        action.cb()
        modalLoading.value = modalVisible.value = false
        data && refresh(data)
      } catch (error) {
        modalLoading.value = false
      }
    })
  }

  /** 删除 */
  function handleDelete(id, confirmOptions) {
    if (isNullOrWhitespace(id)) return
    window.$dialog.confirm({
      content: '确定删除？',
      async confirm() {
        try {
          modalLoading.value = true
          const data = await doDelete(id)
          window.$message.success('删除成功')
          modalLoading.value = false
          refresh(data)
        } catch (error) {
          modalLoading.value = false
        }
      },
      ...confirmOptions
    })
  }

  return {
    modalVisible,
    modalAction,
    modalTitle,
    modalLoading,
    handleAdd,
    handleDelete,
    handleEdit,
    handleView,
    handleSave,
    modalForm,
    modalFormRef
  }
}
