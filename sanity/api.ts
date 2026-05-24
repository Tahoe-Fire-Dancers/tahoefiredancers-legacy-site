import { client } from "./client";

export async function getPages() {
    const pages = await client.fetch(
        `*[_type == "pages"]{
        categories[]->{title}, 
        testimonials[]->{title,description}, 
        date, 
        slug, 
        title, 
        featured_image, 
       hero_slider,
        left_image, 
        right_image, 
        logo_about,  
        sidebar,
        "picture_gallery": picture_gallery[],
        body
    }`,
    );
    return pages;
  }

  export async function getHeroImages() {
    const data = await client.fetch(`
        *[_type == "pages" && defined(hero_slider.images)]{
            hero_slider
        }
    `);

    // Extract images into a flat array
    return data.flatMap(page => page.hero_slider.map(image => ({
        url: image.asset.url,
        alt: image.altText || "Hero image"
    })));
}


export async function getPhotoGallery() {
    const photos = await client.fetch(`
        *[_type == "picture_gallery"]{_id, _createdAt,display,images[]{"src":asset->url,alt,categories->{title}}}
    `);
 return photos;
}
