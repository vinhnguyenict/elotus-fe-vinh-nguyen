import React, { useContext } from 'react'
import _map from 'lodash/map'
import { Skeleton, List, Typography, Alert } from 'antd'

import { useNeoWs } from 'hooks/useNeoWs'
import { NeoData } from 'models/neoWs'
import { NeoWsContext } from '../../context'

const { Title } = Typography

const SearchResults: React.FC = () => {
    const { params } = useContext(NeoWsContext)
    const { data, isLoading, error } = useNeoWs(params)

    if (error) {
      <Alert message={error} type="error" />
    }

    if (isLoading) {
        return <Skeleton />
    }

    return (
        <React.Fragment>
            {_map(data?.near_earth_objects, (group, key) => {
                return (
                    <List
                        className="mt-30"
                        key={key}
                        size="small"
                        header={<Title level={5}>{key}</Title>}
                        bordered
                        dataSource={group}
                        renderItem={(item: NeoData) => (
                            <List.Item>{item.name}</List.Item>
                        )}
                    />
                )
            })}
        </React.Fragment>
    )
}

export default SearchResults
