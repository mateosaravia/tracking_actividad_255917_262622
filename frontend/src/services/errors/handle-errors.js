const handleError = (error) => {
    console.log(error);
    if (error.code === 'ERR_NETWORK') {
      console.error('500 Internal Server Error');
      throw new Error('500 Internal Server Error. ERR_CONNECTION_REFUSED');
    }
    return error;
  };
  
  export default handleError;