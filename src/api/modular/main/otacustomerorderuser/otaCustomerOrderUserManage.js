import { axios } from '@/utils/request'

/**
 * 查询客户订单的用户
 *
 * @author zhuwx
 * @date 2023-10-06 12:53:19
 */
export function otaCustomerOrderUserPage (parameter) {
  return axios({
    url: '/otaCustomerOrderUser/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 客户订单的用户列表
 *
 * @author zhuwx
 * @date 2023-10-06 12:53:19
 */
export function otaCustomerOrderUserList (parameter) {
  return axios({
    url: '/otaCustomerOrderUser/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加客户订单的用户
 *
 * @author zhuwx
 * @date 2023-10-06 12:53:19
 */
export function otaCustomerOrderUserAdd (parameter) {
  return axios({
    url: '/otaCustomerOrderUser/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑客户订单的用户
 *
 * @author zhuwx
 * @date 2023-10-06 12:53:19
 */
export function otaCustomerOrderUserEdit (parameter) {
  return axios({
    url: '/otaCustomerOrderUser/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除客户订单的用户
 *
 * @author zhuwx
 * @date 2023-10-06 12:53:19
 */
export function otaCustomerOrderUserDelete (parameter) {
  return axios({
    url: '/otaCustomerOrderUser/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出客户订单的用户
 *
 * @author zhuwx
 * @date 2023-10-06 12:53:19
 */
export function otaCustomerOrderUserExport (parameter) {
  return axios({
    url: '/otaCustomerOrderUser/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
