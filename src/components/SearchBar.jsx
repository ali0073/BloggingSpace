import { Container, TextField } from '@mui/material';
import { constants } from '../utils/constants';

const SearchBar = ({ setQuery, query }) => {
  return (
    <Container sx={{ marginTop: '40px' }}>
      <TextField
        onChange={e => setQuery(e.target.value)}
        value={query}
        fullWidth
        label={constants.SEARCH_BAR_LABEL}
      />
    </Container>
  );
};

export default SearchBar;
