let id;
function start() {

    fetch('http://localhost:5000/transaction')
        .then(res => res.json())
        .then((data) => {

            let html = '';
            let c = 0;

            data.forEach((element) => {

                c++;

                html += `
            <tr>
                <td>${c}</td>
                <td>${element.title}</td>
                <td class="${element.category === "income" ? 'income' : 'expense'}">${element.category}</td>
                              <td  class="${element.category === "income" ? 'income' : 'expense'} type">${element.category === "income" ? '&#9650; ' : '&#9660; '}</td>
              
                  <td class="${element.category === "income" ? 'income' : 'expense'}">${element.amount}</td>
                  <td>${element.date}</td>
              
                <td>
                    <button class="delete" data-id="${element.id}">
                        &#x274C;
                    </button>
                </td>
            </tr>`;
            });

            document.querySelector('.tablebody').innerHTML = html;

            // attach event for all delete buttons
            document.querySelectorAll('.delete').forEach((btn) => {

                btn.addEventListener('click', () => {

                    const id = btn.dataset.id;

                    deleteTransaction(id);

                });

            });

        });

}
function deleteTransaction(id) {
    fetch(`http://localhost:5000/transaction/${id}`, {
        method: "DELETE"
    }).then(res => res.json()).then(data => console.log(data));
}

document.querySelector('.add-transaction').addEventListener('click', () => {
    const title = document.querySelector('.title').value;
    const category = document.querySelector('.category').value;
    const date = document.querySelector('.date').value;
    const amount = document.querySelector('.Amount').value;
    fetch('http://localhost:5000/transaction', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            id: Date.now(),
            title: title,
            amount: amount,
            category: category,
            date: date
        })

    }
    ).then(res => res.json()).then(data => console.log(data));


})
start()




