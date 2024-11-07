import ky from "ky";

export const getTodoList = () => {
    const response = ky.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
        return response.json()
    });
    return response;
}
