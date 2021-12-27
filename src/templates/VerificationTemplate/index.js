/* eslint-disable */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
// import { Wrap } from '../../components/wrap/Wrap';
import cogoToast from 'cogo-toast';
import { AxiosWithoutInterceptor } from '../../services/Axios';
import { fetchActiveAccountFx } from '../../services/Auth.service';
import styles from './style.module.css';
import useDocumentTitle from '../../helpers/useDocumentTitle'

const VerificationTemplate = () => {
    const history = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const [data, setData] = useState('');
    const [value, setValue] = useState({
        access_token: '' || queryParams.get('access_token'),
    });

    useDocumentTitle('Active Account')

    const activeAccount = (value) => {
        fetchActiveAccountFx(value)
        .then(response => {
            if (response === 453) {
                setData("The account is activated already. Please login!");
            } else if (response === 455) {
                setData("Token is incorrect or expired!");
            } else {
                setData(response.data);
            }
        })
        .catch(e => {
            console.log(e);
        });
    };
   
    useEffect(() => {
        activeAccount(value); 
    }, [value]);

  return (
    <>
     <div className={styles.wrapper} >
         {data}
        <div>
            <a href="/">Home</a>
        </div>
    </div>
    </>
  );
};

export default VerificationTemplate;
