import React from 'react'
import Image from 'next/image'
import styles from './details.module.css'
import ShareButton from '../shareButton'
export default function Details () {
  return (
    <main className={styles.main}>
      <a href='https://zonabit.net/' target='_blank' rel='noreferrer noopener' className={styles.logo}>
        <Image src='/zb.png' alt='Logo' fill />
      </a>
      <div className={styles.description}>
        <h2>Pongámonos técnicos!</h2>
        <p>
          <a href='/'>Ir al inicio</a>
        </p>
      </div>
      <div className={styles.info}>
        <h2>¿Cómo lo hacen?</h2>
        <p>Para llevar a cabo esto y que tú no te des cuenta, suelen usar una url más larga, como esta:</p>
        <div className={styles.image}>
          <Image src='/tg.jpg' width={300} height={100} alt='Archivx en telegram' />
        </div>
        <p>Esto te hace pensar que es una url verdadera, pues pone "mediafire.com".</p>
        <p>Y ahí está el truco, ellos, aparte de la técnica de la contraseña y usuario usando @ que ya te he mencionado, usan <b>homoglifos</b>.</p>
      </div>
      <div className={styles.info}>
        <h2>¿Qué es un homoglifo?</h2>
        <blockquote>
          En ortografía y tipografía, un homoglifo es uno de dos o más grafemas, caracteres, o glifos con formas que aparentan ser idénticas o no pueden
          distinguirse mediante una inspección visual rápida. Esta denominación también se aplica a las secuencias de caracteres
          que comparten estas propiedades.
        </blockquote>
        <p>Eso dice la Wikipedia, que al castellano moderno viene a ser que dos letras son muy parecidas incluso iguales pero para una máquina son dos cosas radicalmente distintas.</p>
        <p>Esto ocurre por la variedad de lenguas y lenguajes en nuestro planeta, lo que hace que una letra en ruso sea parecida a otra en latín, pero al ser de dos idiomas distintos,
          se han de interpretar distinto, aunque para ti sean idénticas.
        </p>
        <p>Y realmente, no hay que irnos a otro idioma, en el propio idioma puede ocurrir esto, como ha pasado miles de veces con la i mayúscula (I) y la L minúscula (l).</p>
        <p>Te las pongo juntas para que veas: Il</p>
      </div>
      <div className={styles.info}>
        <h2>¿Por qué nadie previene esto?</h2>
        <p>Prevenir esto es muy difícil, ya que técnicamente está bien previsto, si a un enlace normal como este:{' '}
          <a href='https://www.mediafire.com/file/archivo.zip' target='_blank' rel='noreferrer noopener'>www.mediafire.com/file/archivo.zip</a>{' '}
          le quitas el final y pones la web .zip, por ejemplo esta:{' '}
          <a href='https://www.mediafire.com/file/archivx.zip' target='_blank' rel='noreferrer noopener'>www.mediafire.com/file/archivx.zip</a>{' '}
          no funciona.
        </p>
        <p>
          El problemas son los homoglifos, pero tampoco puedes prohibir su uso ya que son parte de una lengua o idioma, imagínate que se prohíbe usar la L o la i.
        </p>
        <p>El único consuelo que nos puede quedar es que un mismo enlace no sirve en todas las plataformas, por ejemplo, haciendo la prueba, WhatsApp detecta el mismo enlace como un correo electrónico mientras que Telegram si lo pilla como una web.</p>
        <p>Aparte, tampoco existe una compatibilidad entre la misma plataforma en distintos dispositivos, ya que si mando el mismo enlace desde el móvil en Telegram o Gmail, coge solo la raíz,es decir, mediafire.com o lo que fuese.</p>
        <p>Y gracias a las distintas plataformas y su naturaleza dispar, cada una tiene sus peculiaridades, lo que ralentiza a los ciberdelincuentes.</p>
      </div>
      <ShareButton />
      <footer className={styles.footer}>
        <a href='https://zonabit.net/' target='_blank' rel='noreferrer noopener'>Zonabit.net</a>
      </footer>
    </main>
  )
}
