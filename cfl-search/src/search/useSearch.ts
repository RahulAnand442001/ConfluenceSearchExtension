import React from 'react';
import axios from 'axios';
import { RESULT_STATUS, ExtensionSearchInput, ExtensionSearchOutput, useConnector } from 'lumapps-sdk-js';
import { ExtensionSearchSettings } from '../types';
import { mapApiResultsToExtensionOutput } from './api/mapApiResultsToExtensionOutput';

export type UseSearchParams = ExtensionSearchInput & {
    settings?: ExtensionSearchSettings;
};

export const useSearch = (props: UseSearchParams): ExtensionSearchOutput => {
    const extensionToken = '';
    const [data, setData] = React.useState<ExtensionSearchOutput>({
        results: [],
        hasMore: false,
        status: RESULT_STATUS.INITIAL,
        totalCount: 0,
    });

    const [status, setStatus] = React.useState<RESULT_STATUS>(RESULT_STATUS.INITIAL);

    const { getToken } = useConnector();
    getToken()
        .then((res) => console.log(res))
        .catch((err) => console.log('Error trace: ', err));

    React.useEffect(() => {
        const callApi = async () => {
            try {
                setStatus(RESULT_STATUS.LOADING);

                const CONFLUENCE_URL = '<confluence-search-url>';
                const headers = {
                    'Content-Type': 'application/json',
                };
                const response = await axios.post(
                    CONFLUENCE_URL,
                    { query: props.query, page: props.page, sort: props.sort },
                    { headers },
                );

                const shouldMergeResults = props.page && props.page > 0;
                const output = mapApiResultsToExtensionOutput(response.data);
                setData((prev) => ({
                    ...output,
                    results: shouldMergeResults ? [...prev.results, ...output.results] : output.results,
                }));
                setStatus(RESULT_STATUS.FETCHED);
            } catch (error) {
                setStatus(RESULT_STATUS.ERROR);
            }
        };

        callApi();
    }, [props.language, props.page, props.pageSize, props.query, props.sort, extensionToken]);

    return {
        ...data,
        status,
    };
};
