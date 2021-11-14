import axios from "axios";
import { TweetState } from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
    fetchTwees(): Promise<TweetState['items']> {
        return axios.get('https://trycode.pw/c/2OBQ1.json').then(({ data }) => data)
    }
}