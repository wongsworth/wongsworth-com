import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

// Image metadata
export const alt = `${siteConfig.name} - Professional Timeline`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Reuse OG image for Twitter
export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              background: 'black',
              color: 'white',
              padding: '30px 60px',
              borderRadius: '20px',
              marginBottom: '40px',
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 48,
              color: '#666',
              maxWidth: '800px',
            }}
          >
            Professional Timeline
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#999',
              marginTop: '20px',
            }}
          >
            {siteConfig.location}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
