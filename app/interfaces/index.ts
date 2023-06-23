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

export interface patientDetails{
    id: number, 
    lastName: string, 
    firstName: string, 
    age: number, 
    phone:string, 
    email:string, 
    gender:string, 
    lastTested: Date, 
    status:string
}