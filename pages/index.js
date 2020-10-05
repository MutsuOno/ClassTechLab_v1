import { useState, useEffect, useContext } from "react";
import { ArticleContext } from "../context/articleContext";
import { Container, Card } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { getAllArticle, getSearchArticles } from "../lib/articles";

export default function Home() {
  const [articles, setArticle] = useState([]);
  const { searchWord, setWord } = useContext(ArticleContext);
  const { category, setCategory } = useContext(ArticleContext);
  const { school, setSchool } = useContext(ArticleContext);
  const { storedArticles, setStoredArticles } = useContext(ArticleContext);

  const showAll = async () => {
    setArticle(await getAllArticle());
  };

  const search = async (keyword, category, school_type) => {
    event.preventDefault();
    const searchArticles = await getSearchArticles(
      keyword,
      category,
      school_type
    );
    setArticle(searchArticles);
    // 保持
    setWord(keyword);
    setCategory(category);
    setSchool(school_type);
    setStoredArticles(searchArticles);
  };

  const handleRecruit = () => {
    open("https://forms.gle/NqqW6eaULrXhMeuC8", "_blank");
  };

  useEffect(() => {
    if (storedArticles.length == 0) {
      document.searchForm.keyword.value = "";
      document.searchForm.select1.value = "すべて";
      document.searchForm.select2.value = "すべて";
      showAll();
    } else {
      document.searchForm.keyword.value = searchWord;
      document.searchForm.select1.value = category;
      document.searchForm.select2.value = school;
      setArticle(storedArticles);
    }
  }, []);

  return (
    <Layout>
      <Container>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>
              <img
                src="/images/title-main.svg"
                alt="ClassTechLab"
                className="img-fluid mx-auto d-block pt-5"
              />
            </h1>
            <p className="header-text text-center mt-4">
              Techのチカラで教室のイノベーションを加速させるプロジェクト
            </p>
            <div className="col text-center">
              <button
                className="btn btn-recruit col-sm-8 py-2 py-md-3 mt-2 mt-md-4"
                onClick={handleRecruit}
              >
                掲載事例募集中！
              </button>
            </div>
          </header>

          <section className={styles.search}>
            <h2 className="pb-2 ml-3">事例を検索</h2>

            <form className="form-horizontal" name="searchForm">
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    name="keyword"
                    placeholder="キーワードを入力（例：zoom ）"
                  />
                </div>
              </div>

              <div className="form-group">
                <label
                  className="col-sm-12 control-label"
                  htmlFor="InputSelect"
                >
                  カテゴリで絞り込み
                </label>
                <div className="col-sm-12">
                  <select
                    data-toggle="select"
                    className="form-control select select-default"
                    name="select1"
                  >
                    <option>すべて</option>
                    <option>授業設計</option>
                    <option>学校運営</option>
                    <option>自治体の取り組み</option>
                    <option>その他</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label
                  className="col-sm-12 control-label"
                  htmlFor="InputSelect"
                >
                  学校識別で絞り込み
                </label>
                <div className="col-sm-12">
                  <select
                    data-toggle="select"
                    className="form-control select select-default"
                    name="select2"
                  >
                    <option>すべて</option>
                    <option>幼稚園</option>
                    <option>小学校</option>
                    <option>中学校</option>
                    <option>高校</option>
                    <option>特別支援</option>
                    <option>大学</option>
                    <option>その他</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-12 pt-2">
                  <button
                    type="submit"
                    className="btn btn-block btn-search"
                    onClick={() => {
                      const form = document.searchForm;
                      search(
                        form.keyword.value,
                        form.select1.value,
                        form.select2.value
                      );
                    }}
                  >
                    <span className="fa fa-search"></span> 検索
                  </button>
                  <div className="mt-4 text-center count-text">
                    {articles.length}件見つかりました
                  </div>
                </div>
              </div>
            </form>
          </section>

          <section className={styles.searchResult}>
            {articles.map((article) => (
              <Card className="mt-4" key={article.field.id}>
                <div className="row no-gutters">
                  <div className="col-md-8">
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.title}>
                        <Link
                          href="/article/[id]"
                          as={`article/${article.field.id}`}
                        >
                          <a>{article.field.name}</a>
                        </Link>
                      </Card.Title>
                      <p className={styles.author}>
                        【{article.field.organization}】
                      </p>
                      <Card.Text className={styles.description}>
                        {article.field.detail.substr(0, 150)}...
                      </Card.Text>
                      <div className="mt-4">
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
                    </Card.Body>
                  </div>
                  <div className="col-md-4">
                    <img src="images/dummy.svg" className="card-img" alt="" />
                  </div>
                </div>
              </Card>
            ))}
          </section>
        </div>
      </Container>
    </Layout>
  );
}
