// Static 500 fallback (Pages Router). Styled inline because the App Router's
// Tailwind bundle isn't loaded here. Bilingual: the locale isn't known.

const page: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
  textAlign: 'center',
  background: '#141B3D',
  color: '#F1F3FA',
  fontFamily: 'Cairo, Tajawal, system-ui, sans-serif',
}

const button: React.CSSProperties = {
  display: 'inline-block',
  margin: '8px',
  padding: '12px 20px',
  borderRadius: 12,
  background: '#3A4799',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600,
}

export default function ServerError() {
  return (
    <main style={page} dir="rtl" lang="ar">
      <div style={{ maxWidth: 480 }}>
        <p style={{ color: '#7C8CE0', fontWeight: 600, margin: 0 }}>500</p>
        <h1 style={{ fontSize: 30, margin: '8px 0' }}>حدث خطأ غير متوقع</h1>
        <p style={{ color: '#B4BCDB' }}>يُرجى تحديث الصفحة أو العودة إلى الرئيسية.</p>
        <p lang="en" dir="ltr" style={{ color: '#B4BCDB' }}>
          Something went wrong. Please refresh or go back home.
        </p>
        <div style={{ marginTop: 24 }}>
          <a href="/" style={button}>
            الرئيسية
          </a>
          <a href="/en" lang="en" style={{ ...button, background: 'transparent', border: '1px solid rgba(230,232,239,.25)' }}>
            Home
          </a>
        </div>
      </div>
    </main>
  )
}
