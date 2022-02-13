import { req } from '@/utils/req/reqInstance'
import { envs } from '@/env/envs'
const baseURL = 'http://yybwxapi.luoyangparking.com'
export const getParkingList = (
  reqPrams: reqPrams = {
    name: '',
    maxdistance: '99999',
    latitude: envs.LATITUDE,
    longtitude: envs.LONGITUDE,
    type: '0'
  }
): Promise<Array<parkingInfo>> => {
  return req
    .post<any, response, reqPrams>(baseURL + '/wechat-api/zfbmember/zfbmap/getAllPloList', reqPrams)
    .then(res => {
      return res.result
    })
}

export type parkingType = '0' | '1' | '2' | '3' | '4'
type reqPrams = {
  name: string
  maxdistance: string
  latitude: string
  longtitude: string
  type: parkingType
}
interface response {
  success: boolean
  message: string
  code: number
  result: parkingInfo[]
}

export interface parkingInfo {
  rest: number
  quickCharge: number
  address: string
  distance: string
  chargerule: string
  ploType: number
  pileCountVo?: any
  latitude: string
  ploname: string
  cardmaxnum: number
  list: List[]
  picture: string
  parkType: parkingType
  total: number
  serviceCharge?: any
  cardTotal: number
  systype: number
  eleCharges?: any
  sysname: string
  plosoucetype?: any
  id: string
  comid: string
  virtualdistance: string
  longitude: string
}

interface List {
  ploType: number
  ploAttribute?: string
  ploIconText: string
  psort?: any
}
