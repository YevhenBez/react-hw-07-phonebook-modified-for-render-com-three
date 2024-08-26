import PropTypes from 'prop-types';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = ({ message }) => {
  return (
    <div>
      <InfinitySpin width="200" color="#4fa94d" />
      {message && <p>{message}</p>}
    </div>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
