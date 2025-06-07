export type TBusiness = {
    name: string;
    phone: string;
    email: string;
    location: string;
    slogan: string;
}
export type TService = {
    id: string;
    title: string;
    description: string;
}
export type TTestimonial = {
    customer: string;
    location: string;
    review: string;
}
export type TContact = {
    call_to_action: string;
    working_hours: string;
}

export type TContent = {
    business: TBusiness;
    navigations: {
        services: TService[];
        testimonials: TTestimonial[];
        contact: TContact;
    }
}