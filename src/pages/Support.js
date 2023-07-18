import '../styles/support-styles.css'
import Footer from '../components/Footer.js'

const Support = () => {
  return(
    <>
    <div className="support-details-container">
      <div className='crypto-container'> 
        <div className='eth-container'>
        <img id="eth" src={'https://i.imgur.com/5QjQ35c.jpg'} alt='eth-qr-code'/>
        <p><b>ETH:  </b>0xb8815ECC810639c1C34813C91e0CDfAe8Cd6E70f</p>
      </div>
      <div className='ltc-container'>
        <img id="ltc" src={'https://i.imgur.com/cmYPDAW.jpg'} alt='ltc-qr-code'/>
        <p><b>LTC:  </b>MGxVjn1HSuTZf7yyq35js1bnK7kNmcFWc5</p>
      </div>
    <div className='btc-container'>
        <img id="btc" src={'https://i.imgur.com/2oyT0vi.jpg'} alt='eth-qr-code'/>
      <p><b>BTC:  </b>36Mn8CPPdoTjgJCvfJfkDeADJcyjkKo2eR</p>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
};

export default Support;