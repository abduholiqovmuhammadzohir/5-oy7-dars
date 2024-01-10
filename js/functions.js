function isHttpValid(str) {
    try {
        const newUrl = new URL(str);
        return newUrl.protocol === 'http:' || newUrl.protocol === 'http:';
    } catch (err) {
        return false
    }
}

const validate = (name, price, color, type, description, picture) => {
    if (!name.value) {
        name.focus();
        alert("Name input is empty");
        return false
    }

    if (name.value.trim().length <= 3) {
        name.focus();
        alert("Name should be more than 3 char");
        return false
    }

    if (!price.value) {
        price.focus();
        alert("Price input is empty");
        return false
    }
    if (!Number(price.value)) {
        price.focus();
        alert("Price should be number");
        return false
    }

    if (price.value <= 10 || price.value > 100000000) {
        price.focus();
        alert("Price very big or small");
        return false
    }

    if (!color.value) {
        color.focus();
        alert("Color input is empty");
        return false
    }

    if (!type.value) {
        type.focus();
        alert("Type input is empty");
        return false
    }

    if (!picture.value) {
        picture.focus();
        alert("Rasm input is empty");
        return false
    }

    if (isHttpValid(picture.value)) {
        picture.focus();
        alert("Picture is not valid");
        return false
    }

    return true
}

function getDataFromLocalStorage (){
    let data = [];
        if (localStorage.getItem('phones')) {
            data = JSON.parse(localStorage.getItem('phones'))
        }
        return data
}

function createCard(phone) {
    return `
    <div class="card mb-3 col-4">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${phone.picture}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title fs-3">${phone.name}</h5>
                          <div class="d-flex justify-content-between">
                            <p class="card-text"><small class="text-danger fs-5">${phone.price}</small></p>
                            <p class="card-text"><small class="text-primary fs-5">${phone.type}</small></p>
                          </div>
                          <p class="card-text"><small class="text-warning style="color:${phone.color}" fs-5">${phone.color}</small></p>
                          <p class="card-text fs-6">${phone.description}</p>
                        </div>
                      </div>
                    </div>
                </div>
    `
}

export {isHttpValid,validate , getDataFromLocalStorage,createCard};