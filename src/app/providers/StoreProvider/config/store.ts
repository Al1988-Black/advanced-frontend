import {
    ReducersMapObject,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { Reducer, CombinedState } from 'redux';
import { counterReducer } from 'entities/Counter';
import { $axios } from 'shared/api/api';
import { userReducer } from 'entities/User';
import { NavigateOptions, To } from 'react-router-dom';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManeger = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = { api: $axios, navigate };

    const store = configureStore({
        // @ts-ignore
        reducer: reducerManeger.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            getDefaultMiddleware({
                thunk: { extraArgument: extraArg },
            }),
    });

    // @ts-ignore
    store.reducerManager = reducerManeger;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
