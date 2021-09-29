import ApiService from 'utils/api'

import { NASA_URL, NASA_KEY } from 'config'
import { INeoWs, IListParams } from 'models/neoWs'

const API = new ApiService(NASA_URL)

export const getListNeoWs = (params: IListParams): Promise<INeoWs> => {
    params.api_key = NASA_KEY
    return API.get('/neo/rest/v1/feed', params)
}
