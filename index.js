const express = require('express');

const app = express();

const port = 3600;

const slides = [
    {
        image:"https://www.w3schools.com/bootstrap/chicago.jpg",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        subTitle: "one"
        subTitle: "first sub"
      },
      {
        image:"https://www.w3schools.com/bootstrap/ny.jpg",
        title: "reprehenderit est deserunt velit ipsam",
        subTitle: "two"
        subTitle: "second sub"    
      },
      {
        image:"https://www.w3schools.com/bootstrap/la.jpg",
        title: "officia porro iure quia iusto qui ipsa ut modi",
        subTitle: "three"
      },
      {
        image:"https://www.w3schools.com/bootstrap/chicago.jpg",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        subTitle: "four"
      },
      {
        image:"https://www.w3schools.com/bootstrap/ny.jpg",
        title: "reprehenderit est deserunt velit ipsam",
        subTitle: "five"
    
      },
      {
        image:"https://www.w3schools.com/bootstrap/la.jpg",
        title: "officia porro iure quia iusto qui ipsa ut modi",
        subTitle: "six"
      },
      {
        image:"https://www.w3schools.com/bootstrap/chicago.jpg",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        subTitle: "seven"
      },
      {
        image:"https://www.w3schools.com/bootstrap/ny.jpg",
        title: "reprehenderit est deserunt velit ipsam",
        subTitle: "eight"
    
      },
      {
        image:"https://www.w3schools.com/bootstrap/la.jpg",
        title: "officia porro iure quia iusto qui ipsa ut modi",
        subTitle: "nine"
      }
      ,
      {
        image:"https://www.w3schools.com/bootstrap/la.jpg",
        title: "officia porro iure quia iusto qui ipsa ut modi",
        subTitle: "ten"
        subTitle: "third sub"
      }
    ]
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      
app.get('/api/carousel', (req,res)=> {
        res.send(slides);
        });


app.listen(port, () => console.log(`Carouel app listening on port ${port}!`))
