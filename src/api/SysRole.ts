/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { Method, RequestBodyType, ResponseBodyType, RequestConfig, RequestFunctionRestArgs, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
import request from '../utils/HttpClient';

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>;

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig;
};

const mockUrl_0_0_0_2 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_2 = '' as any;
const prodUrl_0_0_0_2 = '' as any;
const dataKey_0_0_0_2 = 'data' as any;

/**
 * 接口 新增角色 的 **请求类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRolePostRequest {
  /**
   * 角色名称
   */
  name: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 状态。1:正常，0: 停用
   */
  status: {};
  /**
   * 菜单权限id。多个用,分隔
   */
  menuIds?: string;
}

/**
 * 接口 新增角色 的 **返回类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRolePostResponse {
  /**
   * 状态。1:正常，0: 停用
   */
  status: 1 | 0;
  /**
   * 角色名称
   */
  name: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 菜单权限id
   */
  menuIds?: string;
  /**
   * 唯一标识
   */
  id: number;
  /**
   * 创建时间
   */
  createdAt: string;
  /**
   * 更新时间
   */
  updatedAt: string;
}

/**
 * 接口 新增角色 的 **请求配置的类型**
 *
 * @分类 系统管理-角色
 */
type ApiSystemRolePostRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/role', 'data', string, string, false>
>;

/**
 * 接口 新增角色 的 **请求配置**
 *
 * @分类 系统管理-角色
 */
const apiSystemRolePostRequestConfig: ApiSystemRolePostRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/system/role',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemRolePost',
  extraInfo: {},
};

/**
 * 接口 新增角色 的 **请求函数**
 *
 * @分类 系统管理-角色
 */
export const ApiSystemRolePost = /*#__PURE__*/ (
  requestData: ApiSystemRolePostRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemRolePostResponse>(prepare(apiSystemRolePostRequestConfig, requestData), ...args);
};

ApiSystemRolePost.requestConfig = apiSystemRolePostRequestConfig;

/**
 * 接口 查询角色，分页 的 **请求类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRoleGetRequest {
  /**
   * 页码
   */
  pageNo: string;
  /**
   * 每页大小
   */
  pageSize: string;
}

/**
 * 接口 查询角色，分页 的 **返回类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRoleGetResponse {
  /**
   * 列表总条数
   */
  total: number;
  /**
   * 分页大小
   */
  pageSize: number;
  /**
   * 页码
   */
  pageNo: number;
  list: {
    /**
     * 状态。1:正常，0: 停用
     */
    status: 1 | 0;
    /**
     * 角色名称
     */
    name: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 菜单权限id
     */
    menuIds?: string;
    /**
     * 唯一标识
     */
    id: number;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 更新时间
     */
    updatedAt: string;
  }[];
}

/**
 * 接口 查询角色，分页 的 **请求配置的类型**
 *
 * @分类 系统管理-角色
 */
type ApiSystemRoleGetRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/api/system/role',
    'data',
    string,
    'pageNo' | 'pageSize',
    false
  >
>;

/**
 * 接口 查询角色，分页 的 **请求配置**
 *
 * @分类 系统管理-角色
 */
const apiSystemRoleGetRequestConfig: ApiSystemRoleGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/system/role',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ['pageNo', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemRoleGet',
  extraInfo: {},
};

/**
 * 接口 查询角色，分页 的 **请求函数**
 *
 * @分类 系统管理-角色
 */
export const ApiSystemRoleGet = /*#__PURE__*/ (requestData: ApiSystemRoleGetRequest, ...args: UserRequestRestArgs) => {
  return request<ApiSystemRoleGetResponse>(prepare(apiSystemRoleGetRequestConfig, requestData), ...args);
};

ApiSystemRoleGet.requestConfig = apiSystemRoleGetRequestConfig;

/**
 * 接口 查询角色,枚举 的 **请求类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRoleSimpleListGetRequest {}

/**
 * 接口 查询角色,枚举 的 **返回类型**
 *
 * @分类 系统管理-角色
 */
export type ApiSystemRoleSimpleListGetResponse = {}[];

/**
 * 接口 查询角色,枚举 的 **请求配置的类型**
 *
 * @分类 系统管理-角色
 */
type ApiSystemRoleSimpleListGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/role/simple-list', 'data', string, string, true>
>;

/**
 * 接口 查询角色,枚举 的 **请求配置**
 *
 * @分类 系统管理-角色
 */
const apiSystemRoleSimpleListGetRequestConfig: ApiSystemRoleSimpleListGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/system/role/simple-list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemRoleSimpleListGet',
  extraInfo: {},
};

/**
 * 接口 查询角色,枚举 的 **请求函数**
 *
 * @分类 系统管理-角色
 */
