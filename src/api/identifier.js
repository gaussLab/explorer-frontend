import request from '@/utils/request'
export function getValidatorsByStatus(data) {
    return request({
      url: '/validator/getValidatorsByStatus',
      method: 'get',
      params:data
    })
  }

  export function getCommissionByMoniker(data) {
    return request({
      url: '/validator/getOtherValidatorCommissionByMoniker',
      method: 'get',
      params:data
    })
  }
  export function getValidatorsByMoniker(data) {
    return request({
      url: '/validator/getValidatorsByMoniker',
      method: 'get',
      params:data
    })
  }

  export function getDelegatorByOperatorAddress(data) { // 名下委托人列表
    return request({
      url: '/validator/getDelegatorByOperatorAddress',
      method: 'get',
      params:data
    })
  }
  export function getValidatorRelatedTx(data) { // 名下委托人列表
    return request({
      url: '/transaction/getValidatorRelatedTx',
      method: 'get',
      params:data
    })
  }
  export function getUnDelegatorByOperatorAddress(data) { // 名下解除的委托人列表
    return request({
      url: '/validator/getUnDelegatorByOperatorAddress',
      method: 'get',
      params:data
    })
  }

