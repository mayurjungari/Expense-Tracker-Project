async function fetchData() {
    try {
        const retriveData = await fetch('/expense/getdata');
        if (retriveData.ok) {
            const data = await retriveData.json();
            const tableBody = document.getElementById('expenseTableBody');

            
            tableBody.innerHTML = '';

            
            data.forEach(item => {
                const row = document.createElement('tr');

              


                row.innerHTML = `
                    <td>${item.CATEGORY}</td>
                    <td>${item.DESCRIPTION}</td>
                    <td>${item.AMOUNT}</td>
                  
                `;
                 //cretee delete button
               const deltbutton=document.createElement('button')
               deltbutton.type='button';
               deltbutton.className='delete'
               deltbutton.textContent='Delete'
               //------------------------------
               const deleteButtonPlace=document.createElement('td')
               deleteButtonPlace.appendChild(deltbutton)
               row.appendChild(deleteButtonPlace)
                tableBody.appendChild(row);
                //---------------------------
                deltbutton.addEventListener('click',async ()=>{
                    try {
                        const id=item.ID;
                    const response=await fetch(`expense/deletedata/${id}`,{
                        method:'DELETE',
                    })
                    if(response.ok)
                    {
                        console.log('Data Deleted Succesfully')
                        row.remove();
                        window.alert('Data deleted succesfully')

                    }
                    else{
                        console.log('fail to delete data ')
                    }
                        
                    } catch (error) {
                        console.log(error)
                    }
                    
                })
                //-------------------------------------
            });
        } else {
            console.error('Failed to retrive  data');
        }
    } catch (error) {
        console.error('Error:', error);
    }

    
}
window.addEventListener('load',fetchData)





