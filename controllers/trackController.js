const axios = require('axios');
const qs = require('qs');

const getToken = async() =>{
    const data = qs.stringify({'grant_type':'client_credentials'});
    const auth_token = Buffer.from('cb376bbd8d7d41d782111b2a89b82805:6740c48dd7654f35969b95accd6ab68d', 'utf-8').toString('base64');

    var token_response = await axios.post('https://accounts.spotify.com/api/token', data, {
        headers:{
            'Authorization': `Basic ${auth_token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    return token_response.data.access_token
}

class TrackController {
    async getTrack (req, res) {
        try {
            // const data = qs.stringify({'grant_type':'client_credentials'});
            // const auth_token = Buffer.from('cb376bbd8d7d41d782111b2a89b82805:6740c48dd7654f35969b95accd6ab68d', 'utf-8').toString('base64');

            // var token_response = await axios.post('https://accounts.spotify.com/api/token', data, {
            //     headers:{
            //         'Authorization': `Basic ${auth_token}`,
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            // })

            const access_token = await getToken() //token_response.data.access_token
            const id = req.query.id
            const audioFeatureResponse = await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, {
                headers:{
                    'Authorization': `Bearer ${access_token}`
                }
            })

            const trackResponse = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
                headers:{
                    'Authorization': `Bearer ${access_token}`
                }
            })

            const response = {
                'audioFeature': audioFeatureResponse.data,
                'trackResponse': trackResponse.data

            }
                
            res.json(response);
        }catch (error) {
            console.log(error)
            res.status(400)
            .json({ message: "Campo codAluno só aceita números" });
        }
    }
}


module.exports = new TrackController()