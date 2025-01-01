import React from 'react'
import Cardss from '../components/cardss';
import client from '../sanity/client';



const Tutorials = async () => {
  const res= await client.fetch(`*[_type == "tutorials"]`)
console.log(res)

  
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">popular Tutorials</h1>
  <div className="h-1 w-20 bg-[#2e86c1] hover:bg-[#1a5276]  rounded mx-auto" />
    <div className="flex flex-wrap -m-4">
      {
        res.map(val=>{
          return(
            <Cardss views={val.views} comments={val.comments} description={val.description} title={val.title} catogary={val.catogary} img={val.image}/>

          )
        })
      }
    

        


    </div>
  </div>
</section>

    
  )
}

export default Tutorials;
