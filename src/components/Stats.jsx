import { stats } from "../constants";
import styles from "../style";
/********** Starting of stats that shows ACTIVE USERS TRUSTED BY X NUMBER OF COMPONY & TRANSACATION STATUS  **********/
const Stats = () => 
<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
  {stats.map((stat)=>(
    <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
        {/* This valuse is going to be the number that appears below the Hero section & all of this are coming from the stats Array */}
      {stat.value}
      </h4>
      <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
    </div>
  ))}
  {/* Here we are done with our stats */}
</section>;

export default Stats;
