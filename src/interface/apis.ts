import { InjectionKey, Ref } from 'vue'

export interface IResult {
  category: string
  description: string
  image: string
  title: string
  url: string
}
export interface IApiParams {
  search: string
}

export type IHoldState = 'loading' | 'empty' | 'error' | 'nonempty'

export const holdStateKey: InjectionKey<Ref<IHoldState>> = Symbol()
