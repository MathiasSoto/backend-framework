import IEventBus from './event.bus.js';

declare class EventBussMemory implements IEventBus {
    create(name: string): IEventBus;
    on<T>(event: string, payload: T): Promise<void>;
    emit<T>(event: string, payload: T): void;
}

export { EventBussMemory as default };
