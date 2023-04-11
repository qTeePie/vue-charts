import { reactive, toRefs, ref } from "vue";
import FetchData from "./fetch-data";

export default function() {
    const val = ref('');
    const statsObject = reactive({ stats:[], error: null, fetching: false });
    const statsByUser = async() => {
        const {response, error, fetchData, fetching} = FetchData (
            process.env.VUE_APP_USERSTATS_FIXED_URL,
            {}
        );
        fetchData();
        statsObject.stats = response;
        statsObject.error = error;
        statsObject.fetching = fetching;
    };
    return {val, ...toRefs(statsObject), statsByUser};
}

