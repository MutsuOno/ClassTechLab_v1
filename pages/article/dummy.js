import { Container, Card } from "react-bootstrap";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";

export default function Dummy() {
  return (
    <Layout>
      <Container>
        <Card className={styles.content}>
          <img
            className={styles.cardImg}
            src="../images/dummy.svg"
            alt="thumbnail"
          />
          <Card.Body className="px-3 px-md-5">
            <p className={styles.date}>2020年5月30日</p>
            <Card.Title className={styles.title}>
              Keep learning for the future!
              〜休校中の子供たちの学びを進める軌跡と取り組み〜
            </Card.Title>
            <p className={styles.author}>【敬愛中学校・敬愛高等学校】</p>
            <Card.Text className={styles.description}>
              福岡県北九州市にある敬愛中学校・敬愛高等学校では、昨年度より中学1年生にiPad（LTEモデル）を配布し、『一人一台タブレット』の導入を始めている。3月から休校措置がとられる事になり、生徒たちのためにできることはないかと考え、朝のHR、オンラインによる授業（50分×4時間）や課題のやりとりをすることを決めた。
            </Card.Text>
            <div className={styles.author}>【詳細URL】</div>
            <div className={styles.url}>
              <a href="">
                http://www.dokyoi.pref.hokkaido.lg.jp/hk/gky/gks/dosankomanabiouen_page.htm
              </a>
            </div>
            <div className="mt-5">
              <button className="btn btnTag btn-sm">授業設計</button>
              <button className="btn btnTag2 btn-sm">小学校</button>
              <button className="btn btnTag3 btn-sm">SchoolTact</button>
              <button className="btn btnTag3 btn-sm">chromebook</button>
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
