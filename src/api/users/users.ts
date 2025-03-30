import { apiSlice } from "../apiSlice";

type UserType = {
    id: string,
    title: string,
    description: string,
    icon: string,
    userId: string,
    createdAt: string,
};

export const usersApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        getCategories: builder.query<UserType[], void>({
            query: () => 'taskCategories',
            providesTags: ['CATEGORIES'],
        }),
    }),


});

export const { useGetCategoriesQuery } = usersApi;
