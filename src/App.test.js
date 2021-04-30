import { render, screen } from '@testing-library/react'
import App from './App'

test('renders drink of the day', () => {
  render(<App />)
  const linkElement = screen.getByText(/Drink of the day/i)
  expect(linkElement).toBeInTheDocument()
})
