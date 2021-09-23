import request from '@/utils/request'
export function getChainName(data) {
    return request({
      url: '/chain/getChainName',
      method: 'get',
      params:data
    })
  }
