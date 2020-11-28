import { Container, Card } from "react-bootstrap";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";
import { getArticlePaths, getArticle } from "../../lib/articles";

export async function getStaticPaths() {
  const paths = getArticlePaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = await getArticle(params.id);
  return {
    props: {
      article,
    },
  };
}

export default function Article({ article }) {
  return (
    <Layout>
      <Container>
        <Card className={styles.content}>
          {article.field.image_url &&
          !article.field.image_url.includes("drive") ? (
            <img
              className="img-fluid mx-auto"
              style={{ height: 300 }}
              src={article.field.image_url}
              alt="thumbnail"
            />
          ) : (
            <img
              className="img-fluid mx-auto"
              style={{ height: 300 }}
              src="../images/dummy.svg"
              alt="thumbnail"
            />
          )}

          <Card.Body className="px-3 px-md-5">
            {/* <p className={styles.date}>2020年5月30日</p> */}
            <Card.Title className={styles.title}>
              {article.field.name}
            </Card.Title>
            <p className={styles.author}>【{article.field.organization}】</p>
            <Card.Text className={styles.description}>
              {article.field.detail}
            </Card.Text>
            <div className={styles.author}>【詳細URL】</div>
            <div className={styles.url}>
              <a href={article.field.url} target="_blank">
                {article.field.url}
              </a>
            </div>
            <div className="mt-3">
              {article.field.tool ? (
                <>
                  {article.field.tool.map((tool, key) => (
                    <button key={key} className="btn tag btn-sm">
                      {tool}
                    </button>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>

            {/* <div className="social-button mt-5 ml-1 row">
              <div className="icon-only twitter-tweet mr-2">
                <a href="" target="_blank" rel="nofollow"></a>
              </div>
              <div className="icon-only facebook-share mr-2">
                <a href="" target="_blank" rel="nofollow"></a>
              </div>
              <div className="icon-only line-send">
                <a href="" target="_blank" rel="nofollow"></a>
              </div>
            </div> */}
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}
