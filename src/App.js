import "./App.css";
import Footer from "./component/Footer";
import HeaderColumnsGrid from "./component/HeaderColumnsGrid";
import TabComponent from "./component/TabComponent";
import { Button, Grid } from "@mui/material";
import Form from "./component/Form";
import { Table } from "@mui/material";



function App() {
  return (
    <>
    
    <HeaderColumnsGrid/>

{/* ============ */}
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<Grid item xs={4}>
<TabComponent/>
<Button/>
</Grid>
<Grid item xs={8}>
<br/><br/>
<Form/> 
</Grid>
</Grid>
{/* ============ */}




<Footer/>
</>
);
}

export default App;