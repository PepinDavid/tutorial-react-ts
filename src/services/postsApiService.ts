import { BaseApiService, IBody } from "./baseApiService";

interface IPost extends IBody {
    id?: number;
    title?: string;
    body?: string;
    user?: number;
    createdOn?: Date | string;
    created_on?: Date | string;
}

class PostsApiService extends BaseApiService {
    constructor() {
        super('http://localhost:8000/api/');
    }

    async getAll(): Promise<IPost[]> {
        return this.get<IPost[]>('posts');
    }

    async getById(id: string): Promise<IPost[]> {
        return this.get<IPost[]>(`posts/${id}`);
    }

    async create(body: IPost): Promise<IPost> {
        body.created_on = new Date();
        body.user = 1;

        return this.post<IPost>('posts', body)
    }
}

export {
    IPost,
    PostsApiService,
}