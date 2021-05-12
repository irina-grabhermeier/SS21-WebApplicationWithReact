const API_KEY = 'IE6bzrdoaapO3n91n9nboLJzEdtsUa10';
const BASE_URL = 'https://api.giphy.com/v1';

export type Gif = {id: string; title: string; images: Record<string, {url: string}>};

type Response = {
    data: Array<Gif>;
    pagination: {
        count: number;
        total_count: number;
    }
}

export class GiphyRequester {
    static loadTrending(page: number): Promise<Response> {
        return fetch(`${BASE_URL}/gifs/trending?api_key=${API_KEY}&offset=${(page - 1) * 50}`)
            .then((response) => response.json());
    }

    static loadSearch(search: string, page: number): Promise<Response> {
        return fetch(`${BASE_URL}/gifs/search?q=${search}&api_key=${API_KEY}&offset=${(page - 1) * 50}`)
            .then((response) => response.json());
    }
}