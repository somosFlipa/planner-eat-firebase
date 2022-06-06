const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.post('/api/form', (req,res)=>{
    
    let data = req.body
    
    // console.log(data[1][0].mensaje)
    // console.log(data[2][0].user_name)
    // console.log(data[2][0].user_email)

    let smtpTranport = nodemailer.createTransport({
        service:'gmail',
        port:25,
        secure: false,
        auth:{
            user:'smanabel.93@gmail.com',
            pass:'jmkvvgztbwzyeesx'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const recetas = data[0].map(menu =>{
        if (menu.id !== null) {
            return `${menu.id} <br></br>`
        }
        
        
    })

    console.log(recetas)

    let mailOptions={
        
        from: 'smanabel.93@gmail.com',
        to:'smanabel.93@gmail.com',
        subject:`Mensaje de ${data[2][0].user_name}`,
        html:`
        <h3>informacion</h3>
        <p>Enviado por: ${data[2][0].user_email}</p>
        <br></br>
        <p>Menu elegido: </p>
        <p>${recetas}</p>
        <br></br>
        <p>Mensaje: ${data[1][0].mensaje}</p>

        `
    }
    

    smtpTranport.sendMail(mailOptions, (err)=> {
        if(err){
            console.log("tiene un error Error", err)
        }else{
            console.log("¡El correo electrónico ha sido enviado!   ")
        }
    })

    // console.log("email enviado")

})

app.listen(8080, () => {
    console.log("servidor en 8080")
});
