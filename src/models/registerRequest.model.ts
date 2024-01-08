export type RegisterRequest = {
    username: string
    email: string
    password: string
}

export type ActivationCode = {
    email: string
    code: number | null
}
