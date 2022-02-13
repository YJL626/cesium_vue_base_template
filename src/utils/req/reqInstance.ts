import axios from 'axios'
import { getResultInterceptor } from './Interceptors'
export enum reqState {
  none,
  pending,
  resolved,
  rejected,
  refreshing
}
const req = axios.create()
req.interceptors.response.use(getResultInterceptor)
export { req }
