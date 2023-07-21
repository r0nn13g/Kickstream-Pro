import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
  
const topFilms = () => [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 }
];


  const CreateChannels = () => {
    return (
        <div className="App">
            <p>The autocomplete example 1 :
                with predefined set of inputs</p>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={topFilms()}
                sx={{ width: 400 }}
                renderInput={(params) =>
                    <TextField {...params} label="Movie" />}
            />
        </div>
    );
}
  
export default CreateChannels;