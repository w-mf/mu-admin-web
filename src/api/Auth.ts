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

const mockUrl_0_0_0_3 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_3 = '' as any;
const prodUrl_0_0_0_3 = '' as any;
const dataKey_0_0_0_3 = 'data' as any;

/**
 * 接口 登录 的 **请求类型**
 *
 * @分类 auth
 */
export interface ApiAuthLoginPostRequest {
  /**
   * 账号
   */
  userName: string;
  /**
   * 密码。需经过接口 auth/encryption 加密过的字符串
   */
  password: string;
}

/**
 * 接口 登录 的 **返回类型**
 *
 * @分类 auth
 */
export interface ApiAuthLoginPostResponse {
  /**
   * 用户认证token
   */
  accessToken: string;
}

/**
 * 接口 登录 的 **请求配置的类型**
 *
 * @分类 auth
 */
type ApiAuthLoginPostRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/auth/login', 'data', string, string, false>
>;

/**
 * 接口 登录 的 **请求配置**
 *
 * @分类 auth
 */
const apiAuthLoginPostRequestConfig: ApiAuthLoginPostRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/auth/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiAuthLoginPost',
  extraInfo: {},
};

/**
 * 接口 登录 的 **请求函数**
 *
 * @分类 auth
 */
export const ApiAuthLoginPost = /*#__PURE__*/ (requestData: ApiAuthLoginPostRequest, ...args: UserRequestRestArgs) => {
  return request<ApiAuthLoginPostResponse>(prepare(apiAuthLoginPostRequestConfig, requestData), ...args);
};

ApiAuthLoginPost.requestConfig = apiAuthLoginPostRequestConfig;

/**
 * 接口 加密字符串 的 **请求类型**
 *
 * @分类 auth
 */
export interface ApiAuthEncryptionPostRequest {
  /**
   * 需加密字符串
   */
  str: string;
}

/**
 * 接口 加密字符串 的 **返回类型**
 *
 * @分类 auth
 */
export type ApiAuthEncryptionPostResponse = string;

/**
 * 接口 加密字符串 的 **请求配置的类型**
 *
 * @分类 auth
 */
type ApiAuthEncryptionPostRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/auth/encryption', 'data', string, string, false>
>;

/**
 * 接口 加密字符串 的 **请求配置**
 *
 * @分类 auth
 */
const apiAuthEncryptionPostRequestConfig: ApiAuthEncryptionPostRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/auth/encryption',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiAuthEncryptionPost',
  extraInfo: {},
};

/**
 * 接口 加密字符串 的 **请求函数**
 *
 * @分类 auth
 */
export const ApiAuthEncryptionPost = /*#__PURE__*/ (
  requestData: ApiAuthEncryptionPostRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiAuthEncryptionPostResponse>(prepare(apiAuthEncryptionPostRequestConfig, requestData), ...args);
};

ApiAuthEncryptionPost.requestConfig = apiAuthEncryptionPostRequestConfig;

/**
 * 接口 获取用户权限 的 **请求类型**
 *
 * @分类 auth
 */
export interface ApiAuthPermissionsGetRequest {}

/**
 * 接口 获取用户权限 的 **返回类型**
 *
 * @分类 auth
 */
export type ApiAuthPermissionsGetResponse = unknown[];

/**
 * 接口 获取用户权限 的 **请求配置的类型**
 *
 * @分类 auth
 */
type ApiAuthPermissionsGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/auth/permissions', 'data', string, string, true>
>;

/**
 * 接口 获取用户权限 的 **请求配置**
 *
 * @分类 auth
 */
const apiAuthPermissionsGetRequestConfig: ApiAuthPermissionsGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/auth/permissions',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiAuthPermissionsGet',
  extraInfo: {},
};

/**
 * 接口 获取用户权限 的 **请求函数**
 *
 * @分类 auth
 */
export const ApiAuthPermissionsGet = /*#__PURE__*/ (
  requestData?: ApiAuthPermissionsGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiAuthPermissionsGetResponse>(prepare(apiAuthPermissionsGetRequestConfig, requestData), ...args);
};

ApiAuthPermissionsGet.requestConfig = apiAuthPermissionsGetRequestConfig;

/* prettier-ignore-end */
