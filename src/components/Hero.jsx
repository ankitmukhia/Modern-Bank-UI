import styles from '../style';
import { discount, robot} from '../assets';
import GetStarted from './GetStarted'


const Hero = () => (
  // Here we are making our Intro Heading
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> 
       <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
           {/* From here we are spifiying 20% discount for 1 months component */}
           {/* discount img  */}
           <img src={discount} alt= "discount"
           className="w-[32px] h-[32px]"
           />
            {/* From Here we are spifiying the remaining text for descount  */}
           <p className={`${styles.paragraph} ml-2`}>
               <span className='text-white'>20%
               </span> Discount For {' '} 
               <span className='text-white'> 1 Month</span> {' '}
               Account
           </p>
       </div>
        {/* From here we are starting our h1 The next Generation payment method heading */}
       <div className='flex flex-row justify-between items-center w-full'>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" /> {" "}
          <span className="text-gradient">Generation 
          </span > 
        </h1>
        {/* Here we are starting our Circle get Started  */}
        {/* For this circle design we do have a different file components */}
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
       </div>
           <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
                Payment Method.</h1>
                {/* These line is paragraph below the methos */}
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of expeerts uses a methodology to identify the credit cat=rds most likely to fit 
                  your needs. We examine annual percentage rates, annual fees.
                </p>
    </div>

    {/* From Here we are spifiying the Robot hand style */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
         <img src={robot} alt="billing"  className="w-[100%] h-[100%] relative z-[5]"/>
         {/* From Here we are spifiying background gradient of robot hand */}
         {/* And This is the three layer of bckground design for robot hand */}
         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
         <div className="absolute z-[1] w-[80%] h-[80%] round-full bottom-40 white__gradient" />
         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    {/* Here we are spifiying the Get started button for phone it will apper below robot hand in mobiles making it responsive */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
    <GetStarted />
    </div>
  </section>
)

export default Hero;
