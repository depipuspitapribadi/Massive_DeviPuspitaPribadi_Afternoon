import React from 'react';

  const Section = () => {
  return (
      <div className='bg-hero-image w-full h-screen bg-center flex items-center px-10 pt-52'>
        <div className='text-center w-full pt-50'>
            <h1 className='text-8xl text-white font-extrabold out'>BLACK<b style={{ color: "#C93B76", marginTop:"50cm"}}>PINK</b></h1>
            <img src={"./blackpink.png"} class=" flex justify-center mr-3 " style={{ width:"35cm" , height:"17cm"}} alt="Flowbite Logo"/>
        </div>
     </div>
        
    );  
};

export default Section;