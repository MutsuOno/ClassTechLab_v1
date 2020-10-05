import { Container, Card } from "react-bootstrap";
import styles from "../styles/About.module.css";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Container>
        <Card className={styles.about}>
          <Card.Body>
            <Card.Title className="mt-3 mb-4">
              <h2>ClassTechLabについて</h2>
            </Card.Title>
            <div className={styles.aboutDescription}>
              臨時休校への対応やGIGAスクールで教室はどんな風に変わるのか。
              <br />
              日本中の先生たちと一緒に、教室のEdTechに挑戦しませんか。
              <div className="mt-5">
                <h3 className="mb-1">EdTechに挑戦している先生たちの困りごと</h3>
                <div className={styles.box}>
                  困りごと1：
                  <br />
                  <div className={styles.boxText}>
                    SNSでは、情報が流れていってしまい、後から検索ができない。
                  </div>
                </div>
                <div className={styles.box}>
                  困りごと2：
                  <br />
                  <div className={styles.boxText}>
                    具体的な実践事例が少なくて、新たに挑戦するハードルが高い。
                  </div>
                </div>
                <div className={styles.box}>
                  困りごと3：
                  <br />
                  <div className={styles.boxText}>
                    一緒に頑張る仲間が欲しい。
                  </div>
                </div>

                <h3 className="mt-5 mb-2">ClassTech Labでできること</h3>
                <div>
                  私たちは、先生たちのEdTechへの挑戦・試行錯誤が加速する仕組みをつくることで、子どもたちが、いつでも、どこでもアクティブに学べるようになることを目指します。
                  EdTechについて探求したり、新な試みを実験したり、沢山の挑戦をしていく仲間と出会える仕組みになっていくのが目標です。
                  <br />
                  日本中で教室のEdTechに取り組んでいる先生たちの実践事例を気軽に検索できたり、先生たちが交流できるようにしていていけるようになったらいいなと思っています。
                </div>

                <h3 className="mt-5 mb-1">ClassTech Labが提案する解決方法</h3>
                <div className={styles.box}>
                  Step1：
                  <br />
                  <div className={styles.boxText}>
                    日本中の先生の、EdTechに挑戦した実践事例を検索できるようにする
                  </div>
                </div>

                <div className={styles.box}>
                  Step2：
                  <br />
                  <div className={styles.boxText}>
                    挑戦している先生同士が出会ったり、交流したりできるようにする
                  </div>
                </div>
                <div className={styles.box}>
                  Step3：
                  <br />
                  <div className={styles.boxText}>
                    先生たちが、新しい試みの実験をしたり、挑戦するオンライン上の実験室（ラボ）を作る。
                  </div>
                </div>

                <h3 className="mt-5 mb-2">運営</h3>
                <div>
                  ClassTech Lab実行委員会
                  <br />
                  【発起人】神尾真弓（デジタルハリウッド大学大学院 Effective
                  learning labo 研究員）
                  <br />
                  ※Code for JapanのSocial Hack Dayを中心に活動を進めています。
                </div>
              </div>
              <div className="mt-4">
                <a href="https://classtech-lab.com">
                  <img
                    src="images/banner.svg"
                    className="img-fluid mx-auto py-2"
                    alt="ClassTech Lab"
                  />
                </a>
                <br />
                <a href="https://www.mext.go.jp/a_menu/ikusei/gakusyushien/index_00001.htm">
                  <img
                    src="images/mext-banner.jpg"
                    className="img-fluid mx-auto py-2"
                    alt="子供の学び応援サイト"
                  />
                </a>
                <br />
                <a href="https://www.learning-innovation.go.jp/covid_19/">
                  <img
                    src="images/learning-innovation-banner.png"
                    className="img-fluid mx-auto py-2"
                    alt="学びを止めない未来の教室"
                  />
                </a>
                <br />
                <img
                  src="images/manatome-logo.jpg"
                  className="img-fluid mx-auto py-2"
                  style={{ maxWidth: "180px" }}
                  alt="マナビを止めるな！ロゴ"
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}
