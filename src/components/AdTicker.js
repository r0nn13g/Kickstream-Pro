import Ticker, { NewsTicker } from 'nice-react-ticker';
import '../styles/ticker-styles.css';

const AdTicker = () => {
  return(
          <Ticker style={{backgroundColor: "var(--green-elements)" }} isNewsTicker={true} slideSpeed={9}>
             <NewsTicker id="1"  title="Monitor real viewer count 🤖" />
             <NewsTicker id="2"  title="Check who's banned 🔨🔨🔨" />
             <NewsTicker id="5"  title="Created by Scriptedagain 🫠" url="https://www.kick.com/scriptedagain"/>
          </Ticker>
  )
};

export default AdTicker;
