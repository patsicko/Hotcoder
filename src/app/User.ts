export interface LoginData {
    email:string,
    password: string
}

export interface SignupData {
    firstName: string,
    lastName: string,
    phone:string,
    email: string,
    password: string
    
}

export interface LoginMessage {
    message: string
}

export interface Profile {
    id:number,
    firstName: string,
    lastName: string,
    phone:string,
    email: string,
    role: string
    
}


