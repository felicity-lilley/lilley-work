import './App.css'

export default function App() {
  return (
    <>
      {/* Grain overlay */}
      <div className="grain" aria-hidden="true" />

      <div className="page">
        <main className="main">
          <p className="eyebrow">portfolio &nbsp;/&nbsp; lilley.work</p>
          <h1 className="headline">
            Something<br /><em>good</em><br />is coming.
          </h1>
          <div className="rule" />
          <p className="tagline">
            This space is under construction.<br />
            Check back soon.
          </p>
        </main>

        <footer className="footer">
          <span className="domain">lilley.work</span>
          <span className="status-pill">Under construction</span>
        </footer>
      </div>

      <div className="bg-text" aria-hidden="true">L</div>
    </>
  )
}
