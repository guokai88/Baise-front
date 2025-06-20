import { axios } from '@/utils/request'

/**
 * 查询OTA依赖库
 *
 * @author zhuwx
 * @date 2023-08-29 14:54:34
 */
export function otaLibraryPage (parameter) {
  return axios({
    url: '/otaLibrary/page',
    method: 'get',
    params: parameter
  })
}

/**
 * OTA依赖库列表
 *
 * @author zhuwx
 * @date 2023-08-29 14:54:34
 */
export function otaLibraryList (parameter) {
  return axios({
    url: '/otaLibrary/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加OTA依赖库
 *
 * @author zhuwx
 * @date 2023-08-29 14:54:34
 */
export function otaLibraryAdd (parameter) {
  return axios({
    url: '/otaLibrary/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑OTA依赖库
 *
 * @author zhuwx
 * @date 2023-08-29 14:54:34
 */
export function otaLibraryEdit (parameter) {
  return axios({
    url: '/otaLibrary/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除OTA依赖库
 *
 * @author zhuwx
 * @date 2023-08-29 14:54:34
 */
export function otaLibraryDelete (parameter) {
  return axios({
    url: '/otaLibrary/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出OTA依赖库
 *
 * @author zhuwx
 * @date 2023-08-29 14:54:34
 */
export function otaLibraryExport (parameter) {
  return axios({
    url: '/otaLibrary/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
/**
 * 下载文件
 *
 * @author zhuwx
 * @date 2023/09/05 14:54:34
 */
 export function otaLibraryDownload (parameter) {
  return axios({
    url: '/otaLibrary/download',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
/**
 * 查询OTA依赖库下发
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
 export function otaLibraryPageIssue (parameter) {
  return axios({
    url: '/otaLibrary/pageIssue',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加OTA依赖库下发
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
 export function otaLibraryAddIssue (parameter) {
  return axios({
    url: '/otaLibrary/addIssue',
    method: 'post',
    data: parameter
  })
}

/**
 * 依赖库Components列表
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
 export function otaLibraryComponentsList (parameter) {
  return axios({
    url: '/otaLibrary/componentsList',
    method: 'get',
    params: parameter
  })
}
/**
 * 依赖库Programs列表
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
 export function otaLibraryProgramsList (parameter) {
  return axios({
    url: '/otaLibrary/programsList',
    method: 'get',
    params: parameter
  })
}
/**
 * 依赖库Dependencies列表
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
export function otaLibraryDependenciesList (parameter) {
  return axios({
    url: '/otaLibrary/dependenciesList',
    method: 'get',
    params: parameter
  })
}
