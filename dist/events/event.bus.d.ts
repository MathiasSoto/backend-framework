interface IEventBus {
    create(name: string): IEventBus;
    on<T>(event: string, payload: T): Promise<void>;
    emit<T>(event: string, payload: T): void;
}

export type { IEventBus as default };
