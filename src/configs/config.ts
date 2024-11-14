const config = {
  BASE_URL_API: globalThis.importMetaEnv
    ? globalThis.importMetaEnv.VITE_BASE_URL_API
    : import.meta.env.VITE_BASE_URL_API,
};

export default config;
