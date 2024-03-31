import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import propTypes from 'prop-types';

function ProtectRoute({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default ProtectRoute;

ProtectRoute.propTypes = {
  children: propTypes.node.isRequired,
};
