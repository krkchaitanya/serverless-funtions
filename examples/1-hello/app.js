
const result = document.querySelector(".result");

const fetchHelloWorld = async () => {

    try {

        const resp = await axios.get("/api/hello-world");
        const { message } = resp.data;
        result.innerText =  message;

    } catch(error) {
        result.innerText = "Some failure while fetching the function data. Please try again later";
    }
};

fetchHelloWorld();