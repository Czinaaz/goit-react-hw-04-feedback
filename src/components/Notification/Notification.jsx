import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  return isVisible ? <p>{message}</p> : null;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
