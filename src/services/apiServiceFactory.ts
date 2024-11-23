class ApiServiceFactory {
    private static instances: Map<string, any> = new Map();

    static getService<T>(service: new () => T): T {
        const serviceName = service.name;

        if (!this.instances.has(serviceName))
            this.instances.set(serviceName, new service());
            
        return this.instances.get(serviceName);
    }
}

export { ApiServiceFactory };
