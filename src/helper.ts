'use server';

import { cookies } from "next/headers";
import { GetLocaleResponse } from "./definitions";


export async function getLocalePortfolio(): Promise<GetLocaleResponse> {
    const english = "🇺🇸";
    const spanish = "🇪🇸";
    const isLocale = cookies().get('NEXT_LOCALE');

    let locale = isLocale ? isLocale.value : 'en';
    let flag = locale === 'en' ? spanish : english; 
    const response : GetLocaleResponse = {
        flag,
        locale
    }
    return response;
}