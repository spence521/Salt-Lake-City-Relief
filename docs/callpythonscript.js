function Validate(value) {
    //document.getElementById("Amount")
    //document.getElementById("myInput").style.backgroundColor = "";
    if (value < 1)
    {
        window.alert("This value must be at least $1");        
    }
    document.getElementById("Amount").value = parseFloat(value).toFixed(2);
  }


function Submit(){
    /*const spawner = require('child_process').spawn;
    console.log('Data sent to python script', data_to_pass_in);
    const python_process = spawner('python', [JSON.stringify(data_to_pass_in)]);
    python_process.stdout.on('data', (data) => {
        console.log('Data recieved from python script:', data.toString());
    });*/
    window.alert("Submit was clicked!");
    var Amount = document.getElementById('Amount');
    var First_Name = document.getElementById('First_Name');
    var Middle_Name = document.getElementById('Middle_Name');
    var Last_Name = document.getElementById('Last_Name');
    /*var Address = document.getElementById('Address');
    var City = document.getElementById('City');
    var State = document.getElementById('State');
    var Zip = document.getElementById('Zip');*/
    var ccNumber = document.getElementById('ccNumber');
    var Exp = document.getElementById('Exp');
    var CVV = document.getElementById('CVV');
    var Credit_Card = [First_Name, Middle_Name, Last_Name, ccNumber, Exp, CVV, Amount]

    /*const data_to_pass_in = {
        data_sent: 'Send this to python script.',
        data_returned: undefined
    }*/

    console.log('Data sent to python script:', Credit_Card)
    const python_process = spawner('python', ['./app.py', JSON.stringify(Credit_Card)]);
    python_process.stdout.on('data', (data) => {
        console.log('Data recieved from python script:', data.toString());
    });
}
//inline, home, get, style, display
function DisplayHome() {
    //window.alert("Home tab clicked");
    document.getElementsByClassName('donate')[0].style.fontWeight = "normal";
    document.getElementsByClassName('purchase')[0].style.fontWeight = "normal";
    document.getElementsByClassName('about')[0].style.fontWeight = "normal";
    document.getElementsByClassName('news')[0].style.fontWeight = "normal";
    document.getElementsByClassName('home')[0].style.fontWeight = "bold";

    document.getElementById("Donate").style.display = 'none';
    document.getElementById("Purchase").style.display = 'none';
    document.getElementById("About").style.display = 'none';
    document.getElementById("News").style.display = 'none';
    document.getElementById("Home").style.display = 'inline'; 
    //document.getElementById("Donate").style.visibility="hidden"; 
}

function DisplayDonate() {
    document.getElementsByClassName('home')[0].style.fontWeight = "normal";
    document.getElementsByClassName('purchase')[0].style.fontWeight = "normal";
    document.getElementsByClassName('about')[0].style.fontWeight = "normal";
    document.getElementsByClassName('news')[0].style.fontWeight = "normal";
    document.getElementsByClassName('donate')[0].style.fontWeight = "bold";

    document.getElementById("Home").style.display = 'none';
    document.getElementById("Purchase").style.display = 'none';
    document.getElementById("About").style.display = 'none';
    document.getElementById("News").style.display = 'none';
    document.getElementById("Donate").style.display = 'inline'; 
}

function DisplayPurchase() {
    document.getElementsByClassName('home')[0].style.fontWeight = "normal";
    document.getElementsByClassName('donate')[0].style.fontWeight = "normal";
    document.getElementsByClassName('about')[0].style.fontWeight = "normal";
    document.getElementsByClassName('news')[0].style.fontWeight = "normal";
    document.getElementsByClassName('purchase')[0].style.fontWeight = "bold";

    document.getElementById("Home").style.display = 'none';
    document.getElementById("Donate").style.display = 'none'; 
    document.getElementById("About").style.display = 'none';
    document.getElementById("News").style.display = 'none';
    document.getElementById("Purchase").style.display = 'inline';
}

function DisplayAbout() {
    document.getElementsByClassName('home')[0].style.fontWeight = "normal";
    document.getElementsByClassName('donate')[0].style.fontWeight = "normal";
    document.getElementsByClassName('purchase')[0].style.fontWeight = "normal";
    document.getElementsByClassName('news')[0].style.fontWeight = "normal";
    document.getElementsByClassName('about')[0].style.fontWeight = "bold";

    document.getElementById("Home").style.display = 'none';
    document.getElementById("Donate").style.display = 'none'; 
    document.getElementById("Purchase").style.display = 'none';
    document.getElementById("News").style.display = 'none';
    document.getElementById("About").style.display = 'inline';
}

function DisplayNews(){
    document.getElementsByClassName('home')[0].style.fontWeight = "normal";
    document.getElementsByClassName('donate')[0].style.fontWeight = "normal";
    document.getElementsByClassName('purchase')[0].style.fontWeight = "normal";
    document.getElementsByClassName('about')[0].style.fontWeight = "normal";
    document.getElementsByClassName('news')[0].style.fontWeight = "bold";

    document.getElementById("Home").style.display = 'none';
    document.getElementById("Donate").style.display = 'none'; 
    document.getElementById("Purchase").style.display = 'none';
    document.getElementById("About").style.display = 'none';
    document.getElementById("News").style.display = 'inline';

}

function CallDisplayNews(){
    DisplayNews();
}
function SubmitArticle()
{

}
