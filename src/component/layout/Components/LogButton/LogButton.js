import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'primereact/button';
import styles from './LogButton.module.css';
// import { logoutEvent } from '../../../../services/Auth.service';
import { SplitButton } from 'primereact/splitbutton';

const LogButton = ({ isLogined }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useNavigate();
  const label = isLogined ? 'LOG OUT' : 'LOG IN';
  const handleClick = useCallback(() => {
    const elms = document.querySelectorAll(".navbar-nav .dropdown-menu");
    if (isLogined) {
      // logoutEvent();
      Array.from(elms).forEach((x) => {
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
      })
      // history('/profile');
    } else {
      history('/login');
    }
  }, []);

  return (
    <>
      {isLogined && (
        <div 
          onClick={handleClick}
          className="nav-link pr-0" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="media align-items-center">
              <span className="avatar avatar-sm rounded-circle">
              <img alt="Image placeholder" src={user.avatar ? process.env.REACT_APP_API_DOMAIN + user.avatar : '/assets/images/default-avatar.png' }/>
              </span>
              <div className="media-body ml-2 d-lg-block">
              <span className="mb-0 text-sm  font-weight-bold">{user.last_name ? user.last_name : ''} {user.first_name ? user.first_name : ''}</span>
              </div>
          </div>
        </div>
      )}
      {!isLogined && (
        <div className={styles["button-demo"]} >
          <Button onClick={handleClick} label={label} />
        </div>
      )}
    </>
  );
};

export default LogButton;
