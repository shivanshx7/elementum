
import './App.css'
import img0 from './images/image0.png'
import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.png'
import img4 from './images/image4.png'
import img5 from './images/image5.png'
import img6 from './images/image6.png'
import img7 from './images/image7.png'
import bodyimg from './images/body_image.png'
import bodyimg2 from './images/body_image2.png'
import {easeIn, easeInOut, motion} from 'motion/react'
import { useScroll, useTransform } from "framer-motion"; 
import { useState,useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
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
      <section className='hero  w-full h-screen flex flex-col justify-center items-center'>
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

        {/* Purple melon */}
        <motion.div
          initial={{opacity: 0, x: 100,rotateZ:260}}
          animate={{opacity: 1, x: 0,rotateZ:0}}
          transition={{ease:easeInOut,duration:1}}
          className='absolute top-[200px] right-[100px] '
        >
          <svg width="117" height="146" viewBox="0 0 117 146" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M77.8783 -4.93067e-06C86.7352 5.11355 94.4983 11.9216 100.724 20.0353C106.95 28.149 111.517 37.4095 114.164 47.2882C116.811 57.1668 117.486 67.4701 116.151 77.6097C114.816 87.7494 111.497 97.5268 106.384 106.384C101.27 115.241 94.4622 123.004 86.3484 129.23C78.2347 135.455 68.9742 140.022 59.0955 142.669C49.2169 145.316 38.9136 145.992 28.774 144.657C18.6344 143.322 8.85694 140.003 -7.20974e-06 134.889L38.9391 67.4446L77.8783 -4.93067e-06Z" fill="#934CEC"/>
          </svg>
        </motion.div>

        {/* zipzap 1 */}
        <div className='absolute top-[170px] right-[400px] -z-1'>
          <svg width="595" height="56" viewBox="0 0 595 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
            initial={{pathLength:0}}
            animate={{pathLength:1}}
            transition={{ease: easeIn,duration:1}} 
            d="M72.1335 3H538.634L0.133545 27H594.134L293.134 53" stroke="#FFC250" stroke-width="6"/>
          </svg>
        </div>

        {/* pink */}  
        <motion.div 
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{ease:easeInOut, delay:1,duration:1}}
          className='absolute top-[222px] right-[180px] -z-1 opactity-0'
        >
          <svg width="320" height="100" viewBox="0 0 405 137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="130" rx="68.5" fill="#FFC2EA"/>
          </svg>
        </motion.div>

        {/* green */}
        <motion.div
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{ease:easeInOut, delay:1,duration:1}}
          className='absolute top-[340px] left-[485px] -z-1 opactity-0'
        >
          <svg width="350" height="109" viewBox="0 0 456 109" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="109" rx="54.5" fill="#D7EEDD"/>
          </svg>

        </motion.div>
      </section>

      

      {/* BODY */}
      <section id='BODY' className='relative'>
      <section className='hero w-full h-screen flex justify-center items-center'>
        <div className='w-[60%] h-full flex flex-col justify-center items-start pl-[100px]'>
          <p className="font-gerbil w-[80%] font-normal text-[50px] leading-[80px] tracking-normal  [leading-trim:none]">Tomorrow should be better than today</p>
          <p className='text-[18px] font-satoshi w-[60%]'>We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.</p>
          <div className='h-[80px] w-[277px] flex justify-between items-center'>
            <p className=''>Read more</p>
            <svg width="145" height="8" viewBox="0 0 145 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "15px"}}>
              <path d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z" fill="black"/>
            </svg>
          </div>
        </div>
        <div className='w-[40%] h-full flex justify-center items-center relative right-[50px]'>
          <img src={bodyimg}></img>
        </div>
      </section>
      {/* SVG */}
      <div>
        {/* Red circle */}
        <motion.div
          className='absolute top-[-100px] left-[370px]'
        >
          <svg width="766" height="766" viewBox="0 0 766 766" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2_16)">
            <circle cx="383" cy="383" r="83" fill="#FF2020"/>
            </g>
            <defs>
            <filter id="filter0_f_2_16" x="0" y="0" width="766" height="766" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_2_16"/>
            </filter>
            </defs>
          </svg>
        </motion.div>

        {/* zigzag 2  */}
        <motion.div className='absolute top-[325px] left-[100px]'>
          <svg width="372" height="33" viewBox="0 0 372 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
            initial={{pathLength:0}}
            whileInView={{pathLength:1}}
            transition={{ease: easeIn,duration:1}} 
            viewport={{ once: true, amount: 0.5 }}
            d="M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5" stroke="#FFC250" stroke-width="3"/>
          </svg>

        </motion.div>

        {/* ribbon */}
        <div ref={containerRef} 
          className='absolute top-[700px] left-[30px] -z-2'
        >
          <svg   width="1483" height="654" viewBox="0 0 1483 654" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_9)">
            <motion.path
              style={{ pathLength }}
            d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" stroke="#FF6D6D" stroke-width="5"/>
            </g>
            <defs>
            <filter id="filter0_d_2_9" x="0" y="0" width="1502.99" height="653.604" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="16"/>
            <feGaussianBlur stdDeviation="6"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_9"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_9" result="shape"/>
            </filter>
            </defs>
          </svg>

        </div>

      </div>
      <section className='hero w-full h-screen flex justify-center items-center'>
        <div className='w-[40%] h-full flex justify-center items-center relative left-[50px] bottom-[50px]'>
          <img src={bodyimg2}></img>
        </div>
        <div className='w-[60%] h-full flex flex-col justify-center items-start pl-[100px]'>
          <p className="font-gerbil w-[80%] font-normal text-[50px] leading-[80px] tracking-normal  [leading-trim:none]">See how we can help you progress</p>
          <p className='text-[18px] font-satoshi w-[60%]'>We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.</p>
          <div className='h-[80px] w-[277px] flex justify-between items-center'>
            <p className=''>Read more</p>
            <svg width="145" height="8" viewBox="0 0 145 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "15px"}}>
              <path d="M144.354 4.03556C144.549 3.8403 144.549 3.52372 144.354 3.32845L141.172 0.146473C140.976 -0.0487893 140.66 -0.0487893 140.464 0.146473C140.269 0.341735 140.269 0.658318 140.464 0.85358L143.293 3.68201L140.464 6.51043C140.269 6.7057 140.269 7.02228 140.464 7.21754C140.66 7.4128 140.976 7.4128 141.172 7.21754L144.354 4.03556ZM0 3.68201V4.18201H144V3.68201V3.18201H0V3.68201Z" fill="black"/>
            </svg>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className='hero w-full h-screen flex justify-center items-center'>
        <div className='w-[80%] m-auto flex flex-col justify-center items-start'>
          <h1 className="font-gerbil w-[52%] font-normal text-[70px] leading-[80px] tracking-normal mb-[80px] [leading-trim:none]">What we can offer you</h1>
          <div className='w-[100%] m-auto flex justify-between items-center h-[20%] border-y border-black-200 py-[24px]'>
            <p className='font-satoshi text-[18px] w-[17%]'>Office of multiple interest content</p>
            <p className='font-gerbil text-[30px] w-[50%]'>Colaborative & partnership</p>
            
            <svg width="82" height="15" viewBox="0 0 82 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "15px"}}>
              <path d="M81.7071 8.07089C82.0976 7.68036 82.0976 7.0472 81.7071 6.65667L75.3431 0.29271C74.9526 -0.0978144 74.3195 -0.0978145 73.9289 0.29271C73.5384 0.683234 73.5384 1.3164 73.9289 1.70692L79.5858 7.36378L73.9289 13.0206C73.5384 13.4112 73.5384 14.0443 73.9289 14.4348C74.3195 14.8254 74.9526 14.8254 75.3431 14.4348L81.7071 8.07089ZM0 7.36377L-6.9424e-08 8.36377L81 8.36378L81 7.36378L81 6.36378L6.9424e-08 6.36377L0 7.36377Z" fill="black"/>
            </svg>

          </div>
          <div className='w-[100%] m-auto flex justify-between items-center h-[20%] border-b border-black-200 py-[24px]'>
            <p className='font-satoshi text-[18px] w-[20%]'>The hanger US Air force digital experimental</p>
            <p className='font-gerbil text-[30px] w-[50%]'>We talk about our weight</p>
            
            <svg width="82" height="15" viewBox="0 0 82 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "15px"}}>
              <path d="M81.7071 8.07089C82.0976 7.68036 82.0976 7.0472 81.7071 6.65667L75.3431 0.29271C74.9526 -0.0978144 74.3195 -0.0978145 73.9289 0.29271C73.5384 0.683234 73.5384 1.3164 73.9289 1.70692L79.5858 7.36378L73.9289 13.0206C73.5384 13.4112 73.5384 14.0443 73.9289 14.4348C74.3195 14.8254 74.9526 14.8254 75.3431 14.4348L81.7071 8.07089ZM0 7.36377L-6.9424e-08 8.36377L81 8.36378L81 7.36378L81 6.36378L6.9424e-08 6.36377L0 7.36377Z" fill="black"/>
            </svg>

          </div>
          <div className='w-[100%] m-auto flex justify-between items-center h-[20%] border-b border-black-200 py-[24px]'>
            <p className='font-satoshi text-[18px] w-[20%]'>Delta faucet content, social, digital</p>
            <p className='font-gerbil text-[30px] w-[50%]'>Piloting digital confidence</p>
            
            <svg width="82" height="15" viewBox="0 0 82 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: "15px"}}>
              <path d="M81.7071 8.07089C82.0976 7.68036 82.0976 7.0472 81.7071 6.65667L75.3431 0.29271C74.9526 -0.0978144 74.3195 -0.0978145 73.9289 0.29271C73.5384 0.683234 73.5384 1.3164 73.9289 1.70692L79.5858 7.36378L73.9289 13.0206C73.5384 13.4112 73.5384 14.0443 73.9289 14.4348C74.3195 14.8254 74.9526 14.8254 75.3431 14.4348L81.7071 8.07089ZM0 7.36377L-6.9424e-08 8.36377L81 8.36378L81 7.36378L81 6.36378L6.9424e-08 6.36377L0 7.36377Z" fill="black"/>
            </svg>

          </div>
        </div>
      </section>
      </section>
      {/* Testmonial */}
      <section className='hero w-full h-screen flex justify-center items-center'>
        <div className='m-auto flex justify-between items-center w-full h-full'>
          <div className='h-full w-[30%] flex flex-col justify-center items-center '>
            <img src={img0} alt='00' className='h-[150px] w-[150px]'></img>
            <img src={img2} alt='02' className='h-[150px] w-[150px]'></img>
            <img src={img4} alt='04' className='h-[150px] w-[150px]'></img>


          </div>
          <div className='h-full w-[50%] flex flex-col justify-center items-center'>
            <h1 className='font-gerbil text-[30px] w-[70%] text-center mb-[20px]'>What our customer says about us</h1>
            <div className='bg-green-100 h-[30%] w-[100%] rounded-xl'></div>
            <div className='h-[5%] w-[100%]'></div>
          </div>
          <div className='h-full w-[30%] flex flex-col justify-center items-center '>
            <img src={img1} alt='01' className='h-[150px] w-[150px]'></img>
            <img src={img3} alt='03' className='h-[150px] w-[150px]'></img>
            <img src={img5} alt='05' className='h-[150px] w-[150px]'></img>


          </div>
        </div>
      </section>
      <section className='h-screen bg-green-100 flex justify-center items-center w-[100%]'>
        <div className='m-auto w-[80%] h-[80%] flex flex-col justify-around items-center gap-[50px]'>
          <div className='flex flex-col w-full justify-center items-center h-[60%] '>
            <p className="font-gerbil text-[80px] text-center w-[60%] ">Subscribe to our Newsletter</p>
            <div className='h-[20%] flex flex-col justify-between items-center'>
              <p className='font-satoshi'>To make your stay special and even more memorable</p>
              <div className='flex justify-center items-center'><button className=''>Subscribe</button></div>
            </div>
          </div>
          <div className='flex w-full border-t border-black-200 '>
            <div className='w-[386px] h-[300px]  flex flex-col justify-center items-start'>
              <div className='font-gerbil text-[20px] text-start'>Company</div>
              <div className='font-satoshi text-[16px] text-start flex flex-col justify-around items-start h-[60%]'>
                <div>Home</div>
                <div>Services</div>
                <div>Testimonials</div>
                <div>Contact</div>
              </div>
            </div>

            <div className='w-[386px] h-[300px]  flex flex-col justify-center items-start'>
              <div className='font-gerbil text-[20px] text-start'>Company</div>
              <div className='font-satoshi text-[16px] text-start flex flex-col justify-around items-start h-[60%]'>
                <div>Home</div>
                <div>Services</div>
                <div>Testimonials</div>
                <div>Contact</div>
              </div>
            </div>

            <div className='w-[386px] h-[300px]  flex flex-col justify-center items-start'>
              <div className='font-gerbil text-[20px] text-start'>Company</div>
              <div className='font-satoshi text-[16px] text-start flex flex-col justify-around items-start h-[60%]'>
                <div>Home</div>
                <div>Services</div>
                <div>Testimonials</div>
                <div>Contact</div>
              </div>
            </div>

            <div className='w-[386px] h-[300px]  flex flex-col justify-center items-start'>
              <div className='font-gerbil text-[20px] text-start'>Company</div>
              <div className='font-satoshi text-[16px] text-start flex flex-col justify-around items-start h-[60%]'>
                <div>Home</div>
                <div>Services</div>
                <div>Testimonials</div>
                <div>Contact</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default App
