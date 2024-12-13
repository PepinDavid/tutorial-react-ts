interface IApiService {
    get<T>(url: string): Promise<T>;
    post<T>(url: string, body: IBody): Promise<T>;
    put<T>(url: string, body: IBody): Promise<T>;
    delete<T>(url: string): Promise<T>;
}

interface IHeaders {
    [key: string]: string;
}

type TBody = string | number | Date | boolean | null | undefined;

interface IBody {
    [key: string]: TBody;
}

abstract class BaseApiService implements IApiService {
    protected baseUrl: string;
    protected headers: IHeaders;

    constructor(baseUrl: string, headers: IHeaders = {}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    setHeaders(headers: IHeaders) {
        this.headers = {...this.headers, ...headers};

        return this;
    }

    async get<T>(url: string): Promise<T> {
        const response = await fetch(
            `${this.baseUrl}${url}/`,
            {
                method: 'GET',
                mode: 'cors',
                headers: {...this.headers},
            }
        );

        if (!response.ok)
            throw new Error(`error getAll for ${this.constructor.name} service`);

        return response.json();
    }

    async post<T>(url: string, body: IBody): Promise<T> {
        const response = await fetch(
            `${this.baseUrl}${url}/`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    ...this.headers,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        if (!response.ok)
            throw new Error(`error getAll for ${this.constructor.name} service`);

        return response.json();
    }

    async put<T>(url: string, body: IBody): Promise<T> {
        const response = await fetch(
            `${this.baseUrl}${url}/`,
            {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    ...this.headers,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        if (!response.ok)
            throw new Error(`error getAll for ${this.constructor.name} service`);

        return response.json();
    }

    async delete<T>(url: string): Promise<T> {
        const response = await fetch(
            `${this.baseUrl}${url}/`,
            {
                method: 'DELETE',
                mode: 'cors',
                headers: {...this.headers,},
            }
        );

        if (!response.ok)
            throw new Error(`error getAll for ${this.constructor.name} service`);

        return response.json();
    }
}

export {
    BaseApiService,
    IApiService,
    IHeaders,
    IBody,
};