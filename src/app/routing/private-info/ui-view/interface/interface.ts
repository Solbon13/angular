export interface formValue {
    key: string,
    value: string | number | boolean,
    required: boolean,
    title?: string,
    type?: string
    list?: any[],
}