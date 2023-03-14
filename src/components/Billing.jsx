import { apple, bill, google} from '../assets'
import styles, { layout  } from '../style'


const Billing = () => (
  // Here we are making our Billing section
    <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          {/* Image of paypal and started from here */}
          <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
          {/* Puttung gradient like our above picture of robot hand here  but from leftside*/}

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>

        <div className={layout.sectionInfo}>
          {/* Here Iam spicifying the paragraph in the left of the Paypal picture */}
          {/* But this section of text or paragraph will be shown in the top os the image in Mobiles or small screens, that 
          happen because we use or spicigy the Section Reverse Layout*/}
          <h2 className={styles.heading2}>Easily control Your <br className="sm:block hidden" /> billing & invoicing.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa estim. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
            aliporttitor intefer platea placerat.
          </p>
          {/* From here we are spifiying the App Store and Play store presence  */}
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="App-Store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
            <img src={google} alt="App-Store" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
          </div>
        </div>
    </section>
  )


export default Billing