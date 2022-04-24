import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/google/search',
    method: 'get',
    params: query
  })
}
