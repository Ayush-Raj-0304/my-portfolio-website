interface ContactFormEmailProps {
    name: string
    email: string
    message: string
  }
  
  const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
    name,
    email,
    message,
  }) => (
    <div
      style={{
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        color: '#1a1a1a',
        padding: '24px',
        lineHeight: '1.6',
        fontSize: '16px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: '22px',
          fontWeight: 600,
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '12px',
          marginBottom: '24px',
        }}
      >
        Contact Form Submission
      </h1>
  
      <div style={{ marginBottom: '24px' }}>
        <p style={{ margin: '0 0 8px' }}>
          <strong>Name:</strong> {name}
        </p>
        <p style={{ margin: '0' }}>
          <strong>Email:</strong>{' '}
          <a
            href={`mailto:${email}`}
            style={{
              color: '#4B0082',
              textDecoration: 'none',
            }}
          >
            {email}
          </a>
        </p>
      </div>
  
      <div>
        <h2
          style={{
            fontSize: '18px',
            fontWeight: 500,
            marginBottom: '12px',
            color: '#4B0082',
          }}
        >
          Message
        </h2>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            whiteSpace: 'pre-wrap',
          }}
        >
          {message}
        </div>
      </div>
  
      <p
        style={{
          fontSize: '14px',
          color: '#888',
          marginTop: '32px',
          borderTop: '1px solid #e0e0e0',
          paddingTop: '16px',
        }}
      >
        This message was submitted through your portfolio&apos;s contact form.
      </p>
    </div>
  )
  
  export default ContactFormEmail
  