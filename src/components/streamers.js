import axios from "axios";

const Streamers = () => {
 let urls = [
  axios.get('https://kick.com/api/v1/channels/xqc'),
  axios.get('https://kick.com/api/v1/channels/adinross'),
  axios.get('https://kick.com/api/v1/channels/brucedropemoff'),
  axios.get('https://kick.com/api/v1/channels/iceposeidon'),
  axios.get('https://kick.com/api/v1/channels/Eddie'),
  axios.get('https://kick.com/api/v1/channels/sam'),
  axios.get('https://kick.com/api/v1/channels/Ludwig'),
  axios.get('https://kick.com/api/v1/channels/imjoel3004'),
  axios.get('https://kick.com/api/v1/channels/garydavid'),
  // axios.get('https://kick.com/api/v1/channels/johnnysomali'),
];
  return urls;
};

export default Streamers;