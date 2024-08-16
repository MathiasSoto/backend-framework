import IEventBus from './event.bus'

export default class EventBussRedis implements IEventBus {
  create(name: string): IEventBus {
    throw new Error('Method not implemented.')
  }
  on<T>(event: string, payload: T): Promise<void> {
    throw new Error('Method not implemented.')
  }
  emit<T>(event: string, payload: T): void {
    throw new Error('Method not implemented.')
  }
}
