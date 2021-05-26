import Container from '../Container/Container';
import RequestImg from '../../media/img/ContactUs.png';
import RequestForm from '../RequestForm/RequestForm';
import styles from './RequestSection.module.css';

const RequestSection = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.requestInfoBox}>
          <img className={styles.requstImg} src={RequestImg} alt='img' />
          <div className={styles.descriptionBox}>
            <h2 className={styles.requstTitle}>Request info</h2>
            <p className={styles.requstText}>
              Got a question? Need to see a demo? Want to start your free trial
              subscription? We'd love to hear from you! Contact us and we will
              get back to you shortly.
            </p>
          </div>
        </div>
        <RequestForm />
      </div>
    </Container>
  );
};

export default RequestSection;