export const ApiSystemRoleSimpleListGet = /*#__PURE__*/ (
  requestData?: ApiSystemRoleSimpleListGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemRoleSimpleListGetResponse>(
    prepare(apiSystemRoleSimpleListGetRequestConfig, requestData),
    ...args,
  );
};

ApiSystemRoleSimpleListGet.requestConfig = apiSystemRoleSimpleListGetRequestConfig;

/**
 * 接口 查询角色详情 的 **请求类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRoleIdGetRequest {
  id: string;
}

/**
 * 接口 查询角色详情 的 **返回类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRoleIdGetResponse {
  /**
   * 状态。1:正常，0: 停用
   */
  status: 1 | 0;
  /**
   * 角色名称
   */
  name: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 菜单权限id
   */
  menuIds?: string;
  /**
   * 唯一标识
   */
  id: number;
  /**
   * 创建时间
   */
  createdAt: string;
  /**
   * 更新时间
   */
  updatedAt: string;
}

/**
 * 接口 查询角色详情 的 **请求配置的类型**
 *
 * @分类 系统管理-角色
 */
type ApiSystemRoleIdGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/role/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 查询角色详情 的 **请求配置**
 *
 * @分类 系统管理-角色
 */
const apiSystemRoleIdGetRequestConfig: ApiSystemRoleIdGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/system/role/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemRoleIdGet',
  extraInfo: {},
};

/**
 * 接口 查询角色详情 的 **请求函数**
 *
 * @分类 系统管理-角色
 */
export const ApiSystemRoleIdGet = /*#__PURE__*/ (
  requestData: ApiSystemRoleIdGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemRoleIdGetResponse>(prepare(apiSystemRoleIdGetRequestConfig, requestData), ...args);
};

ApiSystemRoleIdGet.requestConfig = apiSystemRoleIdGetRequestConfig;

/**
 * 接口 更新角色信息 的 **请求类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRoleIdPatchRequest {
  id: string;
}

/**
 * 接口 更新角色信息 的 **返回类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRoleIdPatchResponse {
  /**
   * 状态。1:正常，0: 停用
   */
  status: 1 | 0;
  /**
   * 角色名称
   */
  name: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 菜单权限id
   */
  menuIds?: string;
  /**
   * 唯一标识
   */
  id: number;
  /**
   * 创建时间
   */
  createdAt: string;
  /**
   * 更新时间
   */
  updatedAt: string;
}

/**
 * 接口 更新角色信息 的 **请求配置的类型**
 *
 * @分类 系统管理-角色
 */
type ApiSystemRoleIdPatchRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/role/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 更新角色信息 的 **请求配置**
 *
 * @分类 系统管理-角色
 */
const apiSystemRoleIdPatchRequestConfig: ApiSystemRoleIdPatchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/system/role/{id}',
  method: Method.PATCH,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemRoleIdPatch',
  extraInfo: {},
};

/**
 * 接口 更新角色信息 的 **请求函数**
 *
 * @分类 系统管理-角色
 */
export const ApiSystemRoleIdPatch = /*#__PURE__*/ (
  requestData: ApiSystemRoleIdPatchRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemRoleIdPatchResponse>(prepare(apiSystemRoleIdPatchRequestConfig, requestData), ...args);
};

ApiSystemRoleIdPatch.requestConfig = apiSystemRoleIdPatchRequestConfig;

/**
 * 接口 删除角色 的 **请求类型**
 *
 * @分类 系统管理-角色
 */
export interface ApiSystemRoleIdDeleteRequest {
  id: string;
}

/**
 * 接口 删除角色 的 **返回类型**
 *
 * @分类 系统管理-角色
 */
export type ApiSystemRoleIdDeleteResponse = boolean;

/**
 * 接口 删除角色 的 **请求配置的类型**
 *
 * @分类 系统管理-角色
 */
type ApiSystemRoleIdDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/role/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 删除角色 的 **请求配置**
 *
 * @分类 系统管理-角色
 */
const apiSystemRoleIdDeleteRequestConfig: ApiSystemRoleIdDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/system/role/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemRoleIdDelete',
  extraInfo: {},
};

/**
 * 接口 删除角色 的 **请求函数**
 *
 * @分类 系统管理-角色
 */
export const ApiSystemRoleIdDelete = /*#__PURE__*/ (
  requestData: ApiSystemRoleIdDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemRoleIdDeleteResponse>(prepare(apiSystemRoleIdDeleteRequestConfig, requestData), ...args);
};

ApiSystemRoleIdDelete.requestConfig = apiSystemRoleIdDeleteRequestConfig;

/* prettier-ignore-end */
