import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

//... 

const client = createClient({
  projectId: "91gl6r32",
  dataset: "blog",
  apiVersion: "2024-12-31",
  useCdn: false
});



const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}


export default client;