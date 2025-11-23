const localUrl = "";
const prodUrl = "${baseUrl}";

// Determine the environment
// const baseUrl = process.env.NODE_ENV === "production" ? prodUrl : localUrl;
const baseUrl=localUrl;

export { baseUrl };