import React from 'react'
import PropTypes from 'prop-types'

import styles from './bar.module.scss'

const Bar = ({ children }) => {
  return <div className={`${styles.bar}`}>{children}</div>
}

Bar.propTypes = {
  children: PropTypes.any
}

export default Bar
