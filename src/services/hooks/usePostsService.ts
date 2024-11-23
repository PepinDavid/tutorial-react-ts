import { useMemo } from "react";
import { ApiServiceFactory } from "../apiServiceFactory";
import { PostsApiService } from "../postsApiService";

export const usePostsService = (): PostsApiService => {
    return useMemo(() => { return ApiServiceFactory.getService(PostsApiService)}, []);
}