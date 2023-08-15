import { useQuery } from "@tanstack/react-query"
import { getRequest } from "./axiosClient"
import {urls} from './urls'

export const useGetHandler = (key) => {
    const response = useQuery({ queryKey: [key], queryFn: () => getRequest(urls.USERS)})
    return response
}
