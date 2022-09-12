import { IPostUser, IPostState } from '../../interface';
import { ICommentPost } from '../../interface/post';
import { PostActionType } from '../actions/post';

type PostAction =
    | { type: PostActionType.LOAD_ALL_POST }
    | { type: PostActionType.LOAD_ALL_POST_SUCCESS; payload: IPostUser[] }
    | { type: PostActionType.LOAD_ALL_POST_ERROR; payload: string }
    | { type: PostActionType.LOAD_POST_USER }
    | { type: PostActionType.LOAD_POST_USER_SUCCESS; payload: IPostUser[] }
    | { type: PostActionType.LOAD_POST_USER_ERROR; payload: string }
    /* upload post action  */
    | { type: PostActionType.LOAD_UPLOAD_POST }
    | { type: PostActionType.LOAD_UPLOAD_POST_SUCCESS; payload: IPostUser }
    | { type: PostActionType.LOAD_UPLOAD_POST_ERROR; payload: string }
    /* update post actions */
    | { type: PostActionType.LOAD_UPDATE_POST }
    | { type: PostActionType.LOAD_UPDATE_POST_SUCCESS; payload: IPostUser }
    | { type: PostActionType.LOAD_UPDATE_POST_ERROR; payload: string }
    /* delete post action */
    | { type: PostActionType.LOAD_DELETE_POST }
    | { type: PostActionType.LOAD_DELETE_POST_SUCCESS; payload: string }
    | { type: PostActionType.LOAD_DELETE_POST_ERROR; payload: string }
    /* get comment action */
    | { type: PostActionType.LOAD_COMMENTS_POST }
    | { type: PostActionType.LOAD_COMMENTS_POST_SUCCESS; payload: ICommentPost[] }
    | { type: PostActionType.LOAD_COMMENTS_POST_ERROR; payload: string }
    /* add comment */
    | { type: PostActionType.LOAD_ADD_COMMENT_POST }
    | { type: PostActionType.LOAD_ADD_COMMENT_POST_SUCCESS; payload: ICommentPost }
    | { type: PostActionType.LOAD_ADD_COMMENT_POST_ERROR; payload: string }

export const postReducer = (state: IPostState, action: PostAction) => {
    switch (action.type) {
        case PostActionType.LOAD_ALL_POST:
            return { ...state, loading: true };
        case PostActionType.LOAD_ALL_POST_SUCCESS:
            return { ...state, postAll: action.payload, loading: false };
        case PostActionType.LOAD_ALL_POST_ERROR:
            return { ...state, loading: false, errorMessage: action.payload };
        // get post user
        case PostActionType.LOAD_POST_USER:
            return { ...state, loading: true, errorMessage: null };
        case PostActionType.LOAD_POST_USER_SUCCESS:
            return {
                ...state,
                postsByUser: action.payload,
                loading: false,
                errorMessage: null,
            };
        case PostActionType.LOAD_POST_USER_ERROR:
            return { ...state, errorMessage: action.payload, loading: false };
        // upload post
        case PostActionType.LOAD_UPLOAD_POST:
            return { ...state, loading: true, };
        case PostActionType.LOAD_UPLOAD_POST_SUCCESS:
            return {
                ...state,
                postAll: [...state.postAll, action.payload],
                postsByUser: [...state.postsByUser, action.payload],
                loading: false,
                errorMessage: null
            };
        case PostActionType.LOAD_UPLOAD_POST_ERROR:
            return { ...state, loading: false, errorMessage: action.payload };
        // update post
        case PostActionType.LOAD_UPDATE_POST:
            return { ...state, loading: true, errorMessage: null };
        case PostActionType.LOAD_UPDATE_POST_SUCCESS:
            return {
                ...state,
                postAll: state.postAll.map(post =>
                    post._id === action.payload._id ? action.payload : post
                ),
                postsByUser: state.postsByUser.map(post =>
                    post._id === action.payload._id ? action.payload : post
                ),
                loading: false,
                errorMessage: null
            };
        case PostActionType.LOAD_UPDATE_POST_ERROR:
            return { ...state, loading: false, errorMessage: action.payload };
        // delete post
        case PostActionType.LOAD_DELETE_POST:
            return { ...state, loading: true, errorMessage: null };
        case PostActionType.LOAD_DELETE_POST_SUCCESS:
            return {
                ...state,
                postAll: state.postAll.filter(post => post._id !== action.payload),
                postsByUser: state.postsByUser.filter(
                    post => post._id !== action.payload
                ),
                loading: true,
                errorMessage: null,
            };
        case PostActionType.LOAD_DELETE_POST_ERROR:
            return { ...state, errorMessage: action.payload, loading: false };
        // get comment post
        case PostActionType.LOAD_COMMENTS_POST:
            return { ...state, loading: true };
        case PostActionType.LOAD_COMMENTS_POST_SUCCESS:
            return { ...state, loading: false, commentByPost: action.payload };
        case PostActionType.LOAD_COMMENTS_POST_ERROR:
            return { ...state, errorMessage: action.payload, loading: false };
        // add comment post 
        case PostActionType.LOAD_ADD_COMMENT_POST:
            return { ...state, loading: true, errorMessage: null };

        default:
            return { ...state };
    }
};
