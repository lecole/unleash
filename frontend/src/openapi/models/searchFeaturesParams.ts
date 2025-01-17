/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type SearchFeaturesParams = {
    /**
     * The search query for the feature or tag
     */
    query?: string;
    /**
     * Id of the project where search and filter is performed
     */
    projectId?: string;
    /**
     * The list of feature types to filter by
     */
    type?: string[];
    /**
     * The list of feature tags to filter by. Feature tag has to specify a type and a value joined with a colon.
     */
    tag?: string[];
    /**
     * The list of feature environment status to filter by. Feature environment has to specify a name and a status joined with a colon.
     */
    status?: string[];
    /**
     * The next feature created at date the client has not seen. Used for cursor-based pagination. Empty if starting from the beginning.
     */
    cursor?: string;
    /**
     * The number of results to return in a page. By default it is set to 50
     */
    limit?: string;
};
