import { HiOutlineSearch } from 'react-icons/hi' 
import { SearchBarContainer } from './searchBarStyle'

export default function SearchBarComponent() {
  return (
    <SearchBarContainer className="search-bar">
      <HiOutlineSearch className="search-icon" />
      <input className="search-input" type="text" placeholder="Pesquisar" />
    </SearchBarContainer>
  )
}