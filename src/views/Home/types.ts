export interface NeoContextApi {
    params: FilterState
    setParams: (params: FilterState) => void
}

export interface FilterState {
    start_date: string | undefined | null
    end_date: string | undefined | null
}
