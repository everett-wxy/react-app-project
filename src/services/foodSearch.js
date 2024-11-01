const baseUrlSearchQueries = "https://world.openfoodfacts.net/api/v2/search?";
const searchQueriesResponseFields = "fields=product_name,code,selected_images,nutriments";
const searchQeuriesParameters = "&states_tags=nutrition-facts-completed&sort_by=popularity_key&page_size=20";
const searchQueryCategories = `&categories_tags=`;
const searchQeuryBrand = "&brands_tags=";

const getFoodDataBySearchQueries = async (searchQueryCategoriesValue, brandValue) => {
    let url = `${baseUrlSearchQueries}${searchQueriesResponseFields}${
        searchQeuriesParameters || ""
    }`;

    if (searchQueryCategoriesValue) {
        url += `${searchQueryCategories}${searchQueryCategoriesValue}`;
    }

    if (brandValue) {
        url += `${searchQeuryBrand}${brandValue}`;
    }

    try {
        const res = await fetch(url);

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(
                `Error ${res.status}: ${
                    errorData.error.message || response.statusText
                }`
            );
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.log("error:", err);
    }
};



getFoodDataBySearchQueries('',"Tyrrell's"); 

export { getFoodDataBySearchQueries };
