
const respMsg = { message: "First Netlify function meesage getting populated" };

exports.handler = async (event, context) => {

    return {
        statusCode: 200,
        body: JSON.stringify(respMsg)
    };

};