export default function SearchField({handleInput, filterText}){
    return(
        <input
            type="search"
            placeholder="Type to search by name or difficulty..."
            value={filterText}
            onChange={handleInput}
        />
    );
}