import React, { Component } from 'react';
import styles from '@/styles/index.module.css';

class Logo extends Component {
  render() {
    return (
      <div>
        <img src= "\icons\logo-inkersclub-light.svg" className={styles.logo}/>
      </div>
    )
  }
}

export default Logo;