import { axios } from '@/utils/request'
import { axiosNotTime } from '@/utils/requestNotTime'

/**
 * 查询OTA容器
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
export function otaContainerPage (parameter) {
  return axios({
    url: '/otaContainer/page',
    method: 'get',
    params: parameter
  })
}

/**
 * OTA容器列表
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
export function otaContainerList (parameter) {
  return axios({
    url: '/otaContainer/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加OTA容器
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
export function otaContainerAdd (parameter) {
  return axiosNotTime({
    url: '/otaContainer/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑OTA容器
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
export function otaContainerEdit (parameter) {
  return axiosNotTime({
    url: '/otaContainer/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除OTA容器
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
export function otaContainerDelete (parameter) {
  return axios({
    url: '/otaContainer/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出OTA容器
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
export function otaContainerExport (parameter) {
  return axios({
    url: '/otaContainer/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
/**
 * 查询OTA容器依赖库
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
 export function otaContainerPageLibrary (parameter) {
  return axios({
    url: '/otaContainer/pageLibrary',
    method: 'get',
    params: parameter
  })
}
/**
 * 新增OTA容器依赖库
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
 export function otaContainerAddLibrary (parameter) {
  return axios({
    url: '/otaContainer/addLibrary',
    method: 'post',
    data: parameter
  })
}
/**
 * 删除OTA容器依赖库
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
 export function otaContainerDeleteLibrary (parameter) {
  return axios({
    url: '/otaContainer/deleteLibrary',
    method: 'post',
    data: parameter
  })
}
/**
 * 查询OTA容器应用库
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
 export function otaContainerPageApplication (parameter) {
  return axios({
    url: '/otaContainer/pageApplication',
    method: 'get',
    params: parameter
  })
}
/**
 * 新增OTA容器应用库
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
 export function otaContainerAddApplication (parameter) {
  return axios({
    url: '/otaContainer/addApplication',
    method: 'post',
    data: parameter
  })
}
/**
 * 删除OTA容器应用库
 *
 * @author zhuwx
 * @date 2023-08-29 13:59:58
 */
 export function otaContainerDeleteApplication (parameter) {
  return axios({
    url: '/otaContainer/deleteApplication',
    method: 'post',
    data: parameter
  })
}
/**
 * 查询OTA容器下发
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
 export function otaContainerPageIssue (parameter) {
  return axios({
    url: '/otaContainer/pageIssue',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加OTA容器下发
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
 export function otaContainerAddIssue (parameter) {
  return axios({
    url: '/otaContainer/addIssue',
    method: 'post',
    data: parameter
  })
}

/**
 * 下载容器
 *
 * @author mayongjian
 * @date 2023-08-29 14:55:00
 */
export function otaContainerUpdateVersion (parameter) {
  return axiosNotTime({
    url: '/otaContainer/updateContainerVersion',
    method: 'get',
    params: parameter
  })
}
