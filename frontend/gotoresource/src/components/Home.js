import { Typography } from '@mui/material';
import { brown } from '@mui/material/colors';
import EndCredits from "./EndCredits"
export default function Home(){
    return(
        <div>
            <Typography variant="h4" align="center">
               Tired of 'n' number of learning resources 
            </Typography>
            <Typography variant="h4" align="center">
               available for a single technology?
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="h6" align="center">
              The resources section consists of the go to free resource option for every Technology which are curated 
            </Typography>
            <Typography variant="h6">
            based on keen observation and peoples opinion which are maybe youtube videos,blogs or documentation.
            </Typography>

            <br></br>
            <br></br>
            <Typography variant="h6">
              The contribute section is the place where you add the best resource you went through which helped you personally dont duplicate the resources
            </Typography>

            <EndCredits />
        </div>

    )
}
