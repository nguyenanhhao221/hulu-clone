import { dehydrate, QueryClient } from '@tanstack/react-query';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
    GetServerSideProps,
    NextPage,
    InferGetServerSidePropsType,
} from 'next';
import type { TDataResponseTMDB } from '../../../type';
import { SearchDisplay } from '../../components/SearchDisplay/SearchDisplay';
import { axiosTMDB } from '../../utilities/requests';

//After user type in the Search Input and Submit the from in the client. We will direct the page to /search?searchTerm={...}
//Here we will use SSR to render out the Search Page.
//We will take the searchTerm in the URL that user input by using useRouter().query.searchTerm then perform the API call to the TMDb endpoints.

//Keep in mind that we are using react-query to make this API call and store/cache this search results in the SERVER and we HYDRATE this result into the client.
//Easy explain
//  1. User redirect to /search?searchTerm=avenger
//  2. The SSR on the server start building the page.
//  3. getServerSideProps run => use react-query PREFETCH to call to TMDb /search/multi endpoints.
//  4. after the results is success, due to nature of react-query it store the result and set up cache on the server
//  5. After everything is done on the server, the page get send to the client.
//  6. In the client the props data not simply just pass to client like in normal SSR page, react-query hydrate these results to the client.
//  7. There some special advantage such as: when the component mounted in the client, it can actually make the same request again to make sure the data won't be changed from the time it builds in the server and until the client reach. In this project, it might not be necessary. This re-fetch on client is also auto if we config our stale time, cache time....

//If data for this query is already in the cache and not invalidated, the data will not be fetched
// If a staleTime is passed eg. prefetchQuery('todos', fn, { staleTime: 5000 }) and the data is older than the specified staleTime, the query will be fetched
// If no instances of useQuery appear for a prefetched query, it will be deleted and garbage collected after the time specified in cacheTime.

const SearchPage: NextPage = ({}: InferGetServerSidePropsType<
    typeof getServerSideProps
>) => {
    return (
        <div>
            <SearchDisplay />
        </div>
    );
};

export default SearchPage;

export const getSearchMovies = async (
    apiKey: string | undefined,
    searchTerm: string | string[] | undefined
): Promise<TDataResponseTMDB | Error> => {
    if (!apiKey && !searchTerm)
        return new Error('API Key and Search Term is undefined');
    const options: AxiosRequestConfig = {
        params: { api_key: apiKey, query: searchTerm, page: 1 },
    };
    const endpoint = '/search/multi';
    const response: AxiosResponse<TDataResponseTMDB> = await axiosTMDB(
        endpoint,
        options
    );
    return response.data;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    const API_KEY = process.env.API_KEY;
    if (!API_KEY) throw new Error('API_KEY is undefined');
    const { searchTerm } = context.query; //get the search term from the URl
    const queryClient = new QueryClient(); // Create new instance of Query Client for each request to the server to avoid the cache or data duplicate on different clients.
    await queryClient.prefetchQuery(['searchMovies'], () =>
        //prefetch because we know before hand what the user will search (because we make the user type in input the search term, so we know the search term before the page is actually build.)
        getSearchMovies(API_KEY, searchTerm)
    );

    return { props: { dehydratedState: dehydrate(queryClient) } };
};
