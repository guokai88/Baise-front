import { axios } from '@/utils/request'

/**
 * 查询客户订单的用户关联容器
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:18
 */
export function otaCustomerOrderUserContainerPage (parameter) {
  return axios({
    url: '/otaCustomerOrderUserContainer/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 客户订单的用户关联容器列表
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:18
 */
export function otaCustomerOrderUserContainerList (parameter) {
  return axios({
    url: '/otaCustomerOrderUserContainer/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加客户订单的用户关联容器
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:18
 */
export function otaCustomerOrderUserContainerAdd (parameter) {
  return axios({
    url: '/otaCustomerOrderUserContainer/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑客户订单的用户关联容器
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:18
 */
export function otaCustomerOrderUserContainerEdit (parameter) {
  return axios({
    url: '/otaCustomerOrderUserContainer/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除客户订单的用户关联容器
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:18
 */
export function otaCustomerOrderUserContainerDelete (parameter) {
  return axios({
    url: '/otaCustomerOrderUserContainer/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出客户订单的用户关联容器
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:18
 */
export function otaCustomerOrderUserContainerExport (parameter) {
  return axios({
    url: '/otaCustomerOrderUserContainer/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
/**
 * 添加客户订单的用户关联容器List
 *
 * @author zhuwx
 * @date 2023-10-06 12:54:18
 */
 export function otaCustomerOrderUserContainerAddList (parameter) {
  return axios({
    url: '/otaCustomerOrderUserContainer/addList',
    method: 'post',
    data: parameter
  })
}
