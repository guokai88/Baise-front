import { axios } from '@/utils/request'
import { axiosNotTime } from '@/utils/requestNotTime'

/**
 * 查询OTA应用库
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
export function otaApplicationPage (parameter) {
  return axios({
    url: '/otaApplication/page',
    method: 'get',
    params: parameter
  })
}

/**
 * OTA应用库列表
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
export function otaApplicationList (parameter) {
  return axios({
    url: '/otaApplication/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加OTA应用库
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
export function otaApplicationAdd (parameter) {
  return axiosNotTime({
    url: '/otaApplication/add',
    method: 'post',
    data: parameter,
    timeout: 180000
  })
}

/**
 * 编辑OTA应用库
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
export function otaApplicationEdit (parameter) {
  return axiosNotTime({
    url: '/otaApplication/edit',
    method: 'post',
    data: parameter,
    timeout: 180000
  })
}

/**
 * 删除OTA应用库
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
export function otaApplicationDelete (parameter) {
  return axios({
    url: '/otaApplication/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出OTA应用库
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
export function otaApplicationExport (parameter) {
  return axios({
    url: '/otaApplication/export',
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
 export function otaApplicationDownload (parameter) {
  return axiosNotTime({
    url: '/otaApplication/download',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}
/**
 * 查询OTA应用库下发
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
 export function otaApplicationPageIssue (parameter) {
  return axios({
    url: '/otaApplication/pageIssue',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加OTA应用库下发
 *
 * @author zhuwx
 * @date 2023-08-29 14:55:00
 */
 export function otaApplicationAddIssue (parameter) {
  return axios({
    url: '/otaApplication/addIssue',
    method: 'post',
    data: parameter
  })
}

/**
 * 修改OTA应用状态
 *
 * @author mayongjian
 * @date 2023-12-05 14:55:00
 */
export function otaApplicationEditStatus (parameter) {
  return axios({
    url: '/otaApplication/otaApplicationEditStatus',
    method: 'post',
    data: parameter
  })
}

/**
 * 查询应用依赖库
 *
 * @author mayongjian
 * @date 2024-01-05 14:55:00
 */
export function pageApplicationLibrary (parameter) {
  return axios({
    url: '/otaApplication/pageApplicationLibrary',
    method: 'get',
    params: parameter
  })
}

/**
 * 新增应用依赖库
 *
 * @author mayongjian
 * @date 2024-01-05 14:55:00
 */
export function addApplicationLibrary (parameter) {
  return axios({
    url: '/otaApplication/addApplicationLibrary',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除应用依赖库
 *
 * @author mayongjian
 * @date 2024-01-05 14:55:00
 */
export function deleteApplicationLibrary (parameter) {
  return axios({
    url: '/otaApplication/deleteApplicationLibrary',
    method: 'post',
    data: parameter
  })
}

/**
 * 预览文件
 *
 * @author mayongjian
 * @date 2024/3/2 11:05
 */
export function otaApplicationPreview (parameter) {
  return axios({
    url: '/otaApplication/preview',
    method: 'get',
    params: parameter,
    responseType: 'arraybuffer'
  })
}

/**
 * 分片上传应用依赖
 *
 * @author mayongjian
 * @date 2024-03-27 18:17:19
 */
export function otaApplicationUploadBigFile (parameter) {
  return axios({
    url: '/otaApplication/uploadBigFile',
    method: 'post',
    data: parameter
  })
}

/**
 * 导入
 *
 * @author mayongjian
 * @date 2024-11-05 18:17:19
 */
export function otaApplicationImportExcel (parameter) {
  return axios({
    url: '/otaApplication/import',
    method: 'post',
    data: parameter
  })
}

/**
 * 查询应用环境库
 *
 * @author mayongjian
 * @date 2024-12-12 14:55:00
 */
export function pageApplicationCondition (parameter) {
  return axios({
    url: '/otaApplication/pageApplicationCondition',
    method: 'get',
    params: parameter
  })
}

/**
 * 新增应用环境库
 *
 * @author mayongjian
 * @date 2024-12-12 14:55:00
 */
export function addApplicationCondition (parameter) {
  return axios({
    url: '/otaApplication/addApplicationCondition',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除应用环境库
 *
 * @author mayongjian
 * @date 2024-12-12 14:55:00
 */
export function deleteApplicationCondition (parameter) {
  return axios({
    url: '/otaApplication/deleteApplicationCondition',
    method: 'post',
    data: parameter
  })
}

/**
 * 按名称统计应用下载记录
 *
 * @author mayongjian
 * @date 2025-1-15 13:59:58
 */
export function countApplicationDownloadNameTotalList (parameter) {
  return axios({
    url: '/otaApplication/countApplicationDownloadNameTotalList',
    method: 'get',
    params: parameter
  })
}

/**
 * 按日期格式统计应用下载记录
 *
 * @author mayongjian
 * @date 2025-1-15 13:59:58
 */
export function countApplicationDownloadTotalListByDateFormat (parameter) {
  return axios({
    url: '/otaApplication/countApplicationDownloadTotalListByDateFormat',
    method: 'get',
    params: parameter
  })
}

/**
 * 按类型统计应用下载记录
 *
 * @author mayongjian
 * @date 2025-1-15 13:59:58
 */
export function countApplicationDownloadTypeTotalList (parameter) {
  return axios({
    url: '/otaApplication/countApplicationDownloadTypeTotalList',
    method: 'get',
    params: parameter
  })
}
