import request from '@/utils/request'


export function getInfo() {
  return request({
    url: '/resource/pack/list',
    method: 'get',
  })
}