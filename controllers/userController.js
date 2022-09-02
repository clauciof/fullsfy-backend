class UserController {
    async getUserAccess (req, res) {
        try {
            res.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
            response_type: 'code',
            client_id: 'cb376bbd8d7d41d782111b2a89b82805',
            scope: 'user-read-private user-read-email',
            redirect_uri: 'http://localhost:3000/about',
        }));
        }catch (error) {
            console.log(error);
            res.send(error);
       }
    }
}


module.exports = new UserController()