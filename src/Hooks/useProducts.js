import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function useProducts(){
  return useQuery({
     queryKey: ['products'],
     queryFn: () => axios.get('https://fakestoreapi.com/products'),
     select: (response) => response.data,
     staleTime: 20*1000
  })
}
