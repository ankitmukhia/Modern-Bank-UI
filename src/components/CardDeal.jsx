import { card } from "../assets"
import styles, {  layout } from "../style"
import Button from "./Button"

const CardDeal = () =>(
  <secation className={layout.section} >
  <div className={layout.sectionInfo}>
    {/* This is bigger text of the card section */}
     <h2 className={styles.heading2}>Find better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
     {/* And this is the paragraph tag or  section */}
     <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet
      eget mauris tortor.c Altiquet ultrices ac, ametau.
     </p>
     {/* Here we are spifiying the reusing the Button we have built previous */}
     <Button styles="mt-10"/>
  </div>
  {/* Here we are spifiying the card section image */}
  <div className={layout.sectionImg}>
       <img src={card} alt="card" className="w-[100%] h-[100%]" />
  </div>
</secation>
  )

export default CardDeal