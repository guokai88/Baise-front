import { axios } from '@/utils/request'

/**
 * 查询客户证书
 *
 * @author he
 * @date 2023-08-11 00:44:15
 */
export function licCustomerInfoPage (parameter) {
  return axios({
    url: '/licCustomerInfoServer/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 客户证书列表
 *
 * @author he
 * @date 2023-08-11 00:44:15
 */
export function licCustomerInfoList (parameter) {
  return axios({
    url: '/licCustomerInfoServer/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加客户证书
 *
 * @author he
 * @date 2023-08-11 00:44:15
 */
export function licCustomerInfoAdd (parameter) {
  return axios({
    url: '/licCustomerInfoServer/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑客户证书
 *
 * @author he
 * @date 2023-08-11 00:44:15
 */
export function licCustomerInfoEdit (parameter) {
  return axios({
    url: '/licCustomerInfoServer/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除客户证书
 *
 * @author he
 * @date 2023-08-11 00:44:15
 */
export function licCustomerInfoDelete (parameter) {
  return axios({
    url: '/licCustomerInfoServer/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出客户证书
 *
 * @author he
 * @date 2023-08-11 00:44:15
 */
export function licCustomerInfoExport (parameter) {
  return axios({
    url: '/licCustomerInfoServer/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}

/**
 * 验证
 *
 * @author zhuwx
 * @date 2023-08-11 00:44:15
 */
export function licCustomerInfoVerify (parameter) {
  return axios({
    url: '/licCustomerInfoServer/verify',
    method: 'post',
    data: parameter
  })
}
/**
 * 验证
 *
 * @author zhuwx
 * @date 2023-08-11 00:44:15
 */
 export function licCustomerInfoVerifyById (parameter) {
  return axios({
    url: '/licCustomerInfoServer/verifyById',
    method: 'get',
    params: parameter
  })
}
/**
 * 获取授权信息
 *
 * @author zhuwx
 * @date 2023-08-11 00:44:15
 */
 export function licCustomerInfoGetKeysById (parameter) {
  return axios({
    url: '/licCustomerInfoServer/getKeysById',
    method: 'get',
    params: parameter
  })
}
