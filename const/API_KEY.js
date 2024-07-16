export const API_KEY = returnApiKey();

function returnApiKey() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  } else {
    // return "http://codigopatron.com.ar";
    return "https://codigo-patron-backend-production.up.railway.app";
  }
}
