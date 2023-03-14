import { feedback } from "../constants"
import styles from '../style'
import FeedbackCard from './FeedbackCard'

// we are starting our Testimonials from Here
const Testimonials = () =>  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* This div is for greadient for image section */}
      {/* TODO */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

     {/* This div is responsible for Titile and context {md: sm: is snown as medium and small screen mb: is uselly}*/}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-16 relative z-[1]">
           <h1 className={styles.heading2}>What people are <br className="sm:block hidden"/>saying about us</h1>
         <div className="w-full md:mt-0 mt-6">
           <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept 
           card payment and grow your business anywhere in the planet.</p>
         </div>
      </div>
      {/* From here we are starting our Feedback cards Lets Start */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
           {/* Inside this we are Mapping our card from feedback [Arrays] in index.js file */}
           {feedback.map(( card )=> (
              <FeedbackCard key={card.id} {...card} />
           ))}
      </div>
    </section>
  )

export default Testimonials