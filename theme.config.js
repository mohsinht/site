const YEAR = new Date().getFullYear()
export default {
  components: {
    h1: ({ children }) => (
      <h1 style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundImage: 'linear-gradient(90deg,#FFFFFF,#f5b402)',
      }}
      >
        {children}
      </h1>
    )
  },
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  footer: (
    <>
      <small style={{ display: 'block', marginTop: '8rem' }}>
        <time>{YEAR}</time> © Mohsin Hayat.
        <a className="icon-link" href="/feed.xml">
          <i className="fa fa-solid fa-rss"></i>
        </a>
        <a className="icon-link" href="https://facebook.com/mohsinhayatt">
          <i className="fa fa-brands fa-facebook"></i>
        </a>
        <a className="icon-link" href="https://github.com/mohsinht">
          <i className="fa fa-brands fa-github"></i>
        </a>
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/mohsinhayatt/"
        >
          <i className="fa fa-brands fa-linkedin"></i>
        </a>
        
        <style jsx>{`
          a {
            float: right;
          }
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
      </small>
    </>
  ),
  logo: (
    <>
      <svg>...</svg>
      <span>Mohsin Hayat</span>
    </>
  ),
  titleSuffix: " – Mohsin Hayat's Resumé",
  back: 'Read More →',
}
