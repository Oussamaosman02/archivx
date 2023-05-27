import Image from 'next/image'
import styles from './page.module.css'
import ShareButton from './shareButton'

export default function Home () {
  return (
    <main className={styles.main}>
      <h1>Cuidao!</h1>
      <a href='https://zonabit.net/' target='_blank' rel='noreferrer noopener' className={styles.logo}>
        <Image src='/zb.png' alt='Logo' fill />
      </a>
      <div className={styles.description}>
        <p>Esto no es un archivo <b>.zip</b>!</p>
        <p>Esto es una web.</p>
      </div>
      <div className={`${styles.what} ${styles.info}`}>
        <h2>¿Que ha pasado?</h2>
        <p>Existe un nombre de dominio con la extension <b>.zip</b> y hay hackers que lo pueden usar para el mal.</p>
        <p>Como hacerte creer que vas a descargar un zip de un archivo o película y descargarte un virus malicioso</p>
      </div>
      <div className={`${styles.why} ${styles.info}`}>
        <h2>¿Porqué ocurre esto?</h2>
        <p>Si te fijas bien en el enlace que te ha llevado a esto, seguramente tenga un <b>@</b></p>
        <p>Esto tu navegador lo interpreta como:</p>
        <ul>
          <li>Lo que hay delante del @ es un usuario: lo mismo que pasa con los correos (usuario@gmail.com, usuario@hotmail.com).</li>
          <li>Lo que hay detrás del @ es el dominio al que pertenece: en el caso de los correos, sería gmail.com o hotmail.com.</li>
        </ul>
        <p>Dada esta premisa, tu navegador interpreta que vas a iniciar sesión en la url del dominio (lo que hay detrás del @).</p>
        <p>Y te lleva a dicha página</p>
      </div>
      <div className={`${styles.how} ${styles.info}`}>
        <h2>¿Cómo evito que me pase?</h2>
        <p>Hay un par de cosas a tener en cuenta para que no te engañen con este "truco":</p>
        <ol>
          <li>Sentido común: si te llega un mensaje de un completo desconocido con un enlace, block y a seguir con la vida.</li>
          <li>Comprueba la url: por muy pomposo que sea el link que te han pasado, al final solo será un dominio .zip,si fuese el link verídico, seguiría teniendo toda la url inicial.</li>
          <li>No descargues nada sin saber que es: esta se explica por si misma y tiene mucho que ver con la primera.</li>
          <li><b>Comparte</b> este recurso para informar a la gente: así, igual que tu ahora sabes esto, cuanta más gente lo sepa, menos pasará.</li>
        </ol>
      </div>
      <ShareButton />
      <footer className={styles.footer}>
        <a href='https://zonabit.net/' target='_blank' rel='noreferrer noopener'>Zonabit.net</a>
      </footer>
    </main>
  )
}
