import { api_client } from "./api/api";

const endpoint = "/goals"

export async function getGoalsAsync() {
    const response = await api_client.get(endpoint); 
    return response;
}