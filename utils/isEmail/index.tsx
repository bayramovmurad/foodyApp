export function isEmail(email: string){
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

    if(!emailRegex.test(email)){
        return false
    }
    return true
}