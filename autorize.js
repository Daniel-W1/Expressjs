const authorize = (req, res, next)=>{

const {user} = req.query;

    if(user === 'daniel'){
        req.user = {name:'john', id:3}
        next()
        
    }
    else{
        console.log('Unauthorized !');
        res.status(401).send('user not found!')
    }

}

module.exports = authorize;
