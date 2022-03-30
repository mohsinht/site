const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Mohsin Hayat.
      <a className="icon-link" href="/feed.xml">
        <i class="fa fa-solid fa-rss"></i>
      </a>
      <a className="icon-link" href="https://facebook.com/mohsinhayatt">
        <i class="fa fa-brands fa-facebook"></i>
      </a>
      <a className="icon-link" href="https://github.com/mohsinht">
        <i class="fa fa-brands fa-github"></i>
      </a>
      <a className="icon-link" href="https://www.linkedin.com/in/mohsinhayatt/">
        <i class="fa fa-brands fa-linkedin"></i>
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
  ),
  logo: (
    <>
      <svg>...</svg>
      <span>Next.js Static Site Generator</span>
    </>
  ),
  titleSuffix: " – Mohsin's Resumé"
}
