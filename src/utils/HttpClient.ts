import axios, { AxiosError } from 'axios';
import { ElMessage } from 'element-plus';
import type { RequestFunctionParams } from 'yapi-to-typescript';

type ApiModelType = 'local' | 'test' | 'prod' | 'mock';
// 开发环境才使用apiModel
const apiModel = ((import.meta.env.DEV && import.meta.env.VITE_API_MODEL) ||
  'local') as ApiModelType;

const yttHttpClientInstance = axios.create({
  // baseURL: apiModel === 'mock' ? '' : '/api',
  timeout: 10000,
});
// 请求拦截器
yttHttpClientInstance.interceptors.request.use(
  (config) => {
    const cfg = config;
    if (cfg.headers) cfg.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return cfg;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
yttHttpClientInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error: AxiosError) => {
    const { response } = error;
    switch (response?.status) {
      case 401: // 登录失效 等异常请求
        ElMessage.error({
          message: `登录失效，请重新登录`,
          duration: 2000,
          onClose: () => {
            window.location.href = '/login';
          },
        });
        break;
      case 400: // 验证失败
        // 走默认的 return，不提示
        break;
      default:
        ElMessage.error(
          error.response?.data?.message || `${error.response?.status} 服务出错了，请稍后重试`,
        );
    }
    return Promise.reject(response?.data);
  },
);

export default async function HttpClient<TResponseData>(
  payload: RequestFunctionParams,
): Promise<TResponseData> {
  const { path: url, method, requestHeaders: headers, data } = payload;
  const { baseURL } = yttHttpClientInstance.defaults;
  // api 模式映射baseUrl地址,devUrl和prodUrl在yapi上配置
  const apiModelMapBaseUrl = {
    local: '',
    test: 'devUrl',
    prod: 'prodUrl',
    mock: 'mockUrl',
  };
  const payloadField = (apiModelMapBaseUrl[apiModel] || '') as keyof RequestFunctionParams;
  const location = payload[payloadField] || '';
  return yttHttpClientInstance.request({
    baseURL: `${location || ''}${baseURL || ''}`,
    url,
    method,
    headers,
    data,
  });
}
