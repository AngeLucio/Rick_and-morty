var myFavorites =[];


function postFav (req,res) {

    const character = req.body;

    myFavorites.push(character);

    res.json(myFavorites);
}

function deleteFav(req,res){
    const characterIdToDelete = req.params.id;

    myFavorites = myFavorites.filter(character => character.id!== characterIdToDelete)
res.json(myFavorites)
}

module.exports ={
    postFav,
    deleteFav
};