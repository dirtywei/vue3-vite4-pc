import { createStorage } from './storage'

const prefixKey = 'Vue3_PC_Project_'

export const createLocalStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: localStorage
  })
}

export const createSessionStorage = function (option = {}) {
  return createStorage({
    prefixKey: option.prefixKey || '',
    storage: sessionStorage
  })
}

export const lStorage = createLocalStorage({ prefixKey })

export const sStorage = createSessionStorage({ prefixKey })
