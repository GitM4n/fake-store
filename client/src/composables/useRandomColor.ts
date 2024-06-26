import {computed} from 'vue'

  const colors = [
    '#4ca1af',
    '#ff4b1f',
    '#2c3e50',
    '#56ab2f',
    'var(--red)'
  ]
  

export const useRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}