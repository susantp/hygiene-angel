import TopNav from "@/components/TopNav";
import HeroBanner from "@/components/HeroBanner";
import content from "@/lib/content";

export const metadata = {
    title: 'Hygiene Angel – Trusted Cleaning Services in Sydney',
    description: 'Hygiene Angel offers professional hygiene-focused cleaning services in Sydney. Specializing in residential, commercial, NDIS, and Airbnb turnover cleaning.',
}
export default function Home() {
    const navigations = Object.keys(content['navigations'])
    const phone = content['business']['phone']
    return (
        <div className="flex flex-col min-h-screen">
            <header id="header" className="flex-col bg-slate-50 shadow-md">
                <TopNav navigations={ navigations}/>
                <HeroBanner phone={phone}/>
            </header>
            <main>
                <section id="services" className="px-12 lg:px-64 md:px-36 py-8">
                    <h2 className="text-4xl font-bold text-primary mb-6">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {content.navigations.services.map(service => (
                            <div key={service.id} className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-700">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="testimonials" className="px-12 lg:px-64 md:px-36 py-8 bg-gray-50">
                    <h2 className="text-4xl font-bold text-primary mb-6">Testimonials</h2>
                    <div className="space-y-6">
                        {content.navigations.testimonials.map((testimonial, index) => (
                            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                                <p className="text-gray-600 italic">{testimonial.review}</p>
                                <p className="mt-4 font-semibold">{testimonial.customer}, {testimonial.location}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="px-12 lg:px-64 md:px-36 py-8">
                    <h2 className="text-4xl font-bold text-primary mb-6">Contact Us</h2>
                    <p>{content.navigations.contact.call_to_action}</p>
                    <p>Working Hours: {content.navigations.contact.working_hours}</p>
                </section>
            </main>
            <footer></footer>
        </div>
    );
}