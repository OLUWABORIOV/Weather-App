*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', Sans-serif;
    box-sizing: border-box;
}
body{
    background: #222;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.card {
    width: 90%;
    max-width: 470px;
    background: linear-gradient(135deg, #00febe, #5b548a);
    color: #fff;
    margin: 100px auto 0;
    border-radius: 20px;
    padding: 40px 35px;
    text-align: center;
}
.search {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search input{
    border: 0;
    outline: 0;
    background: #ebfffc;
    color: #555;
    padding: 10px 25px;
    height: 60px;
    border-radius: 30px;
    flex: 1;
    margin-right: 16px;
    font-size: 18px;
}

.search button{
    border: 0;
    outline: 0;
    background: #ebfffc;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    
}

.search button:hover {
    background: #daf5f0;
}


.search button img{
    width: 16px;
}

.welcome-content{
    text-align: center;
    padding: 20px;
}
.welcome-content h1 {
    color: #333;
    margin-bottom: 20px;
    font-size: 20px;
}

.welcome-content p {
    color: #666;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 1.5;
}

.weather-icon {
    width: 170px;
    margin-top: 30px;
}
.weather h1{
    font-size: 80px;
    font-weight: 500;
}
.weather h2{
    font-size: 45px;
    font-weight: 400;
    margin-top: -10px;
}
.details{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 50px;
}
.col{
    display: flex;
    align-items: center;
    text-align: left;
    }
.col img{
    width: 40px;
    margin-right: 10px;
}
.humidity, .wind{
    font-size: 28px;
    margin-top: -6px;
}
.weather{
    display: none;
}
.error{
    text-align: left;
    margin-left: 10px;
    font-size: 14px;
    margin-top: 10px;
    display: none;
}