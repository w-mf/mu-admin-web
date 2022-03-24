/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
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

const mockUrl_0_0_0_1 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_1 = '' as any;
const prodUrl_0_0_0_1 = '' as any;
const dataKey_0_0_0_1 = 'data' as any;

/**
 * 接口 创建系统用户 的 **请求类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountPostRequest {
  /**
   * 状态。1:正常，0: 停用'
   */
  status: 1 | 0;
  /**
   * 角色ids
   */
  roleIds: number[];
  /**
   * 用户名
   */
  userName: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 备注
   */
  remark?: string;
}

/**
 * 接口 创建系统用户 的 **返回类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountPostResponse {
  /**
   * 状态。1:正常，0: 停用
   */
  status: 1 | 0;
  /**
   * 角色集合
   */
  roleList: {
    /**
     * 角色名称
     */
    name: string;
    /**
     * 唯一标识
     */
    id: number;
  }[];
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
  /**
   * 用户名,唯一
   */
  userName: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 备注
   */
  remark?: string;
}

/**
 * 接口 创建系统用户 的 **请求配置的类型**
 *
 * @分类 系统管理-用户
 */
type ApiSystemAccountPostRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/account', 'data', string, string, false>
>;

/**
 * 接口 创建系统用户 的 **请求配置**
 *
 * @分类 系统管理-用户
 */
const apiSystemAccountPostRequestConfig: ApiSystemAccountPostRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/system/account',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemAccountPost',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 创建系统用户 的 **请求函数**
 *
 * @分类 系统管理-用户
 */
export const ApiSystemAccountPost = /*#__PURE__*/ (
  requestData: ApiSystemAccountPostRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemAccountPostResponse>(prepare(apiSystemAccountPostRequestConfig, requestData), ...args);
};

ApiSystemAccountPost.requestConfig = apiSystemAccountPostRequestConfig;

/**
 * 接口 查看系统用户。分页 的 **请求类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountGetRequest {
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
 * 接口 查看系统用户。分页 的 **返回类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountGetResponse {
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
     * 角色集合
     */
    roleList: {
      /**
       * 角色名称
       */
      name: string;
      /**
       * 唯一标识
       */
      id: number;
    }[];
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
    /**
     * 用户名,唯一
     */
    userName: string;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 备注
     */
    remark?: string;
  }[];
}

/**
 * 接口 查看系统用户。分页 的 **请求配置的类型**
 *
 * @分类 系统管理-用户
 */
type ApiSystemAccountGetRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/api/system/account',
    'data',
    string,
    'pageNo' | 'pageSize',
    false
  >
>;

/**
 * 接口 查看系统用户。分页 的 **请求配置**
 *
 * @分类 系统管理-用户
 */
const apiSystemAccountGetRequestConfig: ApiSystemAccountGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/system/account',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['pageNo', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemAccountGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 查看系统用户。分页 的 **请求函数**
 *
 * @分类 系统管理-用户
 */
export const ApiSystemAccountGet = /*#__PURE__*/ (
  requestData: ApiSystemAccountGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemAccountGetResponse>(prepare(apiSystemAccountGetRequestConfig, requestData), ...args);
};

ApiSystemAccountGet.requestConfig = apiSystemAccountGetRequestConfig;

/**
 * 接口 获取用户权限 的 **请求类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountPermissionsGetRequest {}

/**
 * 接口 获取用户权限 的 **返回类型**
 *
 * @分类 系统管理-用户
 */
export type ApiSystemAccountPermissionsGetResponse = unknown[];

/**
 * 接口 获取用户权限 的 **请求配置的类型**
 *
 * @分类 系统管理-用户
 */
type ApiSystemAccountPermissionsGetRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/api/system/account/permissions',
    'data',
    string,
    string,
    true
  >
>;

/**
 * 接口 获取用户权限 的 **请求配置**
 *
 * @分类 系统管理-用户
 */
