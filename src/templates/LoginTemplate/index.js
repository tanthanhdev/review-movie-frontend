/* eslint-disable */
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import { Wrap } from '../../components/wrap/Wrap';
import { useForm } from 'react-hook-form';
import cogoToast from 'cogo-toast';
import { AxiosWithoutInterceptor } from '../../services/Axios';
import { fetchLoginFx } from '../../services/Auth.service';
import styles from './style.module.css';
import { icons } from '../../utils/icons';
import { loginEvent } from '../../services/Auth.service';

const LoginTemplate = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const history = useNavigate();

  const onSubmit = async (values) => {
    try {
        console.log('Values in login', values);
        await AxiosWithoutInterceptor.post('/auth/login/', values);
      await fetchLoginFx(values);
      loginEvent();
      history('/profile');
    } catch {
      cogoToast.error('Thông tin tài khoản không chính xác, vui lòng thử  lại');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} id="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["form-container"]}>
            <div className={styles.container__header}>
              <img className={styles["container__header-logo"]} src={icons.logo} alt="logo"/>
              <h1 className={styles["container__header-name"]}>Đăng nhập</h1>
            </div>
            <div className={styles.container__center}>
              <div className={styles["container__center-input"]}>
                <span className={styles["icon-email"]}>
                  <img className={`${styles["container__center-icon--email"]}`} src={icons.envelope_solid}></img>
                </span>
                <InputText id="email" type="email" placeholder="Email" {...register('email', { required: true })} 
                  title="Vui lòng nhập nhập đúng email" 
                  required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className={styles["container__center-input--email"]}/>
                {errors.email && <div className="p-error">Email is required</div>}
              </div>
              <div  className={styles["container__center-input"]}>
                <span className={styles["icon-password"]}>
                  <img className={`${styles["container__center-icon--password"]}`} src={icons.key_solid}></img>
                </span>
                <InputText
                  id="password" 
                  className={styles["container__center-input--password"]}
                  type="password"
                  placeholder="Mật khẩu" {...register('password', { required: true })}
                  pattern=".{8,}" title="Mật khẩu có độ dài 8 kí tự" required 
                />
                {errors.password && <div className="p-error">Password is required</div>}
              </div>
              {/* Alert */}
              <div className="alert alert-danger login-alert hide" role="alert"></div>
              {/* Alert end */}
              <h2 className={styles["container__header-qmk"]}>
                <a href="forgot-password" className={`${styles["forgot-password"]} ${styles["dec-none"]}`}>
                  Quên mật khẩu?
                </a>
              </h2>
            </div>
            <div className="container__footer">
              <Button label="Đăng Nhập" type="submit" className={`${styles["container__footer-login"]} ${styles.login}`} />
              <div className={styles["container__footer-footer"]}>
                <p className={styles["container__footer-question"]}>
                  Bạn chưa có tài khoản?
                </p>
                <a href="signup" className={`${styles["sign-up"]} ${styles["container__footer-link"]}`}>
                  Đăng ký!
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginTemplate;
