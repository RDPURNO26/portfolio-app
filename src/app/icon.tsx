import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#050508',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00d4ff',
          fontWeight: 800,
          fontFamily: 'monospace',
          borderRadius: '4px',
          border: '1px solid #00d4ff40'
        }}
      >
        RD
      </div>
    ),
    { ...size }
  );
}
