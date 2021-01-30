import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div>
          <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a la licenciatura <a href="https://www.uaeh.edu.mx/campus/icbi/oferta/licenciaturas/c_computacionales/plan_estudios.html">!</a>
        </h1>
        <p className={styles.description}>
         Bienvenido a la aplicacion <a>sin nombre :V</a> donde esperamos puedas encontrar <br></br> a otros estudiantes
         de tu mismo plan academico y a su vez puedas recibir ayuda de ellos.
        <br/><br/>
        <code className={styles.code}>Tambien esperamos que esta pagina te sirva de ayuda</code>
        </p>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>




    </div>
        )
}
