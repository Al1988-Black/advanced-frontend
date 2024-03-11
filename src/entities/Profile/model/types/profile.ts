import { City, Currency } from 'shared/const/common';

export interface Profile {
    firstname: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: City;
    city: string;
    username: string;
    avatart: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
