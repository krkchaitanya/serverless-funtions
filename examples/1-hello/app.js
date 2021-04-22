
const result = document.querySelector(".result");

const fetchHelloWorld = async () => {

    const resp = await axios.get("/api/hello-world");

    const { message } = resp.data;

    result.innerText =  message;
};

fetchHelloWorld();