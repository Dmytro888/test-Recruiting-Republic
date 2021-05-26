import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../sharedComponents/Button/Button';
import styles from './RequestForm.module.css';
import { useDevice } from '../../hooks/useDevice';

const RequestForm = () => {
  const { isDesctopDevice } = useDevice();

  const schema = Yup.object({
    name: Yup.string()
      .min(3)
      .required('*Name is required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('*Email is required'),
    birthDate: Yup.string()
      .matches(/^\d{2}([-])\d{2}\1\d{4}$/, 'format example dd-mm-yyyy')
      .required('*Date is required'),
    message: Yup.string(),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          birthDate: '',
          message: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <Form className={styles.formContainer}>
          <Field
            className={styles.inputForm}
            name='name'
            type='text'
            placeholder='Name*'
          />
          <ErrorMessage className={styles.error} component='span' name='name' />

          <Field
            className={styles.inputForm}
            name='email'
            type='email'
            placeholder='Email*'
          />
          <ErrorMessage
            className={styles.error}
            component='span'
            name='email'
          />
          <Field
            className={styles.inputForm}
            name='birthDate'
            type='text'
            placeholder='Date of Birth*'
          />
          <ErrorMessage
            className={styles.error}
            component='span'
            name='birthDate'
          />
          <Field
            className={styles.inputForm}
            name='message'
            type='text'
            placeholder='Message*'
          />
          <ErrorMessage
            className={styles.error}
            component='span'
            name='message'
          />

          {(!isDesctopDevice && (
            <Button
              type='submit'
              style={{
                width: '192px',
                height: '36px',
                marginTop: '32px',
                fontSize: '14px',
                lineHeight: '20px',
              }}
            />
          )) || (
            <Button
              type='submit'
              style={{
                width: '183px',
                height: '48px',
                marginTop: '46px',
                fontSize: '18px',
                lineHeight: '28px',
              }}
            />
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default RequestForm;
