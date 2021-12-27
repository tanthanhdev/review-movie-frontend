/* eslint-disable */
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import { Wrap } from '../../components/wrap/Wrap';
import { useForm } from 'react-hook-form';
import cogoToast from 'cogo-toast';
import { AxiosWithoutInterceptor } from '../../services/Axios';
import { fetchSignUpFx } from '../../services/Auth.service';
import styles from './style.module.css';
import { icons } from '../../utils/icons';
import useDocumentTitle from '../../helpers/useDocumentTitle';

const ResetPasswordTemplate = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const history = useNavigate();

  useDocumentTitle('Reset Password');

  const onSubmit = async (values) => {
    try {
        console.log('Values in register', values);
        await AxiosWithoutInterceptor.post('/auth/sign-up/', values);
      await fetchSignUpFx(values);
      history('/');
    } catch {
      cogoToast.error('Email đã tồn tại');
    }
  };

  return (
    <>
      <div className={styles.container}>
          <form action="" className={styles["form"]} id="reset-password-form">
              <div className={styles["form-container"]}>
                  <div className={styles["container__header"]}>
                      <img className={styles["container__header-logo"]} src="../assets/img/logo-jobsearchvn.png" alt="logo"/>
                      <h1 className={styles["container__header-name"]}>Thay Đổi Mật Khẩu</h1>
                      <h1 className={styles["container__header-name-two"]}>Vui Lòng Nhập Mật Khẩu Mới</h1>
                  </div>
                  <div className={styles["container__center"]}>
                      <div className={styles["container__center-input"]}>
                          <span className={styles["icon-password-2"]}><img
                                  className={styles["container__center-icon--email"]} src={icons.envelope_solid}></img></span>
                          <input id="password" name="password" type="password" pattern=".{8,}" title="Mật khẩu có độ dài 8 kí tự" required placeholder="Mật Khẩu mới"
                              className={styles["container__center-input--email"]}/>
                      </div>
                      <div className={styles["container__center-input"]}>
                          <span className={styles["icon-password"]}><img
                                  className={styles["container__center-icon--password"]} src={icons.envelope_solid}></img></span>
                          <input id="confirm_password" name="confirm_password" type="password" pattern=".{8,}" title="Mật khẩu có độ dài 8 kí tự" required placeholder="Nhập lại mật khẩu mới"
                              className={styles["container__center-input--password"]}/>
                      </div>
                      <div className={styles["alert forgot-password-alert hide"]} role="alert"></div>
                  </div>
                  <div className={styles["container__footer"]}>
                      <button className={styles["container__footer-login"]} type="submit">
                          Thay Đổi  <i className={styles["fas fa-redo-alt fa-spin"]} aria-hidden="true"></i>
                      </button>
                      <div className={styles["container__footer-footer"]}>
                          <p className={styles["container__footer-question"]}>
                              Bạn đã nhớ lại?
                          </p>
                          <a href="../login/" className={styles["container__footer-link"]}>Đăng nhập!</a>
                      </div>
                  </div>
              </div>

          </form>
      </div>
    </>
  );
};

export default ResetPasswordTemplate;
