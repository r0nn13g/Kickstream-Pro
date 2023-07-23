import Ticker, { NewsTicker } from 'nice-react-ticker';
import '../styles/ticker-styles.css'
// import icon from './news-icon.png'; // add images, please make sure they can be set as src


const AdTicker = () => {
  return(
    <div className="ticker">
          <Ticker isNewsTicker={true}>
            <NewsTicker id="1"  title="KICKSTER - live streaming solutions for futuristic beings   |   create your own personalized watch list at www.kicksta.netlify.app/create   |   BruceDropEmOff & xQc sign 2yr / $100M deal with Kick   |   who is the next big signing? | designed by r0nn13g" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" />
            {/* <NewsTicker id="1"  title="Create your own personalized watch list at https://kicksta.netlify.app/create" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" />
            <NewsTicker id="2"  title="BruceDropEmOff & xQc signs $100M deal with Kick" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" />
            <NewsTicker id="1"  title="Whos the next big signing?" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed" />
             */}
            </Ticker>
    </div>
  )
}

export default AdTicker;
