import { axios } from '@/utils/request'
import { axiosNotTime } from '@/utils/requestNotTime'

/**
 * 查询PC
 *
 * @author zhuwx
 * @date 2023-11-14 14:50:26
 */
export function otaPcPage (parameter) {
  return axios({
    url: '/otaPc/page',
    method: 'get',
    params: parameter
  })
}

/**
 * PC列表
 *
 * @author zhuwx
 * @date 2023-11-14 14:50:26
 */
export function otaPcList (parameter) {
  return axios({
    url: '/otaPc/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加PC
 *
 * @author zhuwx
 * @date 2023-11-14 14:50:26
 */
export function otaPcAdd (parameter) {
  return axiosNotTime({
    url: '/otaPc/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑PC
 *
 * @author zhuwx
 * @date 2023-11-14 14:50:26
 */
export function otaPcEdit (parameter) {
  return axiosNotTime({
    url: '/otaPc/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除PC
 *
 * @author zhuwx
 * @date 2023-11-14 14:50:26
 */
export function otaPcDelete (parameter) {
  return axios({
    url: '/otaPc/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出PC
 *
 * @author zhuwx
 * @date 2023-11-14 14:50:26
 */
export function otaPcExport (parameter) {
  return axios({
    url: '/otaPc/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
