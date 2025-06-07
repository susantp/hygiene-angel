"use client"

export default function HeroBanner({phone}: { phone: string }) {
    return (
        <div className="flex items-start flex-col gap-y-4 px-12 lg:px-72 md:px-36 py-8">
            <h1 className="text-8xl font-bold text-start py-4 text-primary">Professional Cleaning Services</h1>
            <p className="text-start text-gray-600 text-4xl">Offering Top-quality cleaning for homes, businesses, NDIS
                participants, and Airbnb properties</p>
            <div className="bg-slate-500 w-44 h-12 flex items-center justify-center rounded-md">
                <a href={`tel:${phone}`} className="text-2xl text-white">Call Now</a>
            </div>
        </div>
    )
}