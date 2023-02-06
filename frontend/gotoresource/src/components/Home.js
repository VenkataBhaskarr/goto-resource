import { Typography } from '@mui/material';
import { brown } from '@mui/material/colors';
import EndCredits from "./EndCredits"
import "../static/home.css"
export default function Home(){
    return(
        <div>
            <Typography className = "title" variant="h4" align="center">
               One stop resource choosen by the community for community !!
            </Typography>

            <br></br>
            <br></br>
            <div className = "cotext">
            <Typography className = "contenty" variant="h6" align="center">
              The resources section consists of the go to free resource option for every Technology which are curated 
            based on keen observation and peoples opinion which are maybe youtube videos,blogs or documentation.
            </Typography>

            <br></br>
            <br></br>
            <Typography className = "contenty" variant="h6">
              The contribute section is the place where you add the best resource you went through which helped you personally dont duplicate the resources
            </Typography>
            </div>

      {/* <EndCredits /> */}
        </div>

    )
}
