import { useState } from 'react'
import './App.css'
import img0 from './images/image0.png'
import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.png'
import img4 from './images/image4.png'
import img5 from './images/image5.png'
import img6 from './images/image6.png'
import img7 from './images/image7.png'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='flex justify-between items-center h-20 w-full px-10'>
        <div className='font-gerbil text-[28px] w-[10%]' >
          Elementum
        </div>
        <div className='flex justify-between items-center gap-10'>
          <a href="">Home</a>
          <a href="">Studio</a>
          <a href="">Services</a>
          <a href="">Contact</a>
          <a href="">FAQ's</a>
        </div>
        <div className='w-[10%] flex justify-end '>__</div>
      </nav>
      <section className='hero w-full h-screen flex flex-col justify-center items-center'>
        <div className='w-[100%] h-full flex flex-col justify-center items-center'>
          <h1 className="font-gerbil w-[70%] font-normal text-[80px] leading-[126px] tracking-normal text-center [leading-trim:none]">The thinkers and doers were changing the status quo with</h1>
          <h3 className='font-satoshi w-[40%] text-center'>We are a team of strategists, designers communicators, researchers.Together, we belive that progress only hghappens when you refuse to play thing safe.</h3>
        </div>
        <div className='w-[100%] h-full flex flex-row-reverse justify-center items-center overflow-y-auto '>
          <img alt="okay" src={img0} className='h-[150px] w-[150px]'/>
          <img alt="okay" src={img1} className='h-[150px] w-[150px]'/>
          <img alt="okay" src={img2} className='h-[150px] w-[150px]'/>
          <img alt="okay" src={img3} className='h-[150px] w-[150px]'/>
          <img alt="okay" src={img4} className='h-[150px] w-[150px]'/>
          <img alt="okay" src={img5} className='h-[150px] w-[150px]'/>
          <img alt="okay" src={img6} className='h-[150px] w-[150px]'/>
          <img alt="okay" src={img7} className='h-[150px] w-[150px]'/>

        </div>
        {/* ADD EFFECTS SVG HERE */}
        <div></div>
      </section>
      {/* BODY */}
      <section className='hero w-full h-screen flex justify-center items-center'>
        <div className='w-[60%] h-full flex flex-col justify-center items-start pl-[100px]'>
          <p className="font-gerbil w-[80%] font-normal text-[50px] leading-[100px] tracking-normal  [leading-trim:none]">Tomorrow should be better than today</p>
          <p className=' font-satoshi w-[60%]'>We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.</p>
          <div className='flex'>
            <p>Read more</p>
            <svg width="145" height="8" viewBox="0 0 145 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='flex justify-center item-center'>
              <path d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z" fill="black"/>
            </svg>
          </div>
        </div>
        <div className='w-[40%] h-full flex justify-center items-center'></div>
      </section>
    </>
  )
}

export default App
