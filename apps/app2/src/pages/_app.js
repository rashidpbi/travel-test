import "../../index.css";
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
      <Component {...pageProps} />
   
  );
}
