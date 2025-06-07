import {TContent} from "@/components";


const content: TContent = {
    business: {
        name: "Hygiene Angel",
        phone: "+61491129735",
        email: "info@hygieneangel.com.au",
        location: "Cowper Street, PARRAMATTA NSW 2150 AU",
        slogan: "Where Cleanliness Meets Care"
    },
    navigations: {
        services: [
            {
                id: "residential_cleaning",
                title: "Residential Cleaning",
                description: "Comprehensive home cleaning focused on hygiene, safety, and comfort."
            },
            {
                id: "commercial_cleaning",
                title: "Commercial Cleaning",
                description: "Professional cleaning solutions tailored for offices, retail spaces, and businesses."
            },
            {
                id: "ndis_cleaning",
                title: "NDIS Approved Cleaning",
                description: "Sensitive, respectful, and efficient cleaning services approved for NDIS participants."
            },
            {
                id: "airbnb_cleaning",
                title: "Airbnb Turnover Cleaning",
                description: "Reliable and timely cleaning services specifically for Airbnb and short-term rentals."
            }
        ],
        testimonials: [
            {
                customer: "Emily S.",
                location: "Parramatta",
                review: "Hygiene Angel provides exceptional service! My home has never felt cleaner or healthier."
            },
            {
                customer: "Mark R.",
                location: "Sydney CBD",
                review: "Professional, thorough, and always reliable. Highly recommend Hygiene Angel."
            }
        ],
        contact: {
            call_to_action: "Call 491-129-735 now for a free consultation and booking!",
            working_hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat-Sun: 9:00 AM - 4:00 PM"
        }
    }
}
export default content