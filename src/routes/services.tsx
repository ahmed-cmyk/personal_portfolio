import { createFileRoute } from '@tanstack/react-router'
import Heading from '~/components/Heading';

export const Route = createFileRoute('/services')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <section className="mt-8 px-4 max-w-4xl mx-auto">
            <Heading text="My Services" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 dark:text-stone-300">
                {/* Service 1 */}
                <div className="p-6 border border-stone-200 dark:border-stone-800 rounded-xl hover:border-stone-400 transition-colors">
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">Web Application Development</h3>
                    <p>
                        Building complete, custom web applications from scratch + adding new features to existing platforms. I handle everything from the user interface to the database.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="p-6 border border-stone-200 dark:border-stone-800 rounded-xl hover:border-stone-400 transition-colors">
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">Website Improvements & Fixes</h3>
                    <p>
                        Optimizating slow websites, fixing bugs, and modernizing design. I ensure your site runs smoothly and looks great on all devices.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="p-6 border border-stone-200 dark:border-stone-800 rounded-xl hover:border-stone-400 transition-colors">
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">Technical Consulting</h3>
                    <p>
                        Not sure what technology to use? I can help you choose the right tools for your project and plan a scalable architecture.
                    </p>
                </div>

                {/* Service 4 */}
                <div className="p-6 border border-stone-200 dark:border-stone-800 rounded-xl hover:border-stone-400 transition-colors">
                    <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">Maintenance & Support</h3>
                    <p>
                        Ongoing support to keep your software secure, up-to-date, and performing at its best.
                    </p>
                </div>
            </div>

            <div className="mt-16 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">Ready to Start a Project?</h2>
                <p className="text-lg text-stone-600 dark:text-stone-300 mb-8">
                    Whether you have a clear roadmap or just a rough idea, I'd love to hear about it.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="mailto:ikramahmed398@gmail.com"
                        className="btn-primary inline-block no-underline"
                    >
                        Email Me
                    </a>
                    <a
                        href="https://calendly.com/ikramahmed100398/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-block no-underline"
                    >
                        Schedule a Meeting
                    </a>
                </div>
            </div>
        </section>
    );
}
