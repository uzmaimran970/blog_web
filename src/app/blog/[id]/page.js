import client from '@/app/sanity/client';
import React from 'react'
import {PortableText} from '@portabletext/react'




const BlogContent = async ({ params }) => {
  const { id } = params;

  try {
    const decodedId = decodeURIComponent(id);
    console.log("Decoded ID:", decodedId);

    // Fetch the blog data from Sanity
    const blogData = await client.fetch(
      `*[_type == "blogs" && slug.current == $slug]{title, blogdescription}`,
      { slug: decodedId }
    );

    if (!blogData || blogData.length === 0) {
      return <h1>Blog not found</h1>;
    }

    const blog = blogData[0];

    return (
      <div>
        <h1>{blog.title}</h1>
        {/* Render Portable Text content */}
        <PortableText value={blog.blogdescription} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return <h1>Failed to load the blog</h1>;
  }
};

export default BlogContent;
