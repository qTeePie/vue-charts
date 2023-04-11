import axios from "axios";
import { toRefs, reactive } from "vue";

export default function(url) {
    const state = reactive( {
        response: [],
        error: null,
        fetching: true
    })

    let config = {
        headers:{
            'Accept': 'application/json'
        }
    }

    const fetchData= async() => {
        try {
            await axios.get(url, config).then((r) => state.response = r.data)
        } catch(errors) {
            state.error = errors;
        } finally {
            state.fetching = false;
        }
    };
    

    return {...toRefs(state), fetchData};
}