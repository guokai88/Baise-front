import { axios } from '@/utils/request'

/**
 * 查询访问日志
 *
 * @author yubaoshan
 * @date 2020/5/19 11:57
 */
export function sysVisLogPage (parameter) {
  return axios({
    url: '/sysVisLog/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 查询操作日志
 *
 * @author yubaoshan
 * @date 2020/5/19 11:57
 */
export function sysOpLogPage (parameter) {
  return axios({
    url: '/sysOpLog/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 查询操作日志
 *
 * @author mayongjian
 * @date 2023/11/13
 */
export function sysPcLogPage (parameter) {
  return axios({
    url: '/sysPcLog/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 清空访问日志
 *
 * @author yubaoshan
 * @date 2020/6/23 23:09
 */
export function sysVisLogDelete (parameter) {
  return axios({
    url: '/sysVisLog/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 清空登录日志
 *
 * @author yubaoshan
 * @date 2020/6/23 23:09
 */
export function sysOpLogDelete (parameter) {
  return axios({
    url: '/sysOpLog/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 清空PC日志
 *
 * @author mayongjian
 * @date 2023/11/13
 */
export function sysPcLogDelete (parameter) {
  return axios({
    url: '/sysPcLog/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出登录日志
 *
 * @author yubaoshan
 * @date 2021/5/30 18:03
 */
export function sysVisLogExport (parameter) {
  return axios({
    url: '/sysVisLog/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}

/**
 * 导出操作日志
 *
 * @author yubaoshan
 * @date 2021/5/30 18:03
 */
export function sysOpLogExport (parameter) {
  return axios({
    url: '/sysOpLog/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}

/**
 * 导出PC日志
 *
 * @author mayongjian
 * @date 2023/11/13
 */
export function sysPcLogExport (parameter) {
  return axios({
    url: '/sysPcLog/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
