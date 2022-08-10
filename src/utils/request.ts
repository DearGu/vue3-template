import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

export interface ResInterface<T = any> {
  code: number;
  data: T;
  [key: string]: any;
}

const service = axios.create({
  timeout: 20000,
  headers: {},
});
// 请求拦截器
service.interceptors.request.use(
  (conf) => conf,
  // eslint-disable-next-line arrow-body-style
  (error) => {
    return Promise.resolve(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const msg = '系统异常，请联系管理员';

    console.log(error);
    return Promise.resolve({ msg, data: { msg }, code: 500 });
  }
);

/**
 * 请求方法
 * @param {Object} config 参数
 * @param {String} config.url 请求地址
 * @param {Object} config.data 请求参数
 * @param {String} config.method 请求方法
 * @param {Object} config.headers 请求头
 */
const request = <T = any>(
  config: AxiosRequestConfig
): Promise<ResInterface<T>> => {
  const method = config.method || 'get';
  const params: AxiosRequestConfig = {
    url: config.url,
    method,
  };

  // 处理参数
  if (method === 'get') {
    params.params = config.data;
  } else {
    params.data = config.data;
  }

  // 处理headers
  if (config.headers) {
    params.headers = config.headers;
  }

  return service.request<T>(params);
};

export default request;
