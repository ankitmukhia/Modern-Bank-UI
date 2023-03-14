import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

// Reuseable card component
const FeatureCard = ( { icon, title, content, index } )=>(
  /**So here we also wanted to give margin Bottom to devide Card with each card, but if it's the last one
   then we don't want to provided a margin Bottom to last one, so we are solving it with conditional statement,
   so if index of Features is not the last one give it a margin Bottom of 6 else margin Bottom of 0  **/
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      {/* From here we are provideing our content inside card */}
      <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            {title}
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
            {content}
          </p>
      </div>
  </div>
)


const Business = () =>{
  return (
    <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      {/* Here we are spifiying the h2 text of the Business section */}
         <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we'll handle the money.</h2>
         {/* And in this section we are providing our pargraph below our h2 text */}
         <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>with the right credit card, you can improve your financial life by building credit, earning reward
          and saving money. But with hundreds of credit cards on the market.
         </p>
         {/* From Here we are making our Button for  */}
         <Button styles="mt-10"/>
    </div>
    {/* From here we are making our next part of the Business Section which is Feature Card */}
    <div className={`${layout.sectionImg} flex-col`}>
      {/* Here we are making ReUseable Card components */}
        {features.map((feature, index)=>(
             <FeatureCard key={feature.id} {...feature}  />
        ))}
    </div>
  </section>
  )
}



export default Business;