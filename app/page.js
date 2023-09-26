'use client'
import { useInView ,motion } from "framer-motion";
// import { useInView } from 'react-intersection-observer';

import AccordItem from "@/Js/AccordItem";
import logo from "../public/assets/logo.png"
import Image from "next/image"; //used for image optimazation
import AOS from "aos"
import { useEffect,useRef } from "react";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "@/utils/motion";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh()
    
  }, []);
  const body=useRef(null);
  const animation = {
    initial: {y: "100%"},
    open: {y: "0", transition: {duration: 5}}
  }

  // const { ref, inView, entry } = useInView({
  //   threshold: 0.75,
  //   triggerOnce: true
  // });
  const isInView=useInView(body, {once:true, margin:"-10px"})

  return (
    <main  className="min-h-screen min-w-screen main_container ">
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <img className="md:hidden sm:block pt-5 pl-5" src="/assets/logo.png" alt="logo" />

    <motion.section 
   
   
    className="section_1 mb-11 ">

      <div className="header_container">

    <motion.h1 
    //  variants={fadeIn("right", "tween",1.1,1.25)}
    //  initial="hidden"
    //  whileInView="show"
  
   
    variants={animation} initial="initial" animate={isInView ? "open" : ""}
   
    className="   ">Modern brands now have the opportunity to harness
     more <span className="underlint_text"> captivating visuals </span> than ever<span className="dots">...</span></ motion.h1>
    </div>
    <div className="icons_container hidden md:block    ">
    <motion.img 
     variants={planetVariants("left")}
     initial="hidden"
     whileInView="show"
    className="logo" src="/assets/logo.png" alt="logo" />
    
    </div>
    </ motion.section>
    <motion.section
      variants={fadeIn("right", "tween",1.3,1.25)}
      initial="hidden"
      whileInView="show"
    className="flex flex-col md:flex-row mt-11 mr-5 md-mr-0 ml-5  gap-0 md:gap-5  ">
      <div className="basis-3/4">
        <p className="section_2_image_header">To the world<span className="dots">.</span></p>
        <div className="section2_img_container flex flex-col justify-between">
          <img className="w-full md:absolute relative" src="/assets/section_2_img_1.png" />
          <div className="flex flex-col absolute case_main    w-full">
          <div className="   hidden md:block   case_container mb-5   mt-5">
            <div className="flex justify-between">
              <p className="date_text">02 March</p>
              <div className="flex gap-2">
                <h1 className="case_text">View the case study</h1>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.7185" cy="11.7968" r="10.0588" stroke="#151515" stroke-width="2.23529"/>
<path d="M11.7186 7.32619L16.1891 11.7968L11.7186 16.2673" stroke="#151515" stroke-width="2.23529"/>
<path d="M7.24791 11.7971H16.1891" stroke="#151515" stroke-width="2.23529"/>
</svg>

              </div>
            </div>
            <h1 className="giant_text mt-10 ">Granite & co Website</h1>
          </div>
          </div>
        </div>
      </div>
      <div className="basis-1/4  hidden md:block  ">
        <p className="section_2_image_header">from your pocket<span className="dots">.</span></p>
        <div className="flex ">
          <img className="min-w-full  h-full grow " src="/assets/section_2_img_2.png" />
        
        </div>
      </div>
      <div className="w-full flex flex-col md:hidden  justify-between  case_containers  mt-5">
            <div className="flex justify-between">
              <p className="date_text">02 March</p>
              <div className="flex gap-2">
                <h1 className="case_text">View the case study</h1>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.7185" cy="11.7968" r="10.0588" stroke="#151515" stroke-width="2.23529"/>
<path d="M11.7186 7.32619L16.1891 11.7968L11.7186 16.2673" stroke="#151515" stroke-width="2.23529"/>
<path d="M7.24791 11.7971H16.1891" stroke="#151515" stroke-width="2.23529"/>
</svg>

              </div>
            </div>
            <h1 className="giant_text mt-10 ">Granite & co Website</h1>
          </div>
    </ motion.section>
    <section data-aos="fade-up" className="mb-11  pb-11 ml-5">
      <div className="flex">
      <h1 className="section_1_heading w-full md:w-4/5">
      Unveil your brand with beautiful designs that <span className="underlint_text">stand out online</span>
       <span className="dots">!</span>
       
      </h1>
      </div>
      <div className="flex flex-col gap-5 ml-0 md:ml-11 mt-14 mr-5 md:flex-row">
        <div className="detail_container flex flex-col gap-6 mb-11 basis-1/3">
        <svg className="hidden md:block" width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="46.461" cy="46.6918" r="44.3474" stroke="black" strokeWidth="3.05844" strokeDasharray="6.12 6.12"/>
        <circle cx="46.461" cy="46.6917" r="21.4091" fill="#FFC700" stroke="black" strokeWidth="3.05844"/>
        </svg>
        <svg className=" md:hidden" width="93" height="93" viewBox="0 0 47 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5091 6.9218C28.4415 8.40675 28.2568 10.5812 26.8824 13.0337C25.5229 15.4596 23.0753 17.9948 19.8423 20.0247C16.6092 22.0546 13.2624 23.1577 10.4868 23.3281C7.68073 23.5003 5.64196 22.7219 4.70961 21.237C3.77725 19.752 3.96198 17.5775 5.33635 15.125C6.6958 12.6992 9.14344 10.164 12.3765 8.13405C15.6095 6.10412 18.9564 5.0011 21.732 4.83071C24.538 4.65844 26.5768 5.43685 27.5091 6.9218Z" fill="#FFB800" stroke="black" stroke-width="1.4169"/>
<path d="M41.8929 29.8305C42.8253 31.3154 42.6406 33.4899 41.2662 35.9424C39.9067 38.3683 37.4591 40.9035 34.2261 42.9334C30.993 44.9633 27.6462 46.0664 24.8706 46.2368C22.0645 46.409 20.0258 45.6306 19.0934 44.1457C18.161 42.6607 18.3458 40.4862 19.7201 38.0337C21.0796 35.6078 23.5272 33.0727 26.7603 31.0427C29.9933 29.0128 33.3401 27.9098 36.1157 27.7394C38.9218 27.5671 40.9606 28.3455 41.8929 29.8305Z" fill="#828282" stroke="black" stroke-width="1.4169"/>
<path d="M4.70996 21.2373L18.9566 43.9278" stroke="black" stroke-width="1.4169"/>
<path d="M27.5093 6.92236L41.756 29.6128" stroke="black" stroke-width="1.4169"/>
<path d="M19.9111 20.1343L34.2263 42.9338" stroke="black" stroke-width="1.48605"/>
</svg>

        <h3 className="detail_container_heading w-full md:w-2/3">Save costs with an outsourced studio.</h3>
        <div className="flex detail_description w-full md:w-5/6">
        <p className="plus hidden md:block" style={{fontSize:"18px"}}>+</p>
          <p className="ml-1"> Designers are mighty expensive! Stop hiring and gain more leverage over competitors with a trained
             team of creatives that’s ready for you.</p>
        </div>
        </div>
        <div className="detail_container flex flex-col gap-6 mb-11 basis-1/3">
        <svg className="hidden md:block" width="60" height="91" viewBox="0 0 60 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.3235 17.2237C58.3235 20.9249 55.5524 24.605 50.3426 27.4467C45.1893 30.2576 37.9678 32.0425 29.9095 32.0425C21.8511 32.0425 14.6297 30.2576 9.4764 27.4467C4.26652 24.605 1.49547 20.9249 1.49547 17.2237C1.49547 13.5224 4.26652 9.84238 9.4764 7.00063C14.6297 4.18973 21.8511 2.4049 29.9095 2.4049C37.9678 2.4049 45.1893 4.18973 50.3426 7.00063C55.5524 9.84238 58.3235 13.5224 58.3235 17.2237Z" fill="#FFB800" stroke="black" strokeWidth="2.99095"/>
<path d="M58.3235 74.324C58.3235 78.0253 55.5525 81.7053 50.3426 84.5471C45.1893 87.358 37.9679 89.1428 29.9095 89.1428C21.8511 89.1428 14.6297 87.358 9.47641 84.5471C4.26654 81.7053 1.49549 78.0253 1.49549 74.324C1.49549 70.6228 4.26654 66.9427 9.47641 64.101C14.6297 61.2901 21.8511 59.5052 29.9095 59.5052C37.9679 59.5052 45.1893 61.2901 50.3426 64.101C55.5525 66.9427 58.3235 70.6228 58.3235 74.324Z" fill="#828282" stroke="black" strokeWidth="2.99095"/>
<path d="M1.49545 17.2244L1.49545 73.7805" stroke="black" strokeWidth="2.99095"/>
<path d="M58.3236 17.2244L58.3236 73.7805" stroke="black" strokeWidth="2.99095"/>
<path d="M29.9095 32.3149L29.9095 89.143" stroke="black" strokeWidth="3.13693"/>
</svg>
<svg className="md:hidden" width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="46.461" cy="46.6918" r="44.3474" stroke="black" strokeWidth="3.05844" strokeDasharray="6.12 6.12"/>
        <circle cx="46.461" cy="46.6917" r="21.4091" fill="#FFC700" stroke="black" strokeWidth="3.05844"/>
        </svg>
        <h3 className="detail_container_heading w-full  md:w-2/3">Optimize your presence on the web.</h3>
        <div className="flex detail_description w-full  md:w-5/6">
        <p className="plus hidden md:block" style={{fontSize:"18px"}}>+</p>
          <p className="ml-1"> Offline branding & messaging just doesn’t cut it when everything is going digital. Captivate your audience when they 
          find you online with beautiful branding.</p>
        </div>
        </div>
        <div className="detail_container flex flex-col gap-6 mb-11 basis-1/3">
        <svg className="" width="86" height="87" viewBox="0 0 86 87" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.35195" y="1.46914" width="83.2961" height="83.2961" stroke="black" strokeWidth="2.70391"/>
<path d="M40.4268 12.2685L43 4.44456L45.5732 12.2685C49.9737 25.6489 60.4683 36.1435 73.8486 40.544L81.6726 43.1172L73.8486 45.6903C60.4683 50.0909 49.9737 60.5855 45.5732 73.9658L43 81.7898L40.4268 73.9658C36.0263 60.5855 25.5317 50.0909 12.1513 45.6903L4.32738 43.1172L12.1514 40.544C25.5317 36.1435 36.0263 25.6489 40.4268 12.2685Z" fill="#FFB800" stroke="black" strokeWidth="2.70391"/>
</svg>

        <h3 className="detail_container_heading w-full  md:w-2/3">Outshine your competitors</h3>
        <div className="flex detail_description w-full md:w-5/6">
          <p className="plus hidden md:block" style={{fontSize:"18px"}}>+</p>
          <p className="ml-1">Your brand deserves to look good. In most cases, what sets competitors apart is how good 
          they look on the internet!</p>
        </div>
        </div>
      
      </div>
    </section>
    <section data-aos="fade-up" className="banner_section px-5   pb-11 ">
      <div className="banner_container  flex flex-col md:flex-row divide-hidden md:divide-block md:divide-x divide-black ">
        <div className=" py-8 pl-4 md:pl-14 pr-5 basis-1/2 ">
          <h1 className="banner_text">“It’s fulfilling to be able to trust a team to enhance the look of my brand without giving up on the brand ethos 
            I’ve built over the years” <span style={{fontWeight:700}}>- BurgerBros</span> </h1>
            <div className="flex flex-row gap-4 mt-11">
              <button type="button" className="black_btn">WEBSITE DEVELOPMENT</button>
              <button type="button" className="black_btn">PACKAGING DESIGN</button>
            </div>
        </div>
        <hr className="hidden md:block"/>
        <div className="basis-1/2 p-4 md:p-8  ">
          <img className="w-full hidden md:block" src='/assets/banner_img.png' alt='img'/>
          <img className="w-full md:hidden " src='/assets/banner_img2.png' alt='img'/>
        </div>
      </div>
    </section>
    <section data-aos="fade-up" className="cards_section flex mb-11 gap-24 flex-col md:flex-row px-5">
    <div className=" basis-1/3 flex flex-col justify-between gap-11 md:gap-24">
      <div className="flex gap-4">
    <svg width="99" height="100" viewBox="0 0 99 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25.7227" cy="26.0951" r="24.1768" fill="white" stroke="black" strokeWidth="2.62575"/>
<path d="M24.6832 7.96836L25.7227 4.80776L26.7621 7.96836C29.4214 16.0543 35.7635 22.3963 43.8494 25.0556L47.01 26.0951L43.8494 27.1346C35.7635 29.7939 29.4214 36.1359 26.7621 44.2218L25.7227 47.3824L24.6832 44.2218C22.0239 36.1359 15.6819 29.7939 7.59593 27.1346L4.43532 26.0951L7.59593 25.0556C15.6819 22.3963 22.0239 16.0543 24.6832 7.96836Z" fill="#FFB800" stroke="black" strokeWidth="2.62575"/>
<circle cx="25.7226" cy="73.6765" r="24.1768" fill="white" stroke="black" strokeWidth="2.62575"/>
<circle cx="73.3032" cy="26.0955" r="24.1768" fill="white" stroke="black" strokeWidth="2.62575"/>
<circle cx="73.3032" cy="73.6765" r="24.1768" fill="white" stroke="black" strokeWidth="2.62575"/>
<path d="M72.2638 55.5498L73.3032 52.3892L74.3427 55.5498C77.002 63.6357 83.344 69.9777 91.43 72.6371L94.5906 73.6765L91.43 74.716C83.344 77.3753 77.002 83.7173 74.3427 91.8033L73.3032 94.9639L72.2638 91.8033C69.6045 83.7173 63.2624 77.3753 55.1765 74.716L52.0159 73.6765L55.1765 72.6371C63.2624 69.9777 69.6045 63.6357 72.2638 55.5498Z" fill="#BCA47F" stroke="black" strokeWidth="2.62575"/>
</svg>
<div className="flex flex-col ">

  <h1 className="card_heading">Branding Services</h1>
  <p className="card_text"> <span className="plus">+</span> COHESIVE BRAND IDENTITY</p>
  <p  className="card_text"> <span className="plus">+</span> CRISP PACKAGING DESIGNS</p>
  <p  className="card_text"> <span className="plus">+</span> MEMORABLE LOGO DESIGNS</p>
  <p  className="card_text"> <span className="plus">+</span> DESIGN COLLATERALS</p>
</div>
</div>
<div className=" flex flex-col gap-2 ">
        <p className="project_title ">AVG PROJECT COMPLETION</p>
        <div className="border border-b-0 border-black border-t-1 border-x-1   ">
          <div className="complete_img w-3/4" ></div>         
        </div>
        <p className="project_date">2-3 MONTHS</p>
      </div>

    </div>
    <div className="  basis-1/3 flex flex-col justify-between  gap-11 md:gap-4">
      <div className="flex gap-4">
      <div className="svg_icon">
    <svg className="svg_icon" width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect id="aa" x="1.44216" y="2.01064" width="95.7702" height="95.7702" fill="#FFB800" stroke="black" strokeWidth="2.31034"/>
<rect x="17.7889" y="18.3574" width="79.4234" height="79.4234" fill="#7FA6BC" stroke="black" strokeWidth="2.31034"/>
<rect x="34.1357" y="34.704" width="63.0767" height="63.0767" fill="#DBDBDB" stroke="black" strokeWidth="2.31034"/>
</svg>
</div>
<div className="flex flex-col ">

  <h1 className="card_heading">Website Design</h1>
  <p className="card_text"> <span className="plus">+</span> STUNNING WEBSITES</p>
  <p  className="card_text"> <span className="plus">+</span> PURPOSEFUL LANDING PAGES</p>
  <p  className="card_text"> <span className="plus">+</span> E-COMMERCE STORES</p>
</div>
</div>
<div className=" flex flex-col  gap-2">
        <p className="project_title ">AVG PROJECT COMPLETION</p>
        <div className="border border-b-0 border-black border-t-1 border-x-1 ">
          <div className="complete_img w-11/12" ></div>         
        </div>
        <p className="project_date">2-4 MONTHS</p>
    
      </div>
    </div>
    <div className=" basis-1/3 flex flex-col justify-between gap-11 md:gap-4">
<div className="flex gap-4">
    <svg width="114" height="115" viewBox="0 0 114 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.97864 27.4137L56.8559 54.1488V112.309L1.97864 88.8575V27.4137Z" fill="#7FA6BC"/>
<path d="M111.733 27.4137L56.8559 54.1488V112.309L111.733 88.8575V27.4137Z" fill="#FFB800"/>
<path d="M56.8559 2.71899V54.313M56.8559 2.71899L1.97864 27.5779M56.8559 2.71899L111.733 27.5779M56.8559 54.313L1.97864 27.5779M56.8559 54.313L111.733 27.5779M56.8559 54.313V112.474M1.97864 27.5779V89.0217L56.8559 112.474M111.733 27.5779V89.0217L56.8559 112.474" stroke="black" strokeWidth="3.65848"/>
</svg>

<div className="flex flex-col ">

  <h1 className="card_heading">Product Design</h1>
  <p className="card_text"> <span className="plus">+</span> ENHANCED WEB UI/UX</p>
  <p  className="card_text"> <span className="plus">+</span> CLEAN APP UI/UX</p>
 
</div>
</div>
<div className=" flex flex-col gap-2 ">
        <p className="project_title ">AVG PROJECT COMPLETION</p>
        <div className="border border-b-0 border-black border-t-1 border-x-1   ">
          <div className="complete_img w-5/6" ></div>         
        </div>
        <p className="project_date">3-6 MONTHS</p>
      </div>
    </div>
    </section>
    <section data-aos-duration="5000" data-aos="flip-left"  className="gallery_section  flex flex-col  pb-11">
      <div  className="flex max-w-full ">
        <img className="" src="/assets/gallery_3.png"  alt ='img' />
        <img className="w-full" src="/assets/gallery_4.png"  alt ='img' />

      </div>
     
        <div className="flex flex-col md:hidden max-w-full">
        <img  className="" src="/assets/gallery_2.png"  alt ='img' />
        <img className="" src="/assets/gallery_1.png"  alt ='img' />
        </div>
        <div className="flex  max-w-full">
        <img className="hidden md:block" src="/assets/gallery_5.png"  alt ='img' />
        <img className="hidden md:block w-full" src="/assets/gallery_6.png"  alt ='img' />

      </div>
    
    </section>
    <section data-aos="fade-up" className=" px-5 pb-11 flex  gap-6 flex-col md:flex-row">
        <div className="basis-1/3 flex flex-col md:flex-row gap-4">
          <img className="w-1/6 self-center" src='/assets/timeline1.png'/>
          <div className=" flex flex-col gap-1 self-center">
            <h1 className="card_heading">Unsure on a timeline?</h1>
            <p className="timeline_text">Ask us about our monthly retainers</p>
          </div>
        </div>
        <div className="basis-1/3 flex flex-col md:flex-row gap-4">
          <img className="w-1/6 self-center" src='/assets/timeline2.png'/>
          <div className=" flex flex-col gap-1 self-center">
            <h1 className="card_heading">Unsure on a budget?</h1>
            <p className="timeline_text">Ask us about our custom plans</p>
          </div>
        </div>
        <div className="basis-1/3 flex flex-col md:flex-row gap-4">
          <img className="w-1/6 self-center" src='/assets/timeline3.png'/>
          <div className=" flex flex-col gap-1 self-center">
            <h1 className="card_heading">Unsure on a direction?</h1>
            <p className="timeline_text">Pick our brains for free on a call</p>
          </div>
        </div>
     
      </section>
      <hr data-aos="fade-up" className="hr_line" />
      <section data-aos="fade-up" className="px-5 pb-11 mt-14 md:mt-0">
        <div className="flex flex-col m-3  md:m-40 gap-3">
        <div className="call_container ">
        <h1 className="call_text">Just book a call</h1>
        </div>
        <p className="text_call_bottom self-center pb-2 underlint_text">or check out our work first</p>
        </div>
      </section>
      <hr data-aos="fade-up" className="hr_line  mx-11 md:mx-24" />
      <section data-aos="fade-up" className="pb-11 px-5 mt-24 flex flex-col md:flex-row">
        <div className="flex flex-col justify-between basis-1/3">
          <h1 className="question_heading w-1/2">HAVE QUESTIONS?</h1>
         
          
        
          <div className="flex flex-col hidden md:block">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#FFB800"/>
</svg>
<h1 className="question_text mt-3">Have more questions?</h1> 
<h1 className="question_text"> Book a free strategy call.</h1>
<button className="join_button w-1/4 p-3 mt-3" type="button">Join Waitlist</button>
          </div>
        
        </div>
        <div className="flex flex-col gap-2 mt-11 md:mt-0  basis-2/3 ">
       
          <AccordItem header="How many videos will I get for each plan?" text="Response for this question" />
            <hr className="hr_line_question " />
           
            <AccordItem header="How many videos will I get for each plan?" text="Response for this question" />
            <hr className="hr_line_question " />
            <AccordItem header="How many videos will I get for each plan?" text="Response for this question" />
            <hr className="hr_line_question " />
            <AccordItem header="How many videos will I get for each plan?" text="Response for this question" />
            <hr className="hr_line_question " />
            <AccordItem header="How many videos will I get for each plan?" text="Response for this question" />
            <hr className="hr_line_question " />
            <AccordItem header="How many videos will I get for each plan?" text="Response for this question" />
            <hr className="hr_line_question " />
            <AccordItem header="How many videos will I get for each plan?" text="Response for this question" />
            <hr className="hr_line_question " />
            <AccordItem header="How many videos will I get for each plan?" text="Response for this question" />
            <hr className="hr_line_question " />
          </div>
        
          <div className="flex  flex-col gap-4 mt-11 md:hidden">
            <div className="flex flex-row md:flex-col">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#FFB800"/>
</svg>
<div className="flex flex-col ml-3">
<h1 className="question_text">Have more questions?</h1> 
<h1 className="question_text"> Book a free strategy call.</h1>
</div>
</div>
<button className="join_button  p-3" type="button">Join Waitlist</button>
          </div>
      </section>
      <section data-aos="fade-up" className="footer_section p-11 pt-11 md:pt-24 pb-24 md:pb-36  flex flex-col md:flex-row justfy-between w-full gap-12  md:gap-24 ">
    <div className="flex flex-col order-2 md:order-1 gap-5 basis-1/5">
      <h1 className="address_title">Address</h1>
      <p className="address_text w-2/3 md:w-full">Pjs 52, 46200 Petaling Jaya, Selangor Pjs 52, 46200 Petaling Jaya, Selangor</p>
      <div className="flex flex-col gap-5 mt-4  md:mt-11 ">
      <h1 className="address_title">Contact</h1>
      <div className="flex flex-col gap-1">
      <p className="address_text">+60109006585</p>
      <p className="address_text">+60109006585</p>
      </div>
      </div>
    </div>
    <div className="flex flex-col order-1 md:order-2 gap-4 basis-2/3">
      <img className="logo_footer self-center" src="/assets/logo.png"/>
      <h1 className="signin_text self-center mt-5">Sign up for updates!</h1>
      <div className="input_container w-full md:w-3/5 self-center p-2 flex justify-between bg-white">
      <input className="email_input ml-2" placeholder="Enter your email" type='text'/>
      <svg className="cursor-pointer" width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.925049" y="0.499268" width="49.14" height="49.14" rx="24.57" fill="#FFC700"/>
<path d="M28.9901 21.6078L23.7312 26.999C23.3453 27.3959 22.7389 27.4841 22.2538 27.2195L15.9034 23.7466C14.9663 23.2395 15.0765 21.8724 16.0688 21.5086L34.0506 14.9487C35.0318 14.5959 35.991 15.544 35.6382 16.5253L29.2327 34.4519C28.8799 35.4331 27.5568 35.5654 27.0166 34.6834L24.6242 30.7696" stroke="black" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      </div>
    </div>
    <div className="flex flex-col order-3  basis-1/5">
      <div className=" flex flex-col  gap-11 self-start md:self-end ">
      <div className="flex flex-col   hidden md:block ">
        <h1 className="address_title">Links</h1>
        <p className="cursor-pointer address_text mt-3">Home</p>
        <p className="cursor-pointer address_text mt-2">Contact Us</p>
        <p className="cursor-pointer address_text mt-2">Blog</p>
      </div>
      <div className="flex flex-col gap-5 ">
    <h1 className="address_title">Socials</h1>
    <div className="flex  gap-6 md:gap-3">
    <svg  className="svg_icons w-16 md:w-12 basis-1/4" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="19.0889" cy="19.0889" r="18.5043" stroke="black" />
<path d="M27.5518 14.977C26.9805 15.231 26.3774 15.3897 25.7426 15.4849C26.3774 15.104 26.8853 14.5009 27.1075 13.7709C26.5044 14.12 25.8378 14.374 25.1078 14.5327C24.5365 13.9296 23.7112 13.5487 22.8225 13.5487C21.1085 13.5487 19.7119 14.9453 19.7119 16.6593C19.7119 16.9132 19.7436 17.1354 19.8071 17.3576C17.2361 17.2306 14.919 15.9927 13.3637 14.0883C13.1098 14.5644 12.9511 15.0723 12.9511 15.6436C12.9511 16.7228 13.4907 17.675 14.3477 18.2463C13.8398 18.2146 13.3637 18.0876 12.9194 17.8654V17.8972C12.9194 19.4207 13.9985 20.6904 15.4269 20.976C15.1729 21.0395 14.8873 21.0713 14.6016 21.0713C14.4112 21.0713 14.189 21.0395 13.9985 21.0078C14.4112 22.2457 15.5538 23.1661 16.9187 23.1661C15.8395 23.9914 14.5064 24.4993 13.0463 24.4993C12.7924 24.4993 12.5385 24.4993 12.3163 24.4675C13.7129 25.3563 15.3317 25.8641 17.1091 25.8641C22.8542 25.8641 25.9965 21.103 25.9965 16.9767C25.9965 16.8497 25.9965 16.691 25.9965 16.5641C26.5996 16.1514 27.1392 15.6119 27.5518 14.977Z" fill="black"/>
  </svg>
  <svg  className="svg_icons w-16 md:w-12  basis-1/4"  viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="19.5391" cy="19.0889" r="19.0889" stroke="black"/>
<path d="M17.7791 27.6845V20.1123H15.2309V17.1612H17.7791V14.9849C17.7791 12.4593 19.3216 11.0841 21.5746 11.0841C22.6538 11.0841 23.5814 11.1645 23.8517 11.2004V13.8398L22.2891 13.8405C21.0638 13.8405 20.8265 14.4227 20.8265 15.2771V17.1612H23.7488L23.3683 20.1123H20.8265V27.6845H17.7791Z" fill="black"/>
</svg>
<svg className="svg_icons w-16 md:w-12 basis-1/4" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="19.9886" cy="19.0889" r="18.5043" stroke="black" strokeWidth="1.16906"/>
<path d="M19.9907 11.5198C22.4569 11.5198 22.7489 11.529 23.7231 11.5735C24.3089 11.5806 24.8891 11.6882 25.4385 11.8915C25.8369 12.0451 26.1988 12.2805 26.5007 12.5824C26.8027 12.8844 27.038 13.2462 27.1917 13.6447C27.395 14.1941 27.5025 14.7743 27.5097 15.36C27.5537 16.3342 27.5634 16.6263 27.5634 19.0925C27.5634 21.5586 27.5541 21.8507 27.5097 22.8249C27.5025 23.4107 27.395 23.9909 27.1917 24.5403C27.038 24.9387 26.8027 25.3005 26.5007 25.6025C26.1988 25.9044 25.8369 26.1398 25.4385 26.2934C24.8891 26.4967 24.3089 26.6043 23.7231 26.6114C22.7493 26.6554 22.4573 26.6651 19.9907 26.6651C17.5241 26.6651 17.2321 26.6559 16.2583 26.6114C15.6725 26.6043 15.0923 26.4967 14.5429 26.2934C14.1445 26.1398 13.7826 25.9044 13.4807 25.6025C13.1787 25.3005 12.9434 24.9387 12.7897 24.5403C12.5864 23.9909 12.4789 23.4107 12.4717 22.8249C12.4277 21.8507 12.418 21.5586 12.418 19.0925C12.418 16.6263 12.4273 16.3342 12.4717 15.36C12.4789 14.7743 12.5864 14.1941 12.7897 13.6447C12.9434 13.2462 13.1787 12.8844 13.4807 12.5824C13.7826 12.2805 14.1445 12.0451 14.5429 11.8915C15.0923 11.6882 15.6725 11.5806 16.2583 11.5735C17.2325 11.5295 17.5245 11.5198 19.9907 11.5198ZM19.9907 9.85547C17.4836 9.85547 17.1678 9.86602 16.1826 9.91089C15.416 9.92614 14.6575 10.0713 13.9394 10.3402C13.3234 10.5723 12.7655 10.936 12.3046 11.4059C11.8342 11.867 11.4702 12.4253 11.238 13.0416C10.9691 13.7597 10.8239 14.5182 10.8087 15.2848C10.7647 16.2692 10.7542 16.585 10.7542 19.092C10.7542 21.5991 10.7647 21.9149 10.8096 22.9001C10.8248 23.6667 10.97 24.4252 11.2388 25.1433C11.4708 25.7596 11.8345 26.3178 12.3046 26.779C12.7658 27.2491 13.324 27.6128 13.9403 27.8447C14.6584 28.1136 15.4169 28.2588 16.1835 28.274C17.1687 28.318 17.4832 28.3294 19.9916 28.3294C22.5 28.3294 22.8144 28.3189 23.7997 28.274C24.5663 28.2588 25.3248 28.1136 26.0428 27.8447C26.6562 27.607 27.2132 27.2438 27.6783 26.7785C28.1433 26.3132 28.5061 25.7559 28.7434 25.1424C29.0123 24.4243 29.1575 23.6658 29.1727 22.8992C29.2167 21.9149 29.2272 21.5991 29.2272 19.092C29.2272 16.585 29.2167 16.2692 29.1718 15.2839C29.1566 14.5173 29.0114 13.7588 28.7425 13.0408C28.5106 12.4245 28.1469 11.8662 27.6768 11.405C27.2156 10.935 26.6574 10.5713 26.0411 10.3393C25.323 10.0704 24.5645 9.92526 23.7979 9.91001C22.8136 9.86602 22.4978 9.85547 19.9907 9.85547Z" fill="black"/>
<path d="M19.9928 14.3497C19.0546 14.3497 18.1376 14.6279 17.3576 15.1491C16.5776 15.6703 15.9696 16.4111 15.6106 17.2778C15.2516 18.1445 15.1577 19.0982 15.3407 20.0183C15.5237 20.9384 15.9755 21.7835 16.6388 22.4469C17.3022 23.1102 18.1473 23.5619 19.0674 23.745C19.9875 23.928 20.9412 23.8341 21.8079 23.4751C22.6746 23.1161 23.4154 22.5081 23.9366 21.7281C24.4578 20.9481 24.7359 20.031 24.7359 19.0929C24.7359 17.8349 24.2362 16.6285 23.3467 15.739C22.4572 14.8495 21.2507 14.3497 19.9928 14.3497ZM19.9928 22.1718C19.3838 22.1718 18.7886 21.9912 18.2822 21.6529C17.7759 21.3146 17.3813 20.8337 17.1483 20.2711C16.9152 19.7086 16.8543 19.0895 16.9731 18.4923C17.0919 17.895 17.3851 17.3464 17.8157 16.9158C18.2463 16.4853 18.7949 16.192 19.3921 16.0732C19.9893 15.9544 20.6084 16.0154 21.171 16.2484C21.7336 16.4815 22.2144 16.8761 22.5527 17.3824C22.891 17.8887 23.0716 18.484 23.0716 19.0929C23.0716 19.9095 22.7472 20.6926 22.1698 21.27C21.5924 21.8474 20.8093 22.1718 19.9928 22.1718Z" fill="black"/>
<path d="M24.9219 15.2715C25.534 15.2715 26.0302 14.7752 26.0302 14.1631C26.0302 13.5509 25.534 13.0547 24.9219 13.0547C24.3097 13.0547 23.8135 13.5509 23.8135 14.1631C23.8135 14.7752 24.3097 15.2715 24.9219 15.2715Z" fill="black"/>
</svg>
<svg  className="svg_icons w-16 md:w-12 basis-1/4"  viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="19.4391" cy="19.0889" r="18.5043" stroke="black" strokeWidth="1.16906"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20.2656 9.85547C15.3694 9.85547 11.4304 13.7945 11.4304 18.6907C11.4304 22.593 13.9705 25.9062 17.4678 27.0843C17.9096 27.1579 18.0568 26.9002 18.0568 26.6425C18.0568 26.4216 18.0568 25.8694 18.0568 25.1331C15.5903 25.6853 15.0749 23.9551 15.0749 23.9551C14.67 22.9243 14.0809 22.6666 14.0809 22.6666C13.271 22.1144 14.1546 22.1144 14.1546 22.1144C15.0381 22.188 15.5167 23.0348 15.5167 23.0348C16.2898 24.3969 17.5782 23.9919 18.0936 23.771C18.1673 23.182 18.3881 22.8139 18.6458 22.593C16.6947 22.3721 14.6331 21.599 14.6331 18.2122C14.6331 17.255 14.9645 16.4451 15.5535 15.8561C15.4799 15.6352 15.1485 14.7517 15.6271 13.5C15.6271 13.5 16.3634 13.2791 18.0568 14.4204C18.7563 14.2363 19.5294 14.1259 20.2656 14.1259C21.0019 14.1259 21.775 14.2363 22.4745 14.4204C24.1679 13.2791 24.9042 13.5 24.9042 13.5C25.3827 14.7149 25.0882 15.5984 24.9778 15.8561C25.53 16.4819 25.8981 17.255 25.8981 18.2122C25.8981 21.599 23.8366 22.3353 21.8486 22.5562C22.1799 22.8139 22.4376 23.3661 22.4376 24.176C22.4376 25.354 22.4376 26.3112 22.4376 26.6057C22.4376 26.8266 22.5849 27.1211 23.0635 27.0474C26.5608 25.9062 29.1009 22.593 29.1009 18.6907C29.1009 13.7945 25.1619 9.85547 20.2656 9.85547Z" fill="black"/>
</svg>

    </div>
      </div>
      </div>
    </div>
      </section>
    </main>
  )
}
