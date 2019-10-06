class User 
{
    getNames()
    {
        return [
            'Botija',
            'Jirafales',
        ];
    }

    async getComments(id)
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/${id}/comments")
        return await response.json();
    }
}

export default new User;