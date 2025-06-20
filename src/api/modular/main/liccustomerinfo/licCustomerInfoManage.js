import { axios } from '@/utils/request'

/**
 * 查询客户证书
 *
 * @author he
 * @date 2023-08-11 00:44:15
 */
export function licCustomerInfoPage (parameter) {
  return axios({
    url: '/licCustomerInfo/page',
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
    url: '/licCustomerInfo/list',
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
    url: '/licCustomerInfo/add',
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
    url: '/licCustomerInfo/edit',
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
    url: '/licCustomerInfo/delete',
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
    url: '/licCustomerInfo/export',
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
    url: '/licCustomerInfo/verify',
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
    url: '/licCustomerInfo/verifyById',
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
    url: '/licCustomerInfo/getKeysById',
    method: 'get',
    params: parameter
  })
}
/**
 * 获取硬件信息
 *
 * @author zhuwx
 * @date 2023-08-11 00:44:15
 */
 export function licCustomerInfoGetHardwareDetail (parameter) {
  return axios({
    url: '/licCustomerInfo/getHardwareDetail',
    method: 'get',
    params: parameter
  })
}
/**
 * 注册
 *
 * @author zhuwx
 * @date 2023-08-11 00:44:15
 */
 export function licCustomerInfoRegister (parameter) {
  return axios({
    url: '/licCustomerInfo/register',
    method: 'post',
    data: parameter
  })
}
/**
 * 验证本机
 *
 * @author zhuwx
 * @date 2023-08-11 00:44:15
 */
 export function licCustomerInfoVerifyHardware (parameter) {
  return axios({
    url: '/licCustomerInfo/verifyHardware',
    method: 'get',
    params: parameter
  })
}
/**
 * 获取注册信息
 *
 * @author zhuwx
 * @date 2023-08-11 00:44:15
 */
 export function licCustomerInfoGetRegisterDetail (parameter) {
  return axios({
    url: '/licCustomerInfo/getRegisterDetail',
    method: 'get',
    params: parameter
  })
}
/**
 * 解析出硬件信息
 *
 * @author zhuwx
 * @date 2023-08-11 00:44:15
 */
 export function licCustomerInfoGetHardwareByCode (parameter) {
  return axios({
    url: '/licCustomerInfo/getHardwareByCode',
    method: 'get',
    params: parameter
  })
}

/**
 * 修改客户状态
 *
 * @author mayongjian
 * @date 2024-12-30 10:44:15
 */
export function editStatus (parameter) {
  return axios({
    url: '/licCustomerInfo/editStatus',
    method: 'post',
    data: parameter
  })
}
