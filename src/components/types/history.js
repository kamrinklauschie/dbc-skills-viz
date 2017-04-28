import PropTypes from 'prop-types';

const history = PropTypes.shape({
  location: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
});

export default history;