const apiSystemAccountPermissionsGetRequestConfig: ApiSystemAccountPermissionsGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/system/account/permissions',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemAccountPermissionsGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 获取用户权限 的 **请求函数**
 *
 * @分类 系统管理-用户
 */
export const ApiSystemAccountPermissionsGet = /*#__PURE__*/ (
  requestData?: ApiSystemAccountPermissionsGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemAccountPermissionsGetResponse>(
    prepare(apiSystemAccountPermissionsGetRequestConfig, requestData),
    ...args,
  );
};

ApiSystemAccountPermissionsGet.requestConfig = apiSystemAccountPermissionsGetRequestConfig;

/**
 * 接口 查询用户详细 的 **请求类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountIdGetRequest {
  id: string;
}

/**
 * 接口 查询用户详细 的 **返回类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountIdGetResponse {
  /**
   * 状态。1:正常，0: 停用
   */
  status: 1 | 0;
  /**
   * 角色集合
   */
  roleList: {
    /**
     * 角色名称
     */
    name: string;
    /**
     * 唯一标识
     */
    id: number;
  }[];
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
  /**
   * 用户名,唯一
   */
  userName: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 备注
   */
  remark?: string;
}

/**
 * 接口 查询用户详细 的 **请求配置的类型**
 *
 * @分类 系统管理-用户
 */
type ApiSystemAccountIdGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/account/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 查询用户详细 的 **请求配置**
 *
 * @分类 系统管理-用户
 */
const apiSystemAccountIdGetRequestConfig: ApiSystemAccountIdGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/system/account/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemAccountIdGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 查询用户详细 的 **请求函数**
 *
 * @分类 系统管理-用户
 */
export const ApiSystemAccountIdGet = /*#__PURE__*/ (
  requestData: ApiSystemAccountIdGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemAccountIdGetResponse>(prepare(apiSystemAccountIdGetRequestConfig, requestData), ...args);
};

ApiSystemAccountIdGet.requestConfig = apiSystemAccountIdGetRequestConfig;

/**
 * 接口 更改用户信息 的 **请求类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountIdPatchRequest {
  /**
   * 状态。1:正常，0: 停用'
   */
  status?: 1 | 0;
  /**
   * 角色ids
   */
  roleIds?: number[];
  /**
   * 用户名
   */
  userName?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 手机号
   */
  mobile?: string;
  /**
   * 备注
   */
  remark?: string;
  id: string;
}

/**
 * 接口 更改用户信息 的 **返回类型**
 *
 * @分类 系统管理-用户
 */
export type ApiSystemAccountIdPatchResponse = boolean;

/**
 * 接口 更改用户信息 的 **请求配置的类型**
 *
 * @分类 系统管理-用户
 */
type ApiSystemAccountIdPatchRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/account/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 更改用户信息 的 **请求配置**
 *
 * @分类 系统管理-用户
 */
const apiSystemAccountIdPatchRequestConfig: ApiSystemAccountIdPatchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/system/account/{id}',
  method: Method.PATCH,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemAccountIdPatch',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 更改用户信息 的 **请求函数**
 *
 * @分类 系统管理-用户
 */
export const ApiSystemAccountIdPatch = /*#__PURE__*/ (
  requestData: ApiSystemAccountIdPatchRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemAccountIdPatchResponse>(prepare(apiSystemAccountIdPatchRequestConfig, requestData), ...args);
};

ApiSystemAccountIdPatch.requestConfig = apiSystemAccountIdPatchRequestConfig;

/**
 * 接口 删除用户 的 **请求类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountIdDeleteRequest {
  id: string;
}

/**
 * 接口 删除用户 的 **返回类型**
 *
 * @分类 系统管理-用户
 */
export type ApiSystemAccountIdDeleteResponse = boolean;

/**
 * 接口 删除用户 的 **请求配置的类型**
 *
 * @分类 系统管理-用户
 */
type ApiSystemAccountIdDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/account/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 删除用户 的 **请求配置**
 *
 * @分类 系统管理-用户
 */
const apiSystemAccountIdDeleteRequestConfig: ApiSystemAccountIdDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/system/account/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemAccountIdDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 删除用户 的 **请求函数**
 *
 * @分类 系统管理-用户
 */
export const ApiSystemAccountIdDelete = /*#__PURE__*/ (
  requestData: ApiSystemAccountIdDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemAccountIdDeleteResponse>(
    prepare(apiSystemAccountIdDeleteRequestConfig, requestData),
    ...args,
  );
};

ApiSystemAccountIdDelete.requestConfig = apiSystemAccountIdDeleteRequestConfig;

/**
 * 接口 设置用户密码 的 **请求类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountIdSetPasswordPostRequest {
  /**
   * 用户旧密码。需经加密
   */
  oldPassword: string;
  /**
   * 用户新密码。需经加密
   */
  newPassword: string;
  id: string;
}

/**
 * 接口 设置用户密码 的 **返回类型**
 *
 * @分类 系统管理-用户
 */
export type ApiSystemAccountIdSetPasswordPostResponse = boolean;

/**
 * 接口 设置用户密码 的 **请求配置的类型**
 *
 * @分类 系统管理-用户
 */
type ApiSystemAccountIdSetPasswordPostRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/api/system/account/{id}/set-password',
    'data',
    'id',
    string,
    false
  >
>;

/**
 * 接口 设置用户密码 的 **请求配置**
 *
 * @分类 系统管理-用户
 */
const apiSystemAccountIdSetPasswordPostRequestConfig: ApiSystemAccountIdSetPasswordPostRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/system/account/{id}/set-password',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemAccountIdSetPasswordPost',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 设置用户密码 的 **请求函数**
 *
 * @分类 系统管理-用户
 */
export const ApiSystemAccountIdSetPasswordPost = /*#__PURE__*/ (
  requestData: ApiSystemAccountIdSetPasswordPostRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemAccountIdSetPasswordPostResponse>(
    prepare(apiSystemAccountIdSetPasswordPostRequestConfig, requestData),
    ...args,
  );
};

ApiSystemAccountIdSetPasswordPost.requestConfig = apiSystemAccountIdSetPasswordPostRequestConfig;

/**
 * 接口 重置用户密码 的 **请求类型**
 *
 * @分类 系统管理-用户
 */
export interface ApiSystemAccountIdResetPasswordPostRequest {
  /**
   * 用户新密码。需经加密
   */
  password?: string;
  id: string;
}

/**
 * 接口 重置用户密码 的 **返回类型**
 *
 * @分类 系统管理-用户
 */
export type ApiSystemAccountIdResetPasswordPostResponse = boolean;

/**
 * 接口 重置用户密码 的 **请求配置的类型**
 *
 * @分类 系统管理-用户
 */
type ApiSystemAccountIdResetPasswordPostRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/api/system/account/{id}/reset-password',
    'data',
    'id',
    string,
    false
  >
>;

/**
 * 接口 重置用户密码 的 **请求配置**
 *
 * @分类 系统管理-用户
 */
const apiSystemAccountIdResetPasswordPostRequestConfig: ApiSystemAccountIdResetPasswordPostRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/api/system/account/{id}/reset-password',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'ApiSystemAccountIdResetPasswordPost',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 重置用户密码 的 **请求函数**
 *
 * @分类 系统管理-用户
 */
export const ApiSystemAccountIdResetPasswordPost = /*#__PURE__*/ (
  requestData: ApiSystemAccountIdResetPasswordPostRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemAccountIdResetPasswordPostResponse>(
    prepare(apiSystemAccountIdResetPasswordPostRequestConfig, requestData),
    ...args,
  );
};

ApiSystemAccountIdResetPasswordPost.requestConfig = apiSystemAccountIdResetPasswordPostRequestConfig;

/* prettier-ignore-end */
