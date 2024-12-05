const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const comment = formData.get('comment');
    if(name == ''|| email =='')
    {
        document.getElementById('name').focus();
        alert('Please provide your name and email');

    }else{
        const url = 'https://ychen.scweb.ca/3rd_Semester/auction/message.php';

        //const formData = {'name':name, 'email':email, 'comment': email};
        const formData = "name="+name +"&email="+email+"&comment="+comment;
        // Set up options for the fetch request
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Set content type to JSON
            },
            body: formData // Convert JSON data to a string and set it as the request body
        };
        fetch(url,options)
            .then((response)=>{
                return response.json();
            })
            .then((json)=>{
                alert(json.message);
            }).catch(err=>{
                alert(err);
        })
    }

    event.preventDefault();

});