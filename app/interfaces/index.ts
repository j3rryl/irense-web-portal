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

export interface Patient{
    id: number, 
    last_name: string, 
    first_name: string, 
    age: number, 
    phone:string, 
    email:string, 
    gender:string, 
    last_tested: Date, 
    created_at: Date, 
    updated_at: Date, 
    status:string
}

