import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./InfoBox.css"
export default function InfoBox({info}){

  
  const INIT_URL="https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXIlMjByZXBvcnR8ZW58MHx8MHx8fDA%3D";

    const HOT_URL="https://images.unsplash.com/photo-1577985759186-0854dfd3f218?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1523920443222-1e71e5d09943?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      return(
        <div className="InfoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? RAIN_URL : info.temp> 15 ? HOT_URL :COLD_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.humidity > 80 ? <ThunderstormIcon/>: info.temp> 15 ? <LightModeIcon/> :<AcUnitIcon/>}

          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>

             <p>Temprature={info.temp}&deg;C</p>
             <p>Humidity={info.humidity}</p>
             <p>Min Temp={info.tempMin}</p>
             <p>Max Temp={info.tempMax}</p>
             <p><b>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</b></p>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></div>
    </div>
      )
}