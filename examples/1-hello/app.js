
const result = document.querySelector(".result");

const fetchHelloWorld = async () => {

    try {

        const resp = await axios.get("/api/hello-world");
        const { message } = resp.data;
        result.innerText =  message;

    } catch(error) {
        result.innerText = `${error.response.data}`;
    }
};

fetchHelloWorld();