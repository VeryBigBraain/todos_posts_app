import cl from './Loader.module.css';
import BibleLoader from "react-loader-spinner";

const Loader = ({width = 100, height = 100}) => {
  return (
    <BibleLoader
        type="ThreeDots"
        color="#fe6323"
        height={height}
        width={width}
        timeout={-1} //3 secs
      />
  )
}

export default Loader;