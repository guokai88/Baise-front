import { axios } from '@/utils/request'

/**
 * 查询应用环境
 *
 * @author mayongjian
 * @date 2024-12-10 17:25:26
 */
export function otaApplicationConditionPage (parameter) {
  return axios({
    url: '/otaApplicationCondition/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 应用环境列表
 *
 * @author mayongjian
 * @date 2024-12-10 17:25:26
 */
export function otaApplicationConditionList (parameter) {
  return axios({
    url: '/otaApplicationCondition/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加应用环境
 *
 * @author mayongjian
 * @date 2024-12-10 17:25:26
 */
export function otaApplicationConditionAdd (parameter) {
  return axios({
    url: '/otaApplicationCondition/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑应用环境
 *
 * @author mayongjian
 * @date 2024-12-10 17:25:26
 */
export function otaApplicationConditionEdit (parameter) {
  return axios({
    url: '/otaApplicationCondition/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除应用环境
 *
 * @author mayongjian
 * @date 2024-12-10 17:25:26
 */
export function otaApplicationConditionDelete (parameter) {
  return axios({
    url: '/otaApplicationCondition/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出应用环境
 *
 * @author mayongjian
 * @date 2024-12-10 17:25:26
 */
export function otaApplicationConditionExport (parameter) {
  return axios({
    url: '/otaApplicationCondition/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
