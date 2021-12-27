/* eslint-disable */
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import { Wrap } from '../../components/wrap/Wrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import cogoToast from 'cogo-toast';
import { AxiosWithoutInterceptor } from '../../services/Axios';
import { fetchSignUpFx } from '../../services/Auth.service';
import styles from './style.module.css';
import { icons } from '../../utils/icons';

const RegistrationTemplate = () => {
  const history = useNavigate();

  // form validation rules 
  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required('First Name is required'),
    last_name: Yup.string()
      .required('Last Name is required'),
    email: Yup.string()
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirm_password: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match')
          
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;


  const onSubmitHandler = async (values) => {
    console.log('Values in register', values);
    try {
        console.log('Values in register', values);
        await AxiosWithoutInterceptor.post('/auth/sign-up/', values);
      await fetchSignUpFx(values);
      cogoToast.info('Registered successfully! A mail sent to your mailbox for activation account.', 10000);
      history('/');
    } catch {
      cogoToast.error('Email đã tồn tại');
    }
  };

  return (
    <>
      <div className={styles["container"]}>
        <form className={styles.form} id="member-signup-form" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={styles["form-container"]}>
                <div className={styles["container__header"]}>
                    <img className={styles["container__header-logo"]} src={icons.logo} alt="logo"/>
                    <h1 className={styles["container__header-name"]}>Đăng Ký Thành Viên</h1>
                </div>
                <div className={styles["container__center"]}>
                    <div className={styles["container__center-input"]}>
                        <div className={styles["container__center-input-boxname"]} >
                          <InputText id="first_name" type="text" placeholder="Tên" {...register('first_name')} 
                            title="Nhập tên" 
                            required className={styles["container__center-input--email-one"]}/>
                          <div className={styles["alert first_name-alert hide"]} role="alert"></div>
                        </div>
                        <div className={styles["container__center-input-boxname-one"]}>
                            <InputText id="last_name" type="text" placeholder="Họ" {...register('last_name')} 
                                title="Nhập họ" 
                            required className={styles["container__center-input--email-two"]}/>
                            <div className={styles["alert last_name-alert hide"]} role="alert"></div>
                        </div>
                    </div>
                    <div className={styles["container__center-input"]}>
                      <div>
                        <span className={styles["icon-email"]}><img className={styles["container__center-icon--email far fa-envelope"]} src={icons.envelope_solid}></img></span>
                        <InputText id="email" type="email" placeholder="Email" {...register('email')} 
                          title="Nhập email của bạn" 
                          required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className={styles["container__center-input--email"]}/>
                      </div>
                      {errors.email && <div className="p-error">{errors.password?.message}</div>}
                      <div className={styles["alert email-alert hide"]} role="alert"></div>
                    </div>
                    <div  className={styles["container__center-input"]}>
                        <div>
                          <span className={styles["icon-password"]}>
                            <img className={`${styles["container__center-icon--email"]}`} src={icons.key_solid}></img>
                          </span>
                          <InputText
                            id="password" 
                            className={styles["container__center-input--password"]}
                            type="password"
                            placeholder="Mật khẩu" {...register('password')}
                            pattern=".{8,}" title="Mật khẩu có độ dài 8 kí tự" required 
                          />
                        </div>
                        <div className={styles["alert password-alert hide"]} role="alert"></div>
                        {errors.password && <div className="p-error">{errors.password?.message}</div>}
                    </div>
                    <div  className={styles["container__center-input"]}>
                      <span className={styles["icon-password"]}>
                        <img className={`${styles["container__center-icon--email"]}`} src={icons.key_solid}></img>
                      </span>
                      <InputText
                        id="confirm_password" 
                        className={styles["container__center-input--password"]}
                        type="password"
                        placeholder="Nhập lại mật khẩu" {...register('confirm_password')}
                        pattern=".{8,}" title="Mật khẩu có độ dài 8 kí tự" required 
                      />
                      <div className={styles["alert confirm_password-alert hide"]} role="alert"></div>
                    </div>
                    {errors.confirm_password && <div className="p-error">{errors.confirm_password?.message}</div>}
                    <div className={styles["alert member-profile-alert hide"]} role="alert"></div>
                </div>
                <div className={styles["container__footer"]}>
                    <Button label="Tiếp Tục" type="submit" className={`${styles["container__footer-login"]} ${styles.login}`} />
                    <div className={styles["container__footer-footer"]}>
                        <p className={styles["container__footer-question"]}>
                            Bạn đã có tài khoản?
                        </p>
                        <a href="../login" className={styles["container__footer-link"]}>Đăng nhập!</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </>
  );
};

export default RegistrationTemplate;
