import { getParkingList, parkingInfo } from '@/api/parking/getParkingList'
import { reqState } from '@/utils/req/reqInstance'
import { defineStore } from 'pinia'
type userState = {
  reqState: reqState
  remoteList: Array<parkingInfo>
}

export const useParkingStore = defineStore('parking', {
  state() {
    return {
      remoteList: [],
      reqState: reqState.none
    } as userState
  },
  actions: {
    async refresh() {
      this.reqState = this.reqState === reqState.none ? reqState.pending : reqState.refreshing
      try {
        this.remoteList = (await getParkingList().catch(console.warn)) as any
        this.reqState = reqState.resolved
      } catch {
        this.reqState = reqState.rejected
      }
    },
    async init(){
    this.reqState === reqState.none && await this.refresh()
    }
  }
})
