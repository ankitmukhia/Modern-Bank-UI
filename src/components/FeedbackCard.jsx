import { quotes } from '../assets'

const FeedbackCard = ( {content, name, title, img}) =>(
  // Here we are making our cards with three quots symbol
    <div className="flex justify-between flex-col px-10 py-12 
    rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
         <img src={quotes} alt="quotes symbol" className="w-[42px] h-[27px] object-contain"/>
         {/* And here we are spifiying our paragraph or content inside the card */}
         <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10" >{content}</p>
         {/* Here we are spifiying the little image and title under card */}
         <div className="flex flex-row">
          {/* This is image section */}
              <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/>
              {/* This is paragraph or content section */}
              <div className="flex flex-col ml-4">
                  <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
                  <p className="font-poppins font-semibold text-[16px] leading-[24px] text-dimWhite">{title}</p>
                  {/* Here we done with our card */}
              </div>
         </div>
    </div>
  )

export default FeedbackCard