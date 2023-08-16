import { useQuery } from "@tanstack/react-query"
import { getRequest } from "./axiosClient"

export const useGetHandler = (key, url) => {
    return useQuery([key], () => getRequest(url))
}

