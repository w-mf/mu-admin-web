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

const mockUrl_0_0_0_0 = 'http://127.0.0.1:50505/mock/0' as any;
const devUrl_0_0_0_0 = '' as any;
const prodUrl_0_0_0_0 = '' as any;
const dataKey_0_0_0_0 = 'data' as any;

/**
 * 接口 新建菜单 的 **请求类型**
 *
 * @分类 系统管理-菜单
 */
export interface ApiSystemMenuPostRequest {
  /**
   * 类型。1:目录,2:菜单,3:按钮
   */
  type: 1 | 2;
  /**
   * 是否显示。1:显示,0:不显示，默认1
   */
  show?: 1 | 0;
  /**
   * 名称
   */
  name: string;
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 排序。最大值 9999
   */
  sort?: number;
  /**
   * 权限码
   */
  accessCode: string;
}

/**
 * 接口 新建菜单 的 **返回类型**
 *
 * @分类 系统管理-菜单
 */
export interface ApiSystemMenuPostResponse {
  /**
   * 类型。1:目录,2:菜单,3:按钮
   */
  type: 1 | 2;
  /**
   * 是否显示。1:显示,0:不显示，默认1
   */
  show: 1 | 0;
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 权限码
   */
  accessCode: string;
  /**
   * 排序
   */
  sort?: number;
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
 * 接口 新建菜单 的 **请求配置的类型**
 *
 * @分类 系统管理-菜单
 */
type ApiSystemMenuPostRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/menu', 'data', string, string, false>
>;

/**
 * 接口 新建菜单 的 **请求配置**
 *
 * @分类 系统管理-菜单
 */
const apiSystemMenuPostRequestConfig: ApiSystemMenuPostRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/system/menu',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemMenuPost',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 新建菜单 的 **请求函数**
 *
 * @分类 系统管理-菜单
 */
export const ApiSystemMenuPost = /*#__PURE__*/ (
  requestData: ApiSystemMenuPostRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemMenuPostResponse>(prepare(apiSystemMenuPostRequestConfig, requestData), ...args);
};

ApiSystemMenuPost.requestConfig = apiSystemMenuPostRequestConfig;

/**
 * 接口 菜单列表 的 **请求类型**
 *
 * @分类 系统管理-菜单
 */
export interface ApiSystemMenuListGetRequest {}

/**
 * 接口 菜单列表 的 **返回类型**
 *
 * @分类 系统管理-菜单
 */
export type ApiSystemMenuListGetResponse = {
  /**
   * 类型。1:目录,2:菜单,3:按钮
   */
  type: 1 | 2;
  /**
   * 是否显示。1:显示,0:不显示，默认1
   */
  show: 1 | 0;
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 权限码
   */
  accessCode: string;
  /**
   * 排序
   */
  sort?: number;
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

/**
 * 接口 菜单列表 的 **请求配置的类型**
 *
 * @分类 系统管理-菜单
 */
type ApiSystemMenuListGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/menu/list', 'data', string, string, true>
>;

/**
 * 接口 菜单列表 的 **请求配置**
 *
 * @分类 系统管理-菜单
 */
const apiSystemMenuListGetRequestConfig: ApiSystemMenuListGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/system/menu/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemMenuListGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 菜单列表 的 **请求函数**
 *
 * @分类 系统管理-菜单
 */
export const ApiSystemMenuListGet = /*#__PURE__*/ (
  requestData?: ApiSystemMenuListGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemMenuListGetResponse>(prepare(apiSystemMenuListGetRequestConfig, requestData), ...args);
};

ApiSystemMenuListGet.requestConfig = apiSystemMenuListGetRequestConfig;

/**
 * 接口 菜单树列表 的 **请求类型**
 *
 * @分类 系统管理-菜单
 */
export interface ApiSystemMenuTreeListGetRequest {}

/**
 * 接口 菜单树列表 的 **返回类型**
 *
 * @分类 系统管理-菜单
 */
export type ApiSystemMenuTreeListGetResponse = {
  /**
   * 类型。1:目录,2:菜单,3:按钮
   */
  type: 1 | 2;
  /**
   * 是否显示。1:显示,0:不显示，默认1
   */
  show: 1 | 0;
  /**
   * 子级
   */
  children?: {
    /**
     * 类型。1:目录,2:菜单,3:按钮
     */
    type: 1 | 2;
    /**
     * 是否显示。1:显示,0:不显示，默认1
     */
    show: 1 | 0;
    /**
     * 父级id
     */
    parentId?: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 权限码
     */
    accessCode: string;
    /**
     * 排序
     */
    sort?: number;
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
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 权限码
   */
  accessCode: string;
  /**
   * 排序
   */
  sort?: number;
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

/**
 * 接口 菜单树列表 的 **请求配置的类型**
 *
 * @分类 系统管理-菜单
 */
type ApiSystemMenuTreeListGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/menu/tree-list', 'data', string, string, true>
>;

/**
 * 接口 菜单树列表 的 **请求配置**
 *
 * @分类 系统管理-菜单
 */
const apiSystemMenuTreeListGetRequestConfig: ApiSystemMenuTreeListGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/system/menu/tree-list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemMenuTreeListGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 菜单树列表 的 **请求函数**
 *
 * @分类 系统管理-菜单
 */
export const ApiSystemMenuTreeListGet = /*#__PURE__*/ (
  requestData?: ApiSystemMenuTreeListGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemMenuTreeListGetResponse>(
    prepare(apiSystemMenuTreeListGetRequestConfig, requestData),
    ...args,
  );
};

ApiSystemMenuTreeListGet.requestConfig = apiSystemMenuTreeListGetRequestConfig;

/**
 * 接口 根据id查菜单详情（不含子级)） 的 **请求类型**
 *
 * @分类 系统管理-菜单
 */
export interface ApiSystemMenuIdGetRequest {
  id: string;
}

/**
 * 接口 根据id查菜单详情（不含子级)） 的 **返回类型**
 *
 * @分类 系统管理-菜单
 */
export interface ApiSystemMenuIdGetResponse {
  /**
   * 类型。1:目录,2:菜单,3:按钮
   */
  type: 1 | 2;
  /**
   * 是否显示。1:显示,0:不显示，默认1
   */
  show: 1 | 0;
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 权限码
   */
  accessCode: string;
  /**
   * 排序
   */
  sort?: number;
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
 * 接口 根据id查菜单详情（不含子级)） 的 **请求配置的类型**
 *
 * @分类 系统管理-菜单
 */
type ApiSystemMenuIdGetRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/menu/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 根据id查菜单详情（不含子级)） 的 **请求配置**
 *
 * @分类 系统管理-菜单
 */
const apiSystemMenuIdGetRequestConfig: ApiSystemMenuIdGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/system/menu/{id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemMenuIdGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 根据id查菜单详情（不含子级)） 的 **请求函数**
 *
 * @分类 系统管理-菜单
 */
export const ApiSystemMenuIdGet = /*#__PURE__*/ (
  requestData: ApiSystemMenuIdGetRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemMenuIdGetResponse>(prepare(apiSystemMenuIdGetRequestConfig, requestData), ...args);
};

ApiSystemMenuIdGet.requestConfig = apiSystemMenuIdGetRequestConfig;

/**
 * 接口 更新菜单详情 的 **请求类型**
 *
 * @分类 系统管理-菜单
 */
export interface ApiSystemMenuIdPatchRequest {
  /**
   * 类型。1:目录,2:菜单,3:按钮
   */
  type?: 1 | 2;
  /**
   * 是否显示。1:显示,0:不显示，默认1
   */
  show?: 1 | 0;
  /**
   * 名称
   */
  name?: string;
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 排序。最大值 9999
   */
  sort?: number;
  /**
   * 权限码
   */
  accessCode?: string;
  id: string;
}

/**
 * 接口 更新菜单详情 的 **返回类型**
 *
 * @分类 系统管理-菜单
 */
export interface ApiSystemMenuIdPatchResponse {
  /**
   * 类型。1:目录,2:菜单,3:按钮
   */
  type: 1 | 2;
  /**
   * 是否显示。1:显示,0:不显示，默认1
   */
  show: 1 | 0;
  /**
   * 父级id
   */
  parentId?: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 权限码
   */
  accessCode: string;
  /**
   * 排序
   */
  sort?: number;
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
 * 接口 更新菜单详情 的 **请求配置的类型**
 *
 * @分类 系统管理-菜单
 */
type ApiSystemMenuIdPatchRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/menu/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 更新菜单详情 的 **请求配置**
 *
 * @分类 系统管理-菜单
 */
const apiSystemMenuIdPatchRequestConfig: ApiSystemMenuIdPatchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/system/menu/{id}',
  method: Method.PATCH,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemMenuIdPatch',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 更新菜单详情 的 **请求函数**
 *
 * @分类 系统管理-菜单
 */
export const ApiSystemMenuIdPatch = /*#__PURE__*/ (
  requestData: ApiSystemMenuIdPatchRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemMenuIdPatchResponse>(prepare(apiSystemMenuIdPatchRequestConfig, requestData), ...args);
};

ApiSystemMenuIdPatch.requestConfig = apiSystemMenuIdPatchRequestConfig;

/**
 * 接口 删除菜单 的 **请求类型**
 *
 * @分类 系统管理-菜单
 */
export interface ApiSystemMenuIdDeleteRequest {
  id: string;
}

/**
 * 接口 删除菜单 的 **返回类型**
 *
 * @分类 系统管理-菜单
 */
export type ApiSystemMenuIdDeleteResponse = boolean;

/**
 * 接口 删除菜单 的 **请求配置的类型**
 *
 * @分类 系统管理-菜单
 */
type ApiSystemMenuIdDeleteRequestConfig = Readonly<
  RequestConfig<'http://127.0.0.1:50505/mock/0', '', '', '/api/system/menu/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 删除菜单 的 **请求配置**
 *
 * @分类 系统管理-菜单
 */
const apiSystemMenuIdDeleteRequestConfig: ApiSystemMenuIdDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/system/menu/{id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'ApiSystemMenuIdDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 删除菜单 的 **请求函数**
 *
 * @分类 系统管理-菜单
 */
export const ApiSystemMenuIdDelete = /*#__PURE__*/ (
  requestData: ApiSystemMenuIdDeleteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiSystemMenuIdDeleteResponse>(prepare(apiSystemMenuIdDeleteRequestConfig, requestData), ...args);
};

ApiSystemMenuIdDelete.requestConfig = apiSystemMenuIdDeleteRequestConfig;

/* prettier-ignore-end */
