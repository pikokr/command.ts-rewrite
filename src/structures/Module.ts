import CTSCommand from '../types/CTSCommand'
import { CTSClient } from './index'
import CTSListener from '../types/CTSListener'

interface Module {
  client: CTSClient
}

class Module {
  static commands: CTSCommand[] = []
  static listeners: CTSListener[] = []
  __path?: string
  static unload(): void {
    this.commands = []
    this.listeners = []
  }
}

export default Module
