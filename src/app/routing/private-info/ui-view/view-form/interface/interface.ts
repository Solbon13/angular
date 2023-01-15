export interface formValue {
    key: string,
    value: string | number | boolean | string[],
    required: boolean,
    disabled?: boolean,
    title?: string,
    type?: string
    list?: any[],
    listField?: string,
    listSelect?: any[],
    maxlength?: number,
}