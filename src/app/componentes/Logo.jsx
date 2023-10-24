import React, { Component } from 'react';
import styles from '@/styles/index.module.css';

class Logo extends Component {
  render() {
    return (
      <div>
        <img src= "\background\Inkers__club.png" width={320} height={320} className={styles.logo}/>
      </div>
    )
  }
}

export default Logo;