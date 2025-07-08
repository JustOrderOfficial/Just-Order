//  Load the API base URL from the environment variable set in .env
//    Fallback to http://localhost:5455 if not provided
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5455';

export default API_BASE_URL;
