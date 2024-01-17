
export function toArr(data: object | string | number | undefined): Array<any>{
    let convertedData = Object.entries(data)
    return convertedData
}