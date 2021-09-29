import React, { createContext, useState } from 'react'

import { NeoContextApi, FilterState } from './types'

const initialState: FilterState = {
    start_date: undefined,
    end_date: undefined,
}

export const NeoWsContext = createContext<NeoContextApi>({
    params: initialState,
    setParams: ()=> {}
})


export const NewWsProvider: React.FC = ({ children }) => {
    const [params, setParams] = useState<FilterState>(initialState);

    return <NeoWsContext.Provider value={{params, setParams}}>{children}</NeoWsContext.Provider>
}

