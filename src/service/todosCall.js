import ky from "ky";

export const getTodoList = () => {
    try {
        const response = ky.get('http://localhost:3000/teste').then((response) => {
            return response.json()
        });
        
        return response;
    } catch (error) {
        console.log({error});
        return []        
    }
}
