import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './Login.module.css';
import userImage from '../../assets/user.png';

const Login = () => {
  return (
    <Card>
      <img className={classes.img} src={userImage} />
      <p>Welcome</p>
      <form>
        <div className={classes.controlGroup}>
          <div className={classes.email}>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' />
          </div>
          <div className={classes.password}>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' />
          </div>
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
