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
import useDocumentTitle from '../../helpers/useDocumentTitle';

const ProfileTemplate = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const history = useNavigate();

  useDocumentTitle('Profile');

  const onSubmit = async (values) => {
    try {
        console.log('Values in login', values);
        await AxiosWithoutInterceptor.post('/auth/login/', values);
      await fetchLoginFx(values);
      history('/');
    } catch {
      cogoToast.error('Thông tin tài khoản không chính xác, vui lòng thử  lại');
    }
  };


  return (
    <>
      <div className="main-content">
        {/* Header */}
        <div className="pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{minHeight: '600px',
            backgroundImage: 'url(/assets/images/default-cover.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            zIndex: '0',}}>
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8"></span>
          {/* Header container */}
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">Hello {user.first_name}</h1>
                <p className="text-white mt-0 mb-5">This is your profile page.</p>
                {/* <a href="#!" className="btn btn-info">Edit profile</a> */}
              </div>
            </div>
          </div>
        </div>
        {/* Page content */}
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img src={user.avatar ? process.env.REACT_APP_API_DOMAIN + user.avatar : '/assets/images/default-avatar.png' } className="rounded-circle"/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    {/* <a href="#" className="btn btn-sm btn-info mr-4">Connect</a>
                    <a href="#" className="btn btn-sm btn-default float-right">Message</a> */}
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        {/* <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      {user ? user.first_name : ''} {user ? user.last_name : ''}<span className="font-weight-light">, </span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"></i>{user.city}, {user.country}
                    </div>
                    <div className="h5 mt-4">
                      {/* <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer */}
                    </div>
                    <div>
                      {/* <i className="ni education_hat mr-2"></i>University of Computer Science */}
                    </div>
                    {/* <hr className="my-4"/>
                    <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                    <a href="#">Show more</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                    <div className="col-4 text-right">
                      {/* <a href="#!" className="btn btn-sm btn-primary">Settings</a> */}
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                  <h6 className="heading-small text-muted mb-4">User information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        {/* <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" for="input-username">Username</label>
                            <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value="lucky.jesse"/>
                          </div>
                        </div> */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label" for="input-email">Email address</label>
                            <input type="email" id="input-email" className="form-control form-control-alternative" placeholder={user.email} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" for="input-first-name">First name</label>
                            <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value={user.first_name} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" for="input-last-name">Last name</label>
                            <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value={user.last_name} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4"/>
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">Contact information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group focused">
                            <label className="form-control-label" for="input-address">Address</label>
                            <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value={user.address} type="text"/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label className="form-control-label" for="input-city">City</label>
                            <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value={user.city} />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label className="form-control-label" for="input-country">Country</label>
                            <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value={user.country} />
                          </div>
                        </div>
                        {/* <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" for="input-country">Postal code</label>
                            <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code"/>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <hr className="my-4"/>
                    {/* Description */}
                    {/* <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <label>About Me</label>
                        <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>
                      </div>
                    </div> */}
                    <a href="#!" className="btn btn-info">Update</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTemplate;
