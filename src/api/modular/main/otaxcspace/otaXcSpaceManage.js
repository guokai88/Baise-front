import { axios } from '@/utils/request'

/**
 * 查询XcSpace
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpacePage (parameter) {
  return axios({
    url: '/otaXcSpace/page',
    method: 'get',
    params: parameter
  })
}

/**
 * XcSpace列表
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceList (parameter) {
  return axios({
    url: '/otaXcSpace/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加XcSpace
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceAdd (parameter) {
  return axios({
    url: '/otaXcSpace/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑XcSpace
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceEdit (parameter) {
  return axios({
    url: '/otaXcSpace/edit',
    method: 'post',
    params: parameter
  })
}

/**
 * 删除XcSpace
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceDelete (parameter) {
  return axios({
    url: '/otaXcSpace/delete',
    method: 'post',
    data: parameter
  })
}

/**
 * 导出XcSpace
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceExport (parameter) {
  return axios({
    url: '/otaXcSpace/export',
    method: 'get',
    params: parameter,
    responseType: 'blob'
  })
}

/**
 * 生成XcSpace版本
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceGenerateVersion (parameter) {
  return axios({
    url: '/otaXcSpace/generateVersion',
    method: 'post',
    params: parameter
  })
}

/**
 * 查询XcSpace和容器关联
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpacePageContainer (parameter) {
  return axios({
    url: '/otaXcSpace/pageContainer',
    method: 'get',
    params: parameter
  })
}

/**
 * 新增XcSpace和容器关联
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceAddContainer (parameter) {
  return axios({
    url: '/otaXcSpace/addContainer',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除XcSpace和容器关联
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceDeleteContainer (parameter) {
  return axios({
    url: '/otaXcSpace/deleteContainer',
    method: 'post',
    data: parameter
  })
}

/**
 * 查询XcSpace和用户关联
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpacePageUser (parameter) {
  return axios({
    url: '/otaXcSpace/pageUser',
    method: 'get',
    params: parameter
  })
}

/**
 * 新增XcSpace和用户关联
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceAddUser (parameter) {
  return axios({
    url: '/otaXcSpace/addUser',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除XcSpace和用户关联
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceDeleteUser (parameter) {
  return axios({
    url: '/otaXcSpace/deleteUser',
    method: 'post',
    data: parameter
  })
}

/**
 * 查询XcSpace和PC关联
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpacePagePc (parameter) {
  return axios({
    url: '/otaXcSpace/pagePc',
    method: 'get',
    params: parameter
  })
}

/**
 * 新增XcSpace和Pc关联
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceAddPc (parameter) {
  return axios({
    url: '/otaXcSpace/addPc',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除XcSpace和Pc关联
 *
 * @author mayongjian
 * @date 2023-11-16 12:54:18
 */
export function otaXcSpaceDeletePc (parameter) {
  return axios({
    url: '/otaXcSpace/deletePc',
    method: 'post',
    data: parameter
  })
}
