import { axios } from '@/utils/request'

/**
 * 查询问题清单
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:42
 */
export function otaQuestionPage (parameter) {
  return axios({
    url: '/otaQuestion/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 问题清单列表
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:42
 */
export function otaQuestionList (parameter) {
  return axios({
    url: '/otaQuestion/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加问题清单
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:42
 */
export function otaQuestionAdd (parameter) {
  return axios({
    url: '/otaQuestion/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑问题清单
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:42
 */
export function otaQuestionEdit (parameter) {
  return axios({
    url: '/otaQuestion/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除问题清单
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:42
 */
export function otaQuestionDelete (parameter) {
  return axios({
    url: '/otaQuestion/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出问题清单
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:42
 */
export function otaQuestionExport (parameter) {
  return axios({
    url: '/otaQuestion/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
/**
 * 下载文件
 *
 * @author zhuwx
 * @date 2023/11/08 00:20
 */
 export function otaQuestionDownload (parameter) {
  return axios({
    url: '/otaQuestion/download',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}

/**
 * 预览文件
 *
 * @author zhuwx
 * @date 2023/11/08 00:20
 */
 export function otaQuestionPreview (parameter) {
  return axios({
    url: '/otaQuestion/preview',
    method: 'get',
    params: parameter,
    responseType: 'arraybuffer'
  })
}

/**
 * 按日期格式统计问题清单
 *
 * @author mayongjian
 * @date 2025-1-15 13:59:58
 */
export function countQuestionTotalListByDateFormat (parameter) {
  return axios({
    url: '/otaQuestion/countQuestionTotalListByDateFormat',
    method: 'get',
    params: parameter
  })
}

/**
 * 按类型统计问题清单
 *
 * @author mayongjian
 * @date 2025-1-15 13:59:58
 */
export function countQuestionTypeTotalListByDate (parameter) {
  return axios({
    url: '/otaQuestion/countQuestionTypeTotalListByDate',
    method: 'get',
    params: parameter
  })
}
