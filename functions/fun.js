export const f = (request, response, next) => {

    const received = request.body;

    response.json(received);
    
}