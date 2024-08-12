import { headers } from 'next/headers'

export default function Page() {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  // Implement custom logic based on userAgent
  return <div>User Agent: {userAgent}</div>
}