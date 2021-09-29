import React from 'react'
import { Row, Col, Card } from 'antd'

import { NewWsProvider } from "./context"

import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

const Home: React.FC = () => {
    return (
      <NewWsProvider>
        <Row justify="center">
            <Col xl={8} lg={10} md={12} sm={24} >
                <Card title="List of the asteroid names from the NASA" className="mt-30">
                    <SearchForm />
                    <SearchResults />
                </Card>
            </Col>
        </Row>
        </NewWsProvider>
    )
}

export default Home
