import { axios } from '@/utils/request'

/**
 * 查询版本更新记录
 *
 * @author mayongjian
 * @date 2023-11-24 10:06:44
 */
export function otaUpdateVersionHistoryPage (parameter) {
  return axios({
    url: '/otaUpdateVersionHistory/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 版本更新记录列表
 *
 * @author mayongjian
 * @date 2023-11-24 10:06:44
 */
export function otaUpdateVersionHistoryList (parameter) {
  return axios({
    url: '/otaUpdateVersionHistory/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加版本更新记录
 *
 * @author mayongjian
 * @date 2023-11-24 10:06:44
 */
export function otaUpdateVersionHistoryAdd (parameter) {
  return axios({
    url: '/otaUpdateVersionHistory/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑版本更新记录
 *
 * @author mayongjian
 * @date 2023-11-24 10:06:44
 */
export function otaUpdateVersionHistoryEdit (parameter) {
  return axios({
    url: '/otaUpdateVersionHistory/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除版本更新记录
 *
 * @author mayongjian
 * @date 2023-11-24 10:06:44
 */
export function otaUpdateVersionHistoryDelete (parameter) {
  return axios({
    url: '/otaUpdateVersionHistory/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出版本更新记录
 *
 * @author mayongjian
 * @date 2023-11-24 10:06:44
 */
export function otaUpdateVersionHistoryExport (parameter) {
  return axios({
    url: '/otaUpdateVersionHistory/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
