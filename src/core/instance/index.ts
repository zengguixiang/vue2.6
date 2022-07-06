import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
import type { GlobalAPI } from 'types/global-api'

function Vue(options) {
  if (__DEV__ && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 调用_init()方法
  this._init(options)
}
// 注册 vm 的_init()方法，初始化vm
//@ts-expect-error Vue has function type
initMixin(Vue)
// 注册 vm 的 $data/$props/$set/$delete/$watch
//@ts-expect-error Vue has function type
stateMixin(Vue)
// 初始化事件相关方法
//@ts-expect-error Vue has function type
eventsMixin(Vue)
// 初始化声明周期相关的混入方法
//@ts-expect-error Vue has function type
lifecycleMixin(Vue)
//@ts-expect-error Vue has function type
renderMixin(Vue)

export default Vue as unknown as GlobalAPI
