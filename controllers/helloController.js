const axios = require('axios');
const qs = require('qs');
var querystring = require('querystring');

class HelloController {
   async sayHello (req, res) {
       try {


        // res.redirect('https://accounts.spotify.com/authorize?' +
        // querystring.stringify({
        //   response_type: 'code',
        //   client_id: 'cb376bbd8d7d41d782111b2a89b82805',
        //   scope: 'user-read-private user-read-email',
        //   redirect_uri: 'http://localhost:3000/about',
        // }));
        //     // const data = qs.stringify({'grant_type':'client_credentials'});
            // console.log(data)
            // const auth_token = Buffer.from('cb376bbd8d7d41d782111b2a89b82805:6740c48dd7654f35969b95accd6ab68d', 'utf-8').toString('base64');
            // console.log(auth_token)
            // var response = await axios.post('https://accounts.spotify.com/api/token', data, {
            //     headers:{
            //         'Authorization': `Basic ${auth_token}`,
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            // })
            // const access_token = response.data.access_token
            
            // response = await axios.get('https://api.spotify.com/v1/me', {
            //     headers:{
            //         'Authorization': `Bearer ${access_token}`
            //     }
            // })
            
            res.json({message: "Hello! Your api is working!"});
       } catch (error) {
            console.log(error);
            res.send(error);
       }
    }
}


module.exports = new HelloController()