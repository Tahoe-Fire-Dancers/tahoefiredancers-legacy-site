import { h } from "preact";

const footerLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" }
];

const socialLinks = {
    facebook: "https://www.facebook.com/tahoefiredancers",
    instagram: "https://instagram.com/tahoefiredancers?igshid=NGExMmI2YTkyZg=="
};

export default function Footer() {
    return (
        <footer class="bg-black bg-opacity-50">
            <div class="max-w-7xl px-8 py-12 mx-auto overflow-hidden">
                <nav class="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
                    {footerLinks.map((link) => (
                        <div class="px-5 py-2" key={link.href}>
                            <a href={link.href} class="text-base text-tblue hover:text-twhite focus:text-torange">
                                {link.title}
                            </a>
                        </div>
                    ))}
                </nav>
                <div class="flex justify-center mt-8 space-x-6">
                    <a href={socialLinks.facebook} class="text-torange hover:text-tteal">
                        <span class="sr-only">Facebook</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    {/* <a href={socialLinks.instagram} class="text-torange hover:text-tteal">
                        <span class="sr-only">Instagram</span>
                        {/* <svg class="w-6 h-6 text-torange" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> 
                        <svg class="w-6 h-6 fill-twhite" viewBox="0 0 24 24" aria-hidden="true">
                        
                            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06..." clip-rule="evenodd" />
                        </svg>
                    </a> */}
                    <a href={socialLinks.instagram} class="text-torange hover:text-tteal">
                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-torange">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                               
                                <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                    </span>
                        
                    </a>





                </div>
               
                <p class="mt-2 text-base text-center text-twhite">
                &copy; {new Date().getFullYear()}   Made with ❤️ by <a href="https://www.lakewebdesigns.com" class="hover:underline hover:text-tteal focus:text-torange">
                        <span class="text-sm font-black uppercase">Lake Web Designs</span> 
                    </a>
                </p>
            </div>
        </footer>
    );
}

