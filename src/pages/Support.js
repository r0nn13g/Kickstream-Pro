import '../styles/support-styles.css'
import AdTicker from '../components/AdTicker.js';
import Footer from '../components/Footer.js'

const Support = () => {
  return(
    <>
    <AdTicker />
    <div className="support-header-wrapper">
      <h3 style={{color: "var(--green-elements)", textAlign: "left"}}>SUPPORT 💸</h3>
    </div>
    <div className="support-details-container">
    <div className='btc-container'>
          <b>Bitcoin cold wallet: </b><ul>bc1qswf7p68uxjhmfy2wc654zy9umz80unw8k3dkzl</ul>
    </div>
    </div>
    <Footer />
    </>
  )
};

export default Support;