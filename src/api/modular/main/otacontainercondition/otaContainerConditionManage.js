import { axios } from '@/utils/request'

/**
 * 查询OTA容器条件
 *
 * @author zhuwx
 * @date 2023-10-14 09:57:49
 */
export function otaContainerConditionPage (parameter) {
  return axios({
    url: '/otaContainerCondition/page',
    method: 'get',
    params: parameter
  })
}

/**
 * OTA容器条件列表
 *
 * @author zhuwx
 * @date 2023-10-14 09:57:49
 */
export function otaContainerConditionList (parameter) {
  return axios({
    url: '/otaContainerCondition/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加OTA容器条件
 *
 * @author zhuwx
 * @date 2023-10-14 09:57:49
 */
export function otaContainerConditionAdd (parameter) {
  return axios({
    url: '/otaContainerCondition/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑OTA容器条件
 *
 * @author zhuwx
 * @date 2023-10-14 09:57:49
 */
export function otaContainerConditionEdit (parameter) {
  return axios({
    url: '/otaContainerCondition/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除OTA容器条件
 *
 * @author zhuwx
 * @date 2023-10-14 09:57:49
 */
export function otaContainerConditionDelete (parameter) {
  return axios({
    url: '/otaContainerCondition/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出OTA容器条件
 *
 * @author zhuwx
 * @date 2023-10-14 09:57:49
 */
export function otaContainerConditionExport (parameter) {
  return axios({
    url: '/otaContainerCondition/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
