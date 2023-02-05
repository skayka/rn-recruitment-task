export interface Fetcher {
  get: <ResponseType>(url: string) => Promise<ResponseType>;
  post?: <PayloadType, ResponseType>(endpoint: string, payload: PayloadType) => Promise<ResponseType>;
}
