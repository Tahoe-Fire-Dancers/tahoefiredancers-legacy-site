import { h } from "preact";

export default function BookButton() {
    const bookingPage = () => {
       // console.log("We are supposed to be going to new page", window.location.href);
        window.location.href = "/book-us";
    };

    return (
        <div class="mx-auto py-6">
            <button 
                type="button" 
                onClick={bookingPage} 
                class="text-white bg-torange hover:bg-tblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
            >
                Book Us
            </button>
        </div>
    );
}
