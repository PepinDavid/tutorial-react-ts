import { BaseApiService, IBody } from "./baseApiService";

interface IPost extends IBody {
    id?: number;
    title?: string;
    body?: string;
    user?: string;
    createdOn?: Date;
    created_on?: Date;
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
        return this.post<IPost>('posts', body)
    }
}

export {
    IPost,
    PostsApiService,
}