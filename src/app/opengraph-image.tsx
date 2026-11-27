import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dr. Nitya Nutan Misra – Surgical Oncologist, Cuttack, Odisha'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #052e2b 0%, #064e3b 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#5eead4', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 24 }}>
          Surgical Oncologist · Cuttack, Odisha
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, marginBottom: 28 }}>Dr. Nitya Nutan Misra</div>
        <div style={{ fontSize: 34, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, maxWidth: 950 }}>
          MCh Surgical Oncology · Assistant Professor, AHPGIC Cuttack
        </div>
        <div style={{ fontSize: 30, color: '#fbbf24', marginTop: 40 }}>
          Breast · Head &amp; Neck · GI · Thyroid · Sarcoma Surgery
        </div>
      </div>
    ),
    size,
  )
}
