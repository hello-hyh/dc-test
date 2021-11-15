import axios from 'axios'
import { IApiParams } from '../interface/apis'
export function getSearchs(params: IApiParams) {
  return axios.get(
    `https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${params.search}`,
    {
      timeout: 3000
    }
  )
}
