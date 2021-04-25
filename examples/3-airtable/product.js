const result = document.querySelector(".result");

const fetchAirtablProduct = async () => {

   try {
    const queryParamID = window.location.search;
    const product = await axios.get(`/api/airtable-product${queryParamID}`);
    const { id, fields: { name, price, image, desc } } = product.data;

    result.innerHTML = `
        <h1 class="title">${name}</h1>
        <article class="product">
            <img class="product-img"
            src="${image[0].url}"
            alt"=${name}"
            />
            <div class="product-info">
                <h5 class="title">${name}</h5>
                <h5 class="price">${price}</h5>
                <p class="desc">${desc}</p>
            </div>
        </article>
    `;
   } catch(error) {
       result.innerHTML = `<h3>Error while fetching the product information. Please try again after sometime.</h3>`;
   }

}

fetchAirtablProduct();