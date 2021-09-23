import request from '@/utils/request'
export function getByBlockNumber(data) {
    return request({
      url: '/transaction/getTransactionByBlockNumber',
      method: 'get',
      params:data
    })
  }
  export function getAllTypeCount(data) {
    return request({
      url: '/transaction/getAllTypeCount',
      method: 'get',
      params:data
    })
  }
  export function getBlockList(data) {
    return request({
      url: '/block/getBlockList',
      method: 'get',
      params:data
    })
  }
  export function getTransactionByHash(data) {
    return request({
      url: '/transaction/getTransactionByHash',
      method: 'get',
      params:data
    })
  }
  export function getAddressDelegateInfo(data) {
    return request({
      url: '/address/getAddressDelegateInfo',
      method: 'get',
      params:data
    })
  }