import Button from '../../sharedComponents/Button/Button';
import Container from '../Container/Container';
import { useDevice } from '../../hooks/useDevice';

import styles from './About.module.css';

const About = () => {
  const { isDesctopDevice } = useDevice();

  return (
    <>
      <div className={styles.aboutContainer}>
        <Container>
          <h2 className={styles.title}>Become a five-star professional!</h2>
          <p className={styles.text}>
            Join the growing community of professional icarians. Use the iCaria
            professional services to launch and grow your business, manage your
            clients, organize your schedule, and simplify your payments. With
            iCaria certification, your customers will be assured safe and secure
            access to services.
          </p>
          {(!isDesctopDevice && (
            <Button
              style={{
                width: '192px',
                height: '36px',
                fontSize: '14px',
                lineHeight: '20px',
              }}
            />
          )) || (
            <Button
              style={{
                width: '204px',
                height: '48px',
                fontSize: '18px',
                lineHeight: '28px',
              }}
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default About;
