import IEventBus from './event.bus.cjs';

declare class EventBussSQS implements IEventBus {
    create(name: string): IEventBus;
    on<T>(event: string, payload: T): Promise<void>;
    emit<T>(event: string, payload: T): void;
}

export { EventBussSQS as default };
