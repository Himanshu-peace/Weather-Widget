import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./InfoBox.css"

export default function InfoBox({info}){

    const INIT_URl= 
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let COLD_URL=
    "https://images.unsplash.com/photo-1542267207-f8127b454605?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    let HOT_URL = 
    "https://images.unsplash.com/photo-1628676151703-aed24c2e3ff7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMHBsYWNlfGVufDB8fDB8fHww";
    let RAIN_URL = 
    "https://plus.unsplash.com/premium_photo-1667516468789-81a6ba214724?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";

    // let info = {
    //     city: "Delhi",
    //     feelsLike: 24.84,
    //     temp: 25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather: "haze",
    // }

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 15 
                            ? HOT_URL 
                            : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temprature - {info.temp}&deg;C</p>
                            <p>Humidity - {info.humidity}</p>
                            <p>Min Temp - {info.tempMin}&deg;C</p>
                            <p>Max Temp - {info.tempMax}&deg;C</p>
                            <p>the weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                    
                </Card>
            </div>
        </div>
    )
}