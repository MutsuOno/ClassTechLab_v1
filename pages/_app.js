import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../styles/globals.css";
import { ArticleContext, useArticleContext } from "../context/articleContext";

function MyApp({ Component, pageProps }) {
  return (
    <ArticleContext.Provider value={useArticleContext()}>
      <Component {...pageProps} />
    </ArticleContext.Provider>
  );
}

export default MyApp;
