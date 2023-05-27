'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './shareButton.module.css'
const ShareButton = () => {
  const handleShareButton = () => {
    if (navigator.share) {
      console.log('Congrats! Your browser supports Web Share API')
      navigator
        .share({
          url: 'https://archivx.zip'
        })
        .then(() => {
          console.log('Sharing successful')
        })
        .catch(() => {
          console.log('Sharing failed')
        })
    } else {
      navigator.clipboard?.writeText('https://archivx.zip')
      toast.success('Copiado al portapapeles', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }
  }
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={handleShareButton}
      >
        <span>Compartir</span>
      </button>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  )
}
export default ShareButton
