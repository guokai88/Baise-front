import { axios } from '@/utils/request'

/**
 * 查询客户订单
 *
 * @author zhuwx
 * @date 2023-10-06 12:03:55
 */
export function otaCustomerOrderPage (parameter) {
  return axios({
    url: '/otaCustomerOrder/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 客户订单列表
 *
 * @author zhuwx
 * @date 2023-10-06 12:03:55
 */
export function otaCustomerOrderList (parameter) {
  return axios({
    url: '/otaCustomerOrder/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加客户订单
 *
 * @author zhuwx
 * @date 2023-10-06 12:03:55
 */
export function otaCustomerOrderAdd (parameter) {
  return axios({
    url: '/otaCustomerOrder/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑客户订单
 *
 * @author zhuwx
 * @date 2023-10-06 12:03:55
 */
export function otaCustomerOrderEdit (parameter) {
  return axios({
    url: '/otaCustomerOrder/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除客户订单
 *
 * @author zhuwx
 * @date 2023-10-06 12:03:55
 */
export function otaCustomerOrderDelete (parameter) {
  return axios({
    url: '/otaCustomerOrder/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出客户订单
 *
 * @author zhuwx
 * @date 2023-10-06 12:03:55
 */
export function otaCustomerOrderExport (parameter) {
  return axios({
    url: '/otaCustomerOrder/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
