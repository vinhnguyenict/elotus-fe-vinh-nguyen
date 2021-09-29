import { notification } from 'antd'
import { useEffect, useState } from 'react'
import { getListNeoWs } from 'services/neoWs'
import { IListParams, INeoWs } from 'models/neoWs'

export const useNeoWs = (params: IListParams) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState<INeoWs>()

    useEffect(() => {
        if (params.start_date && params.end_date) {
            setIsLoading(true)
            setError(undefined)
            getListNeoWs(params)
                .then((result) => {
                    setIsLoading(false)
                    setData(result)
                })
                .catch((error) => {
                    const message = error?.error_message || error.message
                    setData(undefined)
                    setError(message)
                    notification['error']({
                        message: 'Error',
                        description: message,
                    })
                })
        }
    }, [params])

    return {
        isLoading,
        error,
        data,
    }
}
