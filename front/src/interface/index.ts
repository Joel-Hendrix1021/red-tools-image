import { ICommentsPost } from "./post"

export interface INavigation {
    title: string,
    path: string
}
export interface IUserLogin {
    email: string
    password: string
}

export interface AuthState {
    token: string
    loading: boolean
    errorMessage?: string
}
export interface IUser {
    _id: string
    username: string
    email: string
    created_at: string
    updatedAt: string
    __v?: number
}
// Post 
export interface IPostUser {
    _id: string
    comments: string[]
    created_at: string
    description: string
    imgUrl: string
    likes: string[]
    title: string
    updatedAt: string[]
    __v?: number
    userId: IUser | string
}


export interface IPostState {
    posts: IPostUser[] | []
    commentByPost: ICommentsPost[] | []
    errorMessage: string | null
    loading: boolean
}

// notes interface
export interface INotes {
    _id: string
    title: string
    description: string
    userId: string
    __v?: number
}