export interface Address {
    line_1: string,
    line_2: string | null,
    city: string,
    region: string,
    postal: string,
}

export interface QuoteInfo {
    firstName: string,
    lastName: string,
    address: Address
}