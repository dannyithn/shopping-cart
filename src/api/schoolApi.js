import axiosClientSchool from "./axiosClientSchool";

const schoolApi = {
    async getAll(params) {
        // Transform _page to _start
        const newParams = { ...params };

        // Remove un-needed key
        delete newParams._page;

        // Fetch product list
        const schoolList = await axiosClientSchool.get('/schools', { params:
        newParams });
        // Build response and return
            return {
                data: schoolList,
                pagination: {
                page: params._page,
                limit: params._limit
            }
        }
    }
};

export default schoolApi;