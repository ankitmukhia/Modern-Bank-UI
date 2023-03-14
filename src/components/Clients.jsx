import { clients } from "../constants"
import styles from '../style';


// here we are making our client Logo 
const Clients = () =>(
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {/* Inside here we are mapping over our Client Array */}
        {clients.map((client)=>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            {/* This is all our logo that this compony had worked with */}
            {/* TDOO make it pure white when you hover over it.......it si still to be Done*/}
              <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
          </div>
        ))}
      </div>
    </section>
  )

export default Clients