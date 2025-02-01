import { StaticImport } from "next/dist/shared/lib/get-img-props";
export interface Testimonial  {
    id : number;
    name: string;
    role : string;
    content: string;
    avatar?: string | StaticImport | undefined;
}

export interface OurCustomers {
    name: string;
    logo: StaticImport
}