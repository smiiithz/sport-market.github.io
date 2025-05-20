import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [user, setUser] = useState({});
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);
  const [view, setView] = useState('profile');
  const navigate = useNavigate();

  useEffect(() => {
    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedCurrentUser) {
      setUser(storedCurrentUser);
      setIsLoggedIn(true);
    }
  }, []);

  const validateLogin = (username) => /^[A-Za-z][A-Za-z0-9_]{4,}$/.test(username);
  const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerEmail && registerUsername && registerPassword) {
      if (!validateEmail(registerEmail)) {
        alert('Введите корректный E-mail.');
        return;
      }
      if (!validateLogin(registerUsername)) {
        alert('Логин должен быть не менее 5 символов.');
        return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.some(u => u.username === registerUsername)) {
        alert('Такой логин уже используется.');
        return;
      }

      const newUser = {
        email: registerEmail,
        username: registerUsername,
        password: registerPassword,
        notificationSetting: 'Включены',
      };

      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      alert('Регистрация успешна!');
      setRegisterEmail('');
      setRegisterUsername('');
      setRegisterPassword('');
    } else {
      alert('Заполните все поля.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(
      (u) => u.username === loginUsername && u.password === loginPassword
    );

    if (foundUser) {
      setIsLoggedIn(true);
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
    } else {
      alert('Неверный логин или пароль.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginUsername('');
    setLoginPassword('');
    setUser({});
    setView('profile');
    localStorage.removeItem('currentUser');
    navigate('/profile');
  };

  const handleNotificationChange = (e) => {
    const newSetting = e.target.value;
    const updatedUser = { ...user, notificationSetting: newSetting };
    setUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u =>
      u.username === updatedUser.username ? updatedUser : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  if (isPasswordRecovery) {
    return (
      <div className="wrapper-auth">
        <div className="form-box">
          <form className="form">
            <span className="title">Восстановление пароля</span>
            <span className="subtitle">Введите ваш E-mail</span>
            <div className="form-container">
              <input
                type="email"
                className="input"
                placeholder="E-mail"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <button onClick={() => alert('Ссылка отправлена!')}>Отправить</button>
            <button onClick={() => setIsPasswordRecovery(false)}>Назад</button>
          </form>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="wrapper-auth">
        <div className="form-box">
          <form className="form">
            <span className="title">Авторизация</span>
            <span className="subtitle">Введите логин и пароль:</span>
            <div className="form-container">
              <input
                type="text"
                className="input"
                placeholder="Логин"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
              <input
                type="password"
                className="input"
                placeholder="Пароль"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Войти</button>
            <div className="form-section">
              <p>Нет аккаунта? Зарегистрируйтесь:</p>
            </div>
            <div className="form-container">
              <input
                type="email"
                className="input"
                placeholder="E-mail"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
              <input
                type="text"
                className="input"
                placeholder="Логин"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
              />
              <input
                type="password"
                className="input"
                placeholder="Пароль"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button onClick={handleRegister}>Зарегистрироваться</button>
            <div className="form-section">
              <button className="link-button" onClick={() => setIsPasswordRecovery(true)}>
                Забыли пароль?
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (view === 'settings') {
    return (
      <div className="wrapper-auth">
        <div className="form-box">
          <div className="form">
            <span className="title">Настройки аккаунта</span>
            <div className="form-container">
              <label>Имя пользователя:</label>
              <input className="input" value={user.username} disabled />

              <label>Email:</label>
              <input className="input" value={user.email} disabled />

              <label>Сменить пароль:</label>
              <input className="input" type="password" placeholder="Новый пароль" disabled />

              <label>Уведомления:</label>
              <select
                className="input"
                value={user.notificationSetting || 'Включены'}
                onChange={handleNotificationChange}
              >
                <option value="Включены">Включены</option>
                <option value="Отключены">Отключены</option>
              </select>
            </div>
            <button onClick={() => setView('profile')}>Назад</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper-auth">
      <div className="form-box">
        <div className="form">
          <span className="title">Добро пожаловать, {user.username}!</span>
          <div className="form-container-profile">
            <button className="input" onClick={() => navigate('/orders')}>Мои заказы</button>
            <button className="input" onClick={() => setView('settings')}>Настройки аккаунта</button>
          </div>
          <button onClick={handleLogout}>Выйти</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;