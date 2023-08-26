import Ticker, { NewsTicker } from 'nice-react-ticker';
import '../styles/ticker-styles.css';

const AdTicker = () => {
  return(
    <div className="ticker">
          <Ticker isNewsTicker={true}>
             <NewsTicker id="1"  title="Kickster® - live streaming solutions for total degenerates and streamers  |  Keep track of trending channels without leaving the stream!, quick shortcuts to kick app live stream & chat rooms  |  create your own personalized watch list and check the ban status of any account! @kickster @kickster @kickster" url="https://www.kick.com" />
          </Ticker>
    </div>
  )
};

export default AdTicker;
