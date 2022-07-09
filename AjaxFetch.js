const ajaxAPI = document.querySelector('.ajax .row');
$.ajax({
    url: "https://reqres.in/api/users",
    type:'get',
    dataType:'json',
    success:function (data) {
        console.log(data.data)    
        ajaxAPI.innerHTML = data.data.map((item)=>{
            return `
            <div class="card col-3">
                <div class="card-body">
                    <h5 class="card-title text-center">${item.first_name}</h5>
                    <p class="card-text text-center">${item.email}</p>
                </div>
                <img src="${item.avatar}" class="card-img" alt="avatar">
            </div>`;
    })
    .join(' ')
    }
})

fetch('https://reqres.in/api/unknown')
    .then((res) => res.json())
    .then((data) => {
        const fetchAPI = document.querySelector('.fetch .row');
        data = data.data;
        fetchAPI.innerHTML = data
        .map((item) => {
            return `
            <div class="card col-3">
                <h3 class="card-title text-center">LIST USER</h3>
                <h5 class="card-title text-center">${item.name} </h5>
                <h5 class="card-title text-center">${item.year}</h5>
            </div>`;
            })
        .join('');
});
