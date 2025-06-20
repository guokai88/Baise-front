import { axios } from '@/utils/request'

/**
 * 查询PC历史记录
 *
 * @author zhuwx
 * @date 2023-11-14 14:51:09
 */
export function otaPcHistoryPage (parameter) {
  return axios({
    url: '/otaPcHistory/page',
    method: 'get',
    params: parameter
  })
}

/**
 * PC历史记录列表
 *
 * @author zhuwx
 * @date 2023-11-14 14:51:09
 */
export function otaPcHistoryList (parameter) {
  return axios({
    url: '/otaPcHistory/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加PC历史记录
 *
 * @author zhuwx
 * @date 2023-11-14 14:51:09
 */
export function otaPcHistoryAdd (parameter) {
  return axios({
    url: '/otaPcHistory/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑PC历史记录
 *
 * @author zhuwx
 * @date 2023-11-14 14:51:09
 */
export function otaPcHistoryEdit (parameter) {
  return axios({
    url: '/otaPcHistory/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除PC历史记录
 *
 * @author zhuwx
 * @date 2023-11-14 14:51:09
 */
export function otaPcHistoryDelete (parameter) {
  return axios({
    url: '/otaPcHistory/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出PC历史记录
 *
 * @author zhuwx
 * @date 2023-11-14 14:51:09
 */
export function otaPcHistoryExport (parameter) {
  return axios({
    url: '/otaPcHistory/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
