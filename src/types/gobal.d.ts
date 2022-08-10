import type { ResInterface } from '../utils/request';

declare module 'axios' {
  export interface AxiosInstance {
    request<T = any, R = ResInterface<T>>(
      config: AxiosRequestConfig
    ): Promise<R>;
    get<T = any, R = ResInterface<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>;
    delete<T = any, R = ResInterface<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>;
    head<T = any, R = ResInterface<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>;
    options<T = any, R = ResInterface<T>>(
      url: string,
      config?: AxiosRequestConfig
    ): Promise<R>;
    post<T = any, R = ResInterface<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>;
    put<T = any, R = ResInterface<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>;
    patch<T = any, R = ResInterface<T>>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<R>;
  }
}
