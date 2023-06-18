import { ReactElement } from "react"

export interface loginCredentials{
    username:string,
    password:string,
    callbackUrl: string | null | undefined
}
export interface pageType{
    name: string,
    url: string,
    icon: ReactElement
}