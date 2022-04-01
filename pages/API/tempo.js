function tempo(request,response){
    const data = new Date();

    response.json({
        date: data.toGMTString()
    });

}

export default tempo;