const result = document.querySelector('.result')

const renderBasicApiData = async () => {

   try {
    const basiapiData = await axios.get("/.netlify/functions/basic-api");

    const products = 
    basiapiData.data.map(ele => {
        const {id, name, image:{url}, price} = ele;
        return `
        <article class="product">
            <img
                src=${url}
                alt=${name}
            />
            <div class="info">
                <h5>${name}</h5>
                <h5 class="price">$${price}</h5>
            </div>
        </article>`;
    }).join("");

    result.innerHTML = products;

   } catch(error) {
    result.innerHTML = `<h4>${error.response.data}</h4>`; 
   }

}

renderBasicApiData();
 