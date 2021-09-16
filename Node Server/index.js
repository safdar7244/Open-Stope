const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require('path');
// var CronJob = require('cron').CronJob;
var cron = require('node-cron');
const mongoose=require('mongoose')
// create a new Express application instance
const app = express();
let u_user=''
let u_message='Some randfom subject'

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")))
//start application server on port 3000
// app.listen(3000, () => {
//   console.log("The server started on port 3000");
// });
const PORT=5000 || process.env.PORT
app.listen(process.env.PORT || 5000,()=>console.log('Server Running on port '+`${PORT}`))
app.use(express.static(path.join(__dirname, 'public/Open-Stope')))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'public/Open-Stope/index.html'));
});
try {
  mongoose.connect("mongodb+srv://stopesurface:stopesurface@cluster0.lyxxp.mongodb.net/stopesurface?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, () =>
  console.log("connected"));    
}catch (error) { 
  console.log("could not connect");    
}


const StopeSchema = new mongoose.Schema({

   mine: String,
    location: String,
   method:String,
   oretype: String,
    qvalue:Number,
   avalue:Number,
   bvalue:Number,
   cvalue:Number,
   tvalue:Number,
   fvalue:Number,
   hrvalue:Number,
   nvalue:Number,
   stopesurface:String,
   outcome:String
});

const Stope = mongoose.model("Stope" , StopeSchema);


// const mysql = require('mysql');
// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'qyvt6767',
//   database: 'stopesurface'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });


// const author = { mine: 'newmine', location: 'newLocation',method:"qsq",oretype: "sdfs", qvalue:1,avalue:2,bvalue:3,cvalue:4,tvalue:5,fvalue:6,hrvalue:7,nvalue:8,stopesurface:"crown",outcome:"Stable" };
// connection.query('INSERT INTO calculations SET ?', author, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });


// const author = { mine: 'newmine', location: 'newLocation',method:"qsq",oretype: "sdfs", qvalue:1,avalue:2,bvalue:3,cvalue:4,tvalue:5,fvalue:6,hrvalue:7,nvalue:8,stopesurface:"crown",outcome:"Stable" };











// const date = new Date();
// date.setDate(date.getDate() + 7)
// const job = new CronJob(date, () => {
//   console.log(`Scheduled job for ${date} running at ${new Date()}`)
//   emailSend()
// }, null, true, '')
// job.start()

// console.log("job ",job)

cron.schedule('* * */336 * * *', async() => {
  console.log("runs every two weeks")
  
  const res=await Stope.find();

  

  if(!res){return}
  console.log('Last insert ID:', res[0]._id);
    //loop till end
    let message="<br><br>----------------------<br><br>";
    let i=1
  for(field in res){
    console.log("okok,",res[field]._id)
message=message+i+"<br> mine :  "+res[field].mine+"<br> location :  "+res[field].location+"<br> method :  "+res[field].method+"<br> oretype :  "+res[field].oretype+"<br> qvalue :  "+res[field].qvalue+"<br> avalue :  "+res[field].avalue+"<br> bvalue :  "+res[field].bvalue+"<br> cvalue :  "+res[field].cvalue+"<br> tvalue :  "+res[field].tvalue+"<br> fvalue :  "+res[field].fvalue+"<br> hrvalue :  "+res[field].hrvalue+"<br> nvalue :  "+res[field].nvalue+"<br> stopesurface :  "+res[field].stopesurface+"<br> outcome :  "+res[field].outcome+"<br><br>----------------------<br>"
i++;
  }

  console.log("sendmail: ",message)
  
  sendMailSQLData( message,(err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  })
});




app.post("/datasharing", async(req, res) => {
  console.log("datasharing...",req.body)
  let data=req.body;

  const stopesurface={
    mine: data.val1,
    location: data.val8,
    method:data.val2,
    oretype: data.val9,
    qvalue:data.val3  ,
    avalue:data.val10   ,
    bvalue:data.val4   ,
    cvalue:data.val11,
    tvalue:data.val5  ,
    fvalue:data.val12  ,
    hrvalue:data.val6   ,
    nvalue:data.val13 ,
    stopesurface:data.val7,
    outcome:data.val14 
  }
  const result= new Stope(stopesurface)
  const rr=await result.save()
  console.log("result after save: ",rr )
})



//   console.log("date",data)
//   const dataentry = { mine: data.val1, location: data.val8,method:data.val2,oretype: data.val9, qvalue:data.val3  ,avalue:data.val10   ,bvalue:data.val4   ,cvalue:data.val11,tvalue:data.val5  ,fvalue:data.val12  ,hrvalue:data.val6   ,nvalue:data.val13 ,stopesurface:data.val7,outcome:data.val14 };
// connection.query('INSERT INTO calculations SET ?', dataentry, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });

//})
// app.get("/datasharing", (req, res) => {
//   console.log("datasharing...",req)
// //   const author = { mine: 'newmine', location: 'newLocation',method:"qsq",oretype: "sdfs", qvalue:1,avalue:2,bvalue:3,cvalue:4,tvalue:5,fvalue:6,hrvalue:7,nvalue:8,stopesurface:"crown",outcome:"Stable" };
// // connection.query('INSERT INTO calculations SET ?', author, (err, res) => {
// //   if(err) throw err;

// //   console.log('Last insert ID:', res.insertId);
// // });

// })



// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
    u_user = req.body;
    u_message="qwert";
   console.log("req.body : ",u_user)
  sendMail( u_user,(err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});
app.get("/gg", (req, res) => {
  res.send("hiiiiiii")
})


// const mailOptions = 


const sendMail = (user, callback) => {
  console.log("meaagse: ",user)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "stopesurfacebot@gmail.com",
      pass: "stopesurface123"
    }
  });
  transporter.sendMail({
    from: `Bot, stopesurfacebot@gmail.com`,
    to: [`fidelis.suorineni@nu.edu.kz`,`yerkezhan.madenova@gmail.com`],
    subject: `New Querry`,
    html: `<p> <b>First Name :  </b>${user.fname}</p> <p> <b>Last Name :  </b>${user.lname}</p> <p> <b>Email :  </b>${user.email}</p> <p> <b>Subject :  </b>${user.subject}</p> <p> <b>Message :  </b>${user.message}</p>`
  }, callback);
}

const sendMailSQLData = (user, callback) => {
  console.log("meaagse: ",user)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "stopesurfacebot@gmail.com",
      pass: "stopesurface123"
    }
  });
  transporter.sendMailSQLData({
    from: `Bot, stopesurfacebot@gmail.com`,
    to: [`fidelis.suorineni@nu.edu.kz`,`yerkezhan.madenova@gmail.com`],
    subject: `Two Weeks Report`,
    html: `<p> <b>Message :  </b>${user}</p>`
  }, callback);
}



///////////////////////
app.get("/download",(req,res)=>{
  const file="public/Stope-Database.xlsx"
  console.log("---",file)
  res.download(file)

})
//`fidelis.suorineni@nu.edu.kz`,`yerkezhan.madenova@gmail.com`