import { Container, Card } from "react-bootstrap";
import styles from "../styles/About.module.css";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Container>
        <Card className={styles.about}>
          <Card.Body>
            <Card.Title className="mt-3 mb-4">ClassTechLabについて</Card.Title>
            <div className={styles.aboutDescription}>
              ClassTechLabは、教員・教育委員会が、Techのチカラで教室のイノベーションを加速させるプロジェクトです。
              第1弾として、教員・教育委員会のICT活用実践の事例をDBに集約、検索できるWebサイトを作ります。様々な挑戦・試行錯誤をしている教員・教育委員会のICT活用についての実践事例を集めております。将来的には、実践者がWebサイトを通じて交流・学び合いが出来る仕組みや、自らの実践について内省する機会を提供できることを目指します。
              <div className="mt-5">
                <h3 className="mb-2">WHERE（どこを目指すのか）</h3>
                <div>
                  教員によるICTへの挑戦・試行錯誤を加速させることで、子どもたちが、コロナ禍による学校の休業等に左右されずに学べるようになることを目指す。
                </div>

                <h3 className="mt-4 mb-2">WHAT（何を行うのか）</h3>
                <div>
                  教員がICTを活用した授業づくりについて、実際に挑戦・試行錯誤した実践者と学び合う仕組みをつくる。
                </div>

                <h3 className="mt-4 mb-2">HOW（どう行うのか）</h3>
                <div>
                  教員によるICTへの挑戦・試行錯誤の事例をDBに集約・検索できるようにして、実践事例に気軽にアクセスできるWebサイトをつくる。将来的に、教員が交流出来る仕組みや自らの実践について内省する機会を提供する。
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}
