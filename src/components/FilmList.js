import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map( (film, id) => {
        return (
            //remember key={comment.id} to fix key property error in dev tools
            <li name={film.name} key={film.id}>
                <span><a href={film.url}>{film.name}</a></span>
            </li>
        )
    } )


    return ( //passed down as key:value pairs, hard-coded.
        <>
           {filmNodes}
            <form className="button" action="https://www.imdb.com/calendar/?region=gb">
                <input type="submit" value="View more upcoming releases" />
            </form>

        </>
    )
}

export default FilmList;