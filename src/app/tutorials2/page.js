import React from 'react'
import Cards from '../components/cards';


const Tutorials = () => {
  return (
  
<section className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">popular Tutorials</h1>
  <div className="h-1 w-20 bg-indigo-500 rounded mx-auto" />


    <div className="flex flex-wrap -m-4 mt-10">
    <Cards
        category="Technology"
        title="Basic web development"
        description="Master modern web development by learning to build responsive websites and powerful web applications using the latest tools and technologies"
        imageUrl="/web.jpg"
        likes="1.5K"
        comments="10"
      />
      <Cards
        category="Tech:programming language"
        title="Python Essentials: From Basics to Advanced"
        description="Learn Python programming to automate tasks, analyze data, and create versatile applications with ease."
        imageUrl="/python.webp"
        likes="800"
        comments="25"
      />
      <Cards
        category="programming languages"
        title="Master JavaScript: Unlock the Power of Web Development"
        description="Tips for maintaining a healthy and balanced life"
        imageUrl="./javascript.png"
        likes="2K"
        comments="18"
      />
      <Cards
        category="Programming languages"
        title="Master JavaScript: Unlock the Power of Web Development"
        description="Tips for maintaining a healthy and balanced life"
        imageUrl="./javascript.png"
        likes="2K"
        comments="18"
      />
      
      <Cards
        category="Frontend Development"
        title=" Tailwind CSS Mastery"
        description=" Learn how to build responsive and highly customizable user interfaces with Tailwind CSS, the utility-first CSS framework."
        imageUrl="./tailwind.jpeg"
        likes="2K"
        comments="18"
      />
      <Cards
        category="Marketing"
        title="Digital Marketing Essentials"
        description="Master the art of digital marketing, from SEO to social media strategies, and drive business growth with data-driven techniques."
        imageUrl="./degi.jpg"
        likes="2K"
        comments="18"
      />

      
    </div>
  </div>
</section>


  )
}

export default Tutorials;
