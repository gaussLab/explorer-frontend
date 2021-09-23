import request from '@/utils/request'
export function getAddressByAssets(data) {
    return request({
      url: '/address/getAddressByAssets',
      method: 'get',
      params:data
    })
  }
  export function getAddressInfo(data) {
    return request({
      url: '/address/getAddressInfo',
      method: 'get',
      params:data
    })
  }

  export function getCoinInfo(data) {
    return request({
      url: '/address/getCoinInfo',
      method: 'get',
      params:data
    })
  }
  export function getCoinRange(data) {
    return request({
      url: '/address/getCoinRange',
      method: 'get',
      params:data
    })
  }


