import React from 'react'
// import styles from "./style"

// Here we are making our reuseable Button for out stats section
const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Get Started
    </button>
  )
}
// Button is done doing

export default Button