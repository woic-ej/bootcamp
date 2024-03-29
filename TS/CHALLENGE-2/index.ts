

interface MyApiHandler<T> {
    fetchData(endpoint: string): Promise<T>
}

class ApiHandler<T> implements MyApiHandler<T>{
    private baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    async fetchData(endpoint: string): Promise<T> {
        try{
            const url = this.baseUrl + endpoint;
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`${response}`);
            }

            const data: T = await response.json();

            return data;
        }catch(error){
            throw new Error(`에러 발생: ${error}`)
        } 
    }
}

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

async function main() {
    const baseUrl = `https://jsonplaceholder.typicode.com`
    const apiHandler = new ApiHandler<Post[]>(baseUrl);

    try{
        const posts: Post[] = await apiHandler.fetchData("/posts");

        posts.forEach(post => console.log(post));
    }catch(error) {
        console.log(error);
    }
}

main();