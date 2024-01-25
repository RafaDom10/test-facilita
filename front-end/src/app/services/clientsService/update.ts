import { httpClient } from "../HttpClient"

export interface ListResponse {
  id: string
  name: string
  email: string
  phone: string
  coordinates: string
}

interface Payload {
  id: string
  name: string
  email: string
  phone: string
  coordinates: string
}

export async function update(payload: Payload) {
  const { id } = payload
  const { data } = await httpClient.put<ListResponse>(`/clients/${id}`, payload)
  return data
}
