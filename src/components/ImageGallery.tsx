import { useState } from "preact/hooks";

export default function ImageGallery({ images }: { images: { images: { src: string; categories?: { title: string }[] }[] }[] }) {
    if (!images || images.length === 0 || !images[0].images) {
        return <p>No images available.</p>;
    }

    const getImages = images[0].images;
    const categories = ["all", ...new Set(getImages.flatMap(image => image.categories?.title))];

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredImages = selectedCategory === "all"
        ? getImages
        : getImages.filter(image => image.categories?.title === selectedCategory || !image.categories);

    return (
        <div class="w-full text-center p-4">
            
            {/* Category Filter */}
            {/* <div class="tabs tabs-boxed bg-transparent flex justify-center flex-wrap gap-2 mb-6">
                {categories.map(category => (
                    <button 
                        key={category} 
                        onClick={() => setSelectedCategory(category)} 
                        class={`tab ${selectedCategory === category ? 'tab-active bg-torange text-white hover:bg-torange/80' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div> */}

            <div class="tabs tabs-boxed bg-transparent flex justify-center flex-wrap gap-2 mb-6">
                {categories.map(category => (
                    <button 
                        key={category} 
                        onClick={() => setSelectedCategory(category)} 
                        class={`tab bg-white border border-twhite text-black 
                            ${selectedCategory === category ? '!bg-torange !text-white !border-none hover:!bg-torange/80' : 'hover:bg-blue-200 hover:border-blue-200'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>


            {/* Image Grid */}
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image, index) => (
                    <div key={index} class="card shadow-md cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                        <figure>
                            <img 
                                class="w-full aspect-square object-cover rounded-lg transition-transform transform hover:scale-105"
                                src={image.src} 
                                alt={image.categories?.title || "Gallery image"}  
                            />
                        </figure>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
                    <div class="relative max-w-3xl w-full">
                        {/* Close Button */}
                        <button 
                            class="absolute top-4 right-4 bg-white text-black px-3 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>

                        {/* Enlarged Image */}
                        <img src={selectedImage} class="w-full max-h-[90vh] object-contain rounded-lg shadow-lg" alt="Enlarged" />
                    </div>
                </div>
            )}
        </div>
    );
}