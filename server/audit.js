import fs from 'fs'

const LOG_FILE = './logs/auditoria.json'

export function auditLog({ accion, realizadoPor, detalle = {} }) {
  const entrada = {
    accion,
    realizadoPor,
    detalle,
    timestamp: new Date().toISOString()
  }

  if (!fs.existsSync('./logs')) fs.mkdirSync('./logs')

  let logs = []
  if (fs.existsSync(LOG_FILE)) {
    logs = JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'))
  }

  logs.unshift(entrada)
  if (logs.length > 500) logs = logs.slice(0, 500)

  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2))
}