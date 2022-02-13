import { AxiosResponse } from 'axios'

export const getResultInterceptor = (res: AxiosResponse): any => {
  return res.data
}
