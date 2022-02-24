// eslint-disable-next-line no-process-env
export const BFF_URL = process.env.NODE_ENV === 'production'
  ? 'https://shivi-board-games-bff.herokuapp.com'
  : 'http://localhost:3001'

