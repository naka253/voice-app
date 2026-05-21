export default function HomePage() {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#111',
        color: 'white'
      }}
    >
      <div
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold'
          }}
        >
          Voice Chat
        </h1>

        <input
          placeholder="ROOM CODE"
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none'
          }}
        />

        <input
          placeholder="PIN"
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none'
          }}
        />

        <button
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            background: '#5865F2',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          JOIN
        </button>
      </div>
    </main>
  )
}