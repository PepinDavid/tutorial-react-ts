import { useMemo } from "react";
import { ApiServiceFactory } from "../apiServiceFactory";
import { PostsApiService } from "../postsApiService";

export const usePostsService = (): PostsApiService => {
    console.log(ApiServiceFactory.getService(PostsApiService))
    console.log(new PostsApiService())
    return useMemo(() => { return ApiServiceFactory.getService(PostsApiService)}, []);
}