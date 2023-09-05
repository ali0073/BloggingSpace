import { Container, TextField } from '@mui/material';
import { SEARCH_BAR_LABEL } from '../utils/constants';

const SearchBar = ({ setQuery, query }) => {
  return (
    <Container sx={{ marginTop: '40px' }}>
      <TextField
        onChange={e => setQuery(e.target.value)}
        value={query}
        fullWidth
        label={SEARCH_BAR_LABEL}
      />
    </Container>
  );
};

export default SearchBar;
