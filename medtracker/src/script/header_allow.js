const headers = {
    'Access-Control-Allow-Credentials':true,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : process.env.REACT_APP_EXPRESS_ADDRESS,
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
export default headers;