import request from '@/utils/request'
export function getProposalIdList(data) {
    return request({
      url: '/proposal/getProposalIdList',
      method: 'get',
      params:data
    })
  }
  export function getProposalByProposalId(data) {
    return request({
      url: '/proposal/getProposalByProposalId',
      method: 'get',
      params:data
    })
  }
