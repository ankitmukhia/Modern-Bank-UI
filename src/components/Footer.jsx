import styles from "../style";
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.padding} flex-col`}>
      {/* And ther so many Link in vartical links */}
      <div className={`${styles.flexStart} md:flex-row fles-col mb-8 w-full`}>
      {/* Here we are spifiying the logo and vartical text for Footer */}
           <div className="flex-1 flex-col justify-start mr-10">
               <img src={logo} 
                alt="Logo"
                className="w-[266px] h-[72px] object-contain"
               />
               {/* Here we are spifiying our paragraph below our Footer Logo */}
               <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
           </div>
           {/* we are creating here our all Varticl Links */}
           <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              {/* And her we are Mapping over to all our Footer Links definded in footerlink */}
              {footerLinks.map((footerLink)=>(
                <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                  {/* we are spifiying the title of the Link */}
                  <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                    {footerLink.title}
                  </h4>
                  {/* Here we are spifiying margin between title and Link */}
                  <ul className="list-none mt-4">
                    {/* And once again we are Looping through our Links */}
                    {footerLink.links.map((link, index)=>(
                      <li key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] 
                      text-dimWhite hover:text-secondary cursor-pointer
                      ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                        {/* Here we are spifiying the condition statement by saying if index is not
                        equal to the last Link in theat case we wanted to render marginBottom-4
                        and usealy margin bottom 0 */}
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
           </div> 
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index)=>(
            <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
            />
          ))}
      </div>
    </div>
    </section>
  )

export default Footer