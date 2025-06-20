import { axios } from '@/utils/request'

/**
 * 查询应用依赖
 *
 * @author mayongjian
 * @date 2023-12-25 11:32:19
 */
export function otaApplicationLibraryPage (parameter) {
  return axios({
    url: '/otaApplicationLibrary/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 应用依赖列表
 *
 * @author mayongjian
 * @date 2023-12-25 11:32:19
 */
export function otaApplicationLibraryList (parameter) {
  return axios({
    url: '/otaApplicationLibrary/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加应用依赖
 *
 * @author mayongjian
 * @date 2023-12-25 11:32:19
 */
export function otaApplicationLibraryAdd (parameter) {
  return axios({
    url: '/otaApplicationLibrary/add',
    method: 'post',
    data: parameter,
    timeout: 600000
  })
}

/**
 * 编辑应用依赖
 *
 * @author mayongjian
 * @date 2023-12-25 11:32:19
 */
export function otaApplicationLibraryEdit (parameter) {
  return axios({
    url: '/otaApplicationLibrary/edit',
    method: 'post',
    data: parameter,
    timeout: 600000
  })
}

/**
 * 删除应用依赖
 *
 * @author mayongjian
 * @date 2023-12-25 11:32:19
 */
export function otaApplicationLibraryDelete (parameter) {
  return axios({
    url: '/otaApplicationLibrary/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出应用依赖
 *
 * @author mayongjian
 * @date 2023-12-25 11:32:19
 */
export function otaApplicationLibraryExport (parameter) {
  return axios({
    url: '/otaApplicationLibrary/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}

/**
 * 分片上传应用依赖
 *
 * @author mayongjian
 * @date 2024-03-27 18:17:19
 */
export function otaApplicationLibraryUploadBigFile (parameter) {
  return axios({
    url: '/otaApplicationLibrary/uploadBigFile',
    method: 'post',
    data: parameter
  })
}

/**
 * 导入
 *
 * @author mayongjian
 * @date 2024-11-06 18:17:19
 */
export function otaApplicationLibraryImportExcel (parameter) {
  return axios({
    url: '/otaApplicationLibrary/import',
    method: 'post',
    data: parameter
  })
}
