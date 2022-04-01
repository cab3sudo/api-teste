function tempo(request,response){
    const data = new Date();

    response.json({
        date: data.toGmtString()
    });

}

export default tempo;