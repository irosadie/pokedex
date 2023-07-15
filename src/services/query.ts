import axios from './interceptor'

type MutateDataProps = {
  url?: string,
  payload?: object,
}

const queryData = async<T>({ url='graphql/v1beta',  payload = {} }: MutateDataProps) => {
  return axios<T>({
    url,
    method: 'POST',
    data: JSON.stringify(payload)
  })
}
  
export default queryData
