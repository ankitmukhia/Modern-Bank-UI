import styles from '../style';
import Button from './Button';


// From here we are starting our Call To Action section 
const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        {/* This h2 is saying lets try our Service now  */}
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      {/* Here we are reusing our Button again  */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
)

export default CTA