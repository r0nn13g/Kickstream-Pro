import Ticker, { NewsTicker } from 'nice-react-ticker';
import '../styles/ticker-styles.css';

const AdTicker = () => {
  return(
    <div className="ticker">
          <Ticker isNewsTicker={false}>
            <NewsTicker id="2"  title="Kickster® - live streaming solutions for futuristic beings   |   create your own personalized watch list   |   Keep track of trending channels without leaving the stream!" url="https://www.kick.com" />
          </Ticker>
    </div>
  )
};

export default AdTicker;
