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

const mockUrl_0_0_0_4 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_4 = '' as any;
const prodUrl_0_0_0_4 = '' as any;
const dataKey_0_0_0_4 = 'data' as any;

/**
 * 接口 \/api\/log\/login-log 的 **请求类型**
 *
 * @分类 日志管理-登录日志
 */
export interface ApiLogLoginLogPostRequest {
  /**
   * 状态。1:成功，0: 失败
   */
  status: 1 | 0;
  /**
   * 登录账号
   */
  userName: string;
  /**
   * ip
   */
  ip: string;
  /**
   * 登录设备
   */
  equipment?: string;
  /**
   * 登录信息
   */
  info?: string;
  userAgent?: string;
}

/**
 * 接口 \/api\/log\/login-log 的 **返回类型**
 *
 * @分类 日志管理-登录日志
 */
export interface ApiLogLoginLogPostResponse {
  /**
   * 状态。1:成功，0: 失败
   */
  status: 1 | 0;
  /**
   * 登录账号
   */
  userName: string;
  /**
   * 登陆地址
   */
  ip: string;
  /**
   * 登录设备
   */
  equipment?: string;
  /**
   * 登录信息
   */
  info?: string;
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
 * 接口 \/api\/log\/login-log 的 **请求配置的类型**
 *
 * @分类 日志管理-登录日志
 */
type ApiLogLoginLogPostRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/log/login-log', 'data', string, string, false>
>;

/**
 * 接口 \/api\/log\/login-log 的 **请求配置**
 *
 * @分类 日志管理-登录日志
 */
const apiLogLoginLogPostRequestConfig: ApiLogLoginLogPostRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/log/login-log',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiLogLoginLogPost',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 \/api\/log\/login-log 的 **请求函数**
 *
 * @分类 日志管理-登录日志
 */
export const ApiLogLoginLogPost = /*#__PURE__*/ (
  requestData: ApiLogLoginLogPostRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiLogLoginLogPostResponse>(prepare(apiLogLoginLogPostRequestConfig, requestData), ...args);
};

ApiLogLoginLogPost.requestConfig = apiLogLoginLogPostRequestConfig;

/**
 * 接口 查看登录日志。分页 的 **请求类型**
 *
 * @分类 日志管理-登录日志
 */
export interface ApiLogLoginLogGetRequest {
  /**
   * 页码
   */
  pageNo: string;
  /**
   * 每页大小
   */
  pageSize: string;
  /**
   * 状态。1:成功，0: 失败
   */
  status?: string;
  /**
   * 开始时间。格式 Date
   */
  startDate?: string;
  /**
   * 结束时间。格式 Date
   */
  endDate?: string;
  /**
   * 登录账号
   */
  userName?: string;
}

/**
 * 接口 查看登录日志。分页 的 **返回类型**
 *
 * @分类 日志管理-登录日志
 */
export interface ApiLogLoginLogGetResponse {
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
  /**
   * 列表数据。
   */
  list: {
    /**
     * 状态。1:成功，0: 失败
     */
    status: 1 | 0;
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
     * 登录账号
     */
    userName: string;
    /**
     * 登陆地址
     */
    ip: string;
    /**
     * 登录设备
     */
    equipment?: string;
    /**
     * 登录信息
     */
    info?: string;
  }[];
}

/**
 * 接口 查看登录日志。分页 的 **请求配置的类型**
 *
 * @分类 日志管理-登录日志
 */
type ApiLogLoginLogGetRequestConfig = Readonly<
  RequestConfig<
    'http://127.0.0.1:50505/mock/0',
    '',
    '',
    '/api/log/login-log',
    'data',
    string,
    'pageNo' | 'pageSize' | 'status' | 'startDate' | 'endDate' | 'userName',
    false
  >
>;

/**
 * 接口 查看登录日志。分页 的 **请求配置**
 *
 * @分类 日志管理-登录日志
 */
const apiLogLoginLogGetRequestConfig: ApiLogLoginLogGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/log/login-log',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['pageNo', 'pageSize', 'status', 'startDate', 'endDate', 'userName'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiLogLoginLogGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 查看登录日志。分页 的 **请求函数**
 *
 * @分类 日志管理-登录日志
 */
export const ApiLogLoginLogGet = /*#__PURE__*/ (
  requestData: ApiLogLoginLogGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiLogLoginLogGetResponse>(prepare(apiLogLoginLogGetRequestConfig, requestData), ...args);
};

ApiLogLoginLogGet.requestConfig = apiLogLoginLogGetRequestConfig;

/* prettier-ignore-end */
