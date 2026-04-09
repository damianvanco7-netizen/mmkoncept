import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "mmkoncept"

interface ContactFormNotificationProps {
  name?: string
  email?: string
  message?: string
}

const ContactFormNotificationEmail = ({ name, email, message }: ContactFormNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name || 'someone'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Message</Heading>
        <Text style={label}>Name</Text>
        <Text style={value}>{name || '—'}</Text>
        <Text style={label}>Email</Text>
        <Text style={value}>{email || '—'}</Text>
        <Hr style={hr} />
        <Text style={label}>Message</Text>
        <Text style={messageStyle}>{message || '—'}</Text>
        <Hr style={hr} />
        <Text style={footer}>
          This message was sent via the contact form on {SITE_NAME}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) => `New contact: ${data.name || 'Website visitor'}`,
  displayName: 'Contact form notification',
  to: 'martina.masarykova@mmconcept.sk',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', message: 'Hello, I would like to learn more about your services.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Arial', 'Helvetica', sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { fontSize: '20px', fontWeight: 'bold' as const, color: '#0f0400', margin: '0 0 24px' }
const label = { fontSize: '11px', fontWeight: 'bold' as const, color: '#999999', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0 0 4px' }
const value = { fontSize: '15px', color: '#0f0400', margin: '0 0 20px', lineHeight: '1.4' }
const messageStyle = { fontSize: '15px', color: '#0f0400', margin: '0 0 20px', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#e5e5e5', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '24px 0 0' }
