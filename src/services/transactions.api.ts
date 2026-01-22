import { api_client } from "./api/api";

const endpoint = "/transaction"

export async function getTransactionsAsync() {
    const response = await api_client.get(endpoint); 
    return response;
}