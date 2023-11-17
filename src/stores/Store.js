import { makeObservable, observable, action } from 'mobx';

const createAuthStore = () => {
  const store = {
    isAuthenticated: false,
    user: null,

    login: action(function (username, password) {
      if (username === 'demo' && password === 'password') {
        this.isAuthenticated = true;
        this.user = { username };
      }
    }),

    logout: action(function () {
      this.isAuthenticated = false;
      this.user = null;
    }),
  };

  // Use makeObservable to define observables and actions
  makeObservable(store, {
    isAuthenticated: observable,
    user: observable,
    login: action,
    logout: action,
  });

  return store;
};

export default createAuthStore;