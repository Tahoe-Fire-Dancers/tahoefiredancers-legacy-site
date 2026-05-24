import { client } from "./client.ts";

export async function fetchMuxVideo(ref) {
const query = `
   *[_type == "video" && video.asset._ref == $ref] {
    "playbackId": video.asset->playbackId, 
    description,
    title
  }
`;


const params = { ref: ref }; // Replace with the actual `_ref` value

const result = await client.fetch(query, params);

console.log("Result:", result);
}




// Fetch video by `_ref`
// export async function fetchMuxVideo(ref) {
//     const query = `
//       *[_type == "video" && video[].asset._ref == ${ref}] {
//         "video": video.asset->playbackId,
//         description,
//         title
//       }
//     `;

//     const params = { ref }; // Bind the `ref` parameter

//     console.log("Query Parameters:", params);

//     try {
//         // Execute the query with parameters
//         const result = await client.fetch(query);
//         console.log("Fetched Videos:", result);
//         return result[1];
//     } catch (error) {
//         console.error("Error fetching Mux video by ref:", error);
//         return null;
//     }
// }