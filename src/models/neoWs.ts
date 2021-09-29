export interface INeoWs {
    element_count: number
    links: {}
    near_earth_objects: {}
}

export interface NeoData {
    id: string
    name: string
}

export interface IListParams {
    start_date: string | undefined | null
    end_date: string | undefined | null
    api_key?: string
}
