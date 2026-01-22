import { api_client } from "./api/api";

const endpoint = "/account"

export async function getAccountsAsync() {
    const response = await api_client.get(endpoint); 
    return response;
}