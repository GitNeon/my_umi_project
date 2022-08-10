/**
 * @Author: fanx
 * @Date: 2022年08月08日 10:21
 * @Description: 请求通用封装umi-request,
 * 更详细的api文档: https://github.com/umijs/umi-request
 */
import { message, notification } from 'antd';
import type { RequestOptionsInit } from 'umi-request';
import request, { extend } from 'umi-request';

type mapCode = 200 | 400 | 500;

interface ApiPrefix {
  dev: string;
  sit: string;
  prod: string;
  uat: string;
}

interface DownloadType {
  url: string;
  fileName: string;
  params: any;
  options?: Record<string, any>;
}

let currentEnvironment: string = process.env.UMI_ENV || 'dev';

const codeMessage = {
  200: '请求服务器成功',
  400: '发出的请求有误,请检查数据格式',
  500: '服务器内部错误',
};

/**
 * 错误异常处理
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    let errorText = codeMessage[response.status as mapCode] || response.statusText;
    const { status, url } = response;
    response
      ?.clone()
      ?.json()
      ?.then((res) => {
        // 后端返回错误信息,就用后端传回的
        errorText = res.msg ? res.msg : errorText;
        notification.error({
          message: `请求错误 ${status}: ${url}`,
          description: errorText,
        });
      });
  } else if (!response) {
    notification.error({
      description: '请求失败，服务器无响应或者网络异常',
      message: '发生错误',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const http = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

const apiPreFix: ApiPrefix = {
  dev: 'http://localhost:3030/',
  sit: 'http://localhost:3031/',
  prod: 'http://localhost:3032/',
  uat: 'http://localhost:3033/',
};

/**
 * request拦截器, 携带token,以及根据环境,配置不同的请求前缀
 */
http.interceptors.request.use((url: string, options: RequestOptionsInit) => {
  // 哪些请求不需要带token,放入数组中
  let notCarryTokenArr: string[] = [];
  if (notCarryTokenArr.includes(url)) {
    return {
      url: `${apiPreFix[currentEnvironment as keyof typeof apiPreFix]}${url}`,
      options,
    };
  }
  // 给每个请求带上token
  let token = localStorage.getItem('token') || sessionStorage.getItem('token') || '';
  let headers = {
    Authorization: `Bearer ${token}`,
  };
  return {
    url: `${apiPreFix[currentEnvironment as keyof typeof apiPreFix]}${url}`,
    options: { ...options, interceptors: true, headers },
  };
});

export const get = async (url: string, parameter?: Record<string, unknown>): Promise<any> => {
  try {
    return await http(url, { method: 'get', params: parameter });
  } catch (error) {
    console.error(error);
  }
};

export const deletes = async (url: string, parameter?: Record<string, unknown>): Promise<any> => {
  try {
    return await http(url, { method: 'delete', params: parameter });
  } catch (error) {
    console.error(error);
  }
};

export const post = async (url: string, parameter?: Record<string, unknown>): Promise<any> => {
  try {
    return await http(url, { method: 'post', data: parameter });
  } catch (error) {
    console.error(error);
  }
};

export const put = async (url: string, parameter?: Record<string, unknown>): Promise<any> => {
  try {
    return await http(url, { method: 'put', data: parameter });
  } catch (error) {
    console.error(error);
  }
};

export const downloadFile = ({ url, fileName, params, options }: DownloadType) => {
  request<any>(url, {
    method: 'GET',
    responseType: 'blob',
    params: {
      ...params,
    },
    ...(options || {}),
  }).then((res: Blob) => {
    console.log(res);
    // 返回错误时需要处理json
    if (res?.type === 'application/json') {
      const reader = new FileReader();
      reader.readAsText(res, 'utf-8');
      reader.onload = () => {
        const response = JSON.parse(<string>reader.result);
        console.log(response);
        message.error(response?.message);
      };
      return;
    }
    const blob = new Blob([res]);
    const objectURL = URL.createObjectURL(blob);
    let btn = document.createElement('a');
    btn.download = fileName;
    btn.href = objectURL;
    btn.click();
    URL.revokeObjectURL(objectURL);
    // @ts-ignore
    btn = null;
  });
};
