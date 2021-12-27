import { createStore, createEffect, createEvent } from 'effector';
// import { TParamLogin, TParamSignUp, TToken } from '../types';
import { AxiosWithoutInterceptor } from './Axios';

export const fetchResetPassFx = createEffect(async (email) => {
  try {
    const response = await AxiosWithoutInterceptor.post('/auth/password-reset/', {
      email,
    });

    if (response.status === 200 || response.status === 201) {
      return response.status;
    }
  } catch (err) {
    return err;
  }
});

export const fetchSignUpFx = createEffect(async ({ first_name, last_name, email, password }) => {
  try {
    const response = await AxiosWithoutInterceptor.post('/auth/sign-up/', {
      first_name,
      last_name,
      email,
      password,
    });

    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
    if (response.status === 450) {
      return false;
    }
  } catch (err) {
    return err.response.status;
  }
});

export const fetchActiveAccountFx = createEffect(
  async ({ access_token }) => {
    try {
      const response = await AxiosWithoutInterceptor.post('/auth/active-account/', {
        access_token,
      });
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
    } catch (err) {
      return err.response.status;
    }
  },
);

export const fetchLoginFx = createEffect(async ({ email, password }) => {
  try {
    const response = await AxiosWithoutInterceptor.post('/auth/login/', {
      email,
      password,
    });

    if (response.status === 200 || response.status === 201) {
      const { access_token, refresh, user } = response.data.results;
      const userObject = {
        'id' : user.id,
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "is_active": user.is_active,
        "avatar": user.avatar,
        "address": user.address,
      }
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh', refresh);
      localStorage.setItem('user', JSON.stringify(userObject));

      return response.data.results;
    }
  } catch (err) {
    return err.response.status;
  }
});

export const checkEmailExist = createEffect(async (email) => {
  try {
    const response = await AxiosWithoutInterceptor.post('/auth/email-exists/', {
      email,
    });

    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (err) {
    return err.response.status;
  }
});

export const loginEvent = createEvent();

const login = (data) => {
  const { access_token, refresh } = data;

  localStorage.setItem('access_token', access_token);
  localStorage.setItem('refresh', refresh);

  return data;
};

export const logoutEvent = createEvent();

const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh');

  return { access_token: '', refresh: '' };
};

export const $authStore = createStore({
  access_token: '',
  refresh: '',
})
  .on(fetchLoginFx.doneData, (_, category) => category)
  .on(logoutEvent, logout)
  .on(loginEvent, login);


export const fetchTopEmployersFx = createEffect(async () => {
  try {
    const response = await AxiosWithoutInterceptor.get('/public/employers/');

    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (err) {
    // err;
  }
});

export const $signUpStore = createStore({}).on(
  fetchSignUpFx.doneData,
  (_, info) => info,
);
