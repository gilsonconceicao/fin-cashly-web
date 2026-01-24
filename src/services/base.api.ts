import { AxiosRequestConfig } from 'axios';
import { api_client } from './api/api';

export function baseApi<TResponse, TCreate = unknown, TUpdate = unknown>(resource: string) {
    
  async function getAll(config?: AxiosRequestConfig): Promise<TResponse[]> {
    const { data } = await api_client.get<TResponse[]>(resource, config);
    return data;
  }

  async function getById(id: string | number): Promise<TResponse> {
    const { data } = await api_client.get<TResponse>(`${resource}/${id}`);
    return data;
  }

  async function post(payload: TCreate): Promise<TResponse> {
    const { data } = await api_client.post<TResponse>(resource, payload);
    return data;
  }

  async function update(
    id: string | number,
    payload: TUpdate
  ): Promise<TResponse> {
    const { data } = await api_client.put<TResponse>(
      `${resource}/${id}`,
      payload
    );
    return data;
  }

  async function remove(id: string | number): Promise<void> {
    await api_client.delete(`${resource}/${id}`);
  }

  return {
    getAll,
    getById,
    post,
    update,
    remove,
  };
}
