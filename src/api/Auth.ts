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

const mockUrl_0_0_0_3 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_3 = '' as any;
const prodUrl_0_0_0_3 = '' as any;
const dataKey_0_0_0_3 = 'data' as any;

/**
 * 接口 获取验证码 的 **请求类型**
 *
 * @分类 auth
 */
export interface ApiAuthGetImgVerifyCodePostRequest {}

/**
 * 接口 获取验证码 的 **返回类型**
 *
 * @分类 auth
 */
export interface ApiAuthGetImgVerifyCodePostResponse {
  /**
   * 唯一值
   */
  uuid: string;
  /**
   * 验证码
   */
  img: string;
}

/**
 * 接口 获取验证码 的 **请求配置的类型**
 *
 * @分类 auth
 */
type ApiAuthGetImgVerifyCodePostRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/auth/get-img-verify-code', 'data', string, string, true>
>;

/**
 * 接口 获取验证码 的 **请求配置**
 *
 * @分类 auth
 */
const apiAuthGetImgVerifyCodePostRequestConfig: ApiAuthGetImgVerifyCodePostRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/auth/get-img-verify-code',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiAuthGetImgVerifyCodePost',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 获取验证码 的 **请求函数**
 *
 * @分类 auth
 */
export const ApiAuthGetImgVerifyCodePost = /*#__PURE__*/ (
  requestData?: ApiAuthGetImgVerifyCodePostRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiAuthGetImgVerifyCodePostResponse>(
    prepare(apiAuthGetImgVerifyCodePostRequestConfig, requestData),
    ...args,
  );
};

ApiAuthGetImgVerifyCodePost.requestConfig = apiAuthGetImgVerifyCodePostRequestConfig;

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
  /**
   * 图形验证码
   */
  verifyCode: string;
  /**
   * 图形验证码的uuid
   */
  verifyCodeUuid: string;
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
  /**
   * 用户信息
   */
  accountInfo: {
    /**
     * 状态。1:正常，0: 停用
     */
    status: 1 | 0;
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
  };
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
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
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
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
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
 * 接口 刷新token 的 **请求类型**
 *
 * @分类 auth
 */
export interface ApiAuthRefreshTokenPostRequest {}

/**
 * 接口 刷新token 的 **返回类型**
 *
 * @分类 auth
 */
export interface ApiAuthRefreshTokenPostResponse {
  /**
   * 用户认证token
   */
  accessToken: string;
  /**
   * 用户信息
   */
  accountInfo: {
    /**
     * 状态。1:正常，0: 停用
     */
    status: 1 | 0;
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
  };
}

/**
 * 接口 刷新token 的 **请求配置的类型**
 *
 * @分类 auth
 */
type ApiAuthRefreshTokenPostRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/auth/refresh-token', 'data', string, string, true>
>;

/**
 * 接口 刷新token 的 **请求配置**
 *
 * @分类 auth
 */
const apiAuthRefreshTokenPostRequestConfig: ApiAuthRefreshTokenPostRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/auth/refresh-token',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiAuthRefreshTokenPost',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 刷新token 的 **请求函数**
 *
 * @分类 auth
 */
export const ApiAuthRefreshTokenPost = /*#__PURE__*/ (
  requestData?: ApiAuthRefreshTokenPostRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiAuthRefreshTokenPostResponse>(prepare(apiAuthRefreshTokenPostRequestConfig, requestData), ...args);
};

ApiAuthRefreshTokenPost.requestConfig = apiAuthRefreshTokenPostRequestConfig;

/* prettier-ignore-end */
