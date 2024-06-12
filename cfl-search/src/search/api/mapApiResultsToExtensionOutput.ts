import { RESULT_STATUS, ExtensionSearchResult, ExtensionSearchOutput } from 'lumapps-sdk-js';
import { ApiResult, ApiResultItem } from '../../types';

/**
 * Map individual search item to a LumApps item.
 * @param  Api results
 * @returns LumApps formatted results
 */
const mapApiResultItemsToSearchItems = (results: ApiResultItem[]): ExtensionSearchResult[] =>
    results.map(({ id, title, url, description, metadata }) => ({
        extensionSearchResultKey: id,
        id,
        title,
        url,
        snippet: description,
        customMetadata: metadata ? [metadata.type, metadata.lastUpdatedDate, `${metadata.likes} likes`] : [],
    }));

/**
 * Map the entire Api response to fit to search extension output
 * @param apiResult Response from the api
 * @returns Mpped response with mapped results
 */
export const mapApiResultsToExtensionOutput = (apiResult: ApiResult): ExtensionSearchOutput => {
    const mappedResults = mapApiResultItemsToSearchItems(apiResult.results);

    return {
        hasMore: apiResult.hasMore,
        results: mappedResults,
        totalCount: apiResult.resultCount,
        status: RESULT_STATUS.FETCHED,
        defaultSortValue: 'relevance',
        sortOrders: [
            { label: { default: 'Relevance' }, value: 'relevance' },
            { label: { default: 'Most Recent' }, value: 'desc' },
            { label: { default: 'Least Recent' }, value: 'asc' },
        ],
        facets: [
            // {
            //     choices: [
            //         { value: 'user', count: 357, label: { en: 'Users' } },
            //         { value: 'content', count: 14, label: { en: 'Content' } },
            //         { value: 'post', count: 7, label: { en: 'Posts' } },
            //         { value: 'community', count: 4, label: { en: 'Communities' } },
            //         { value: 'directoryentry', count: 3, label: { en: 'Directories' } },
            //         { value: 'media', count: 3, label: { en: 'Media' } },
            //     ],
            //     field: 'result types',
            //     id: 'result_types',
            //     label: { en: 'Result types' },
            //     shouldDisplayAllValues: false, // Limit to 5 values
            //     isMultiple: true, // Allow selecting multiple choices
            //     isCollapsed: false, // Display values initially
            //     value: [{ value: 'user', count: 357, label: { en: 'Users' } }], // Selected values
            // },
            // {
            //     choices: [
            //         { value: 'LAST_YEAR', count: 350, label: { en: 'Past year' } },
            //         { value: 'LAST_MONTH', count: 121, label: { en: 'Past month' } },
            //         { value: 'LAST_WEEK', count: 82, label: { en: 'Past week' } },
            //         { value: 'LAST_DAY', count: 3, label: { en: 'Past 24 hours' } },
            //     ],
            //     field: '_metadata.updateTime',
            //     id: '_metadata.updateTime',
            //     label: { en: 'Last update' },
            //     isMultiple: false, // Allow only one choice
            //     isCollapsed: false, // Display values initially
            //     shouldDisplayAllValues: false, // Limit to 5 values
            // },
        ],
    };
};
