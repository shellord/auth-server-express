import React from 'react'
import styles from './Login.module.css'
import Layout from '../../components/Layout/Layout'

const Login: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.header}>Login</h1>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <input type='submit' className={styles.button} value='Log in' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
