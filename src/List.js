import db from "./db";

function List(){
    const array = db.map((data) => (
        data.E+", "
    ));
    return(
        <div>
            <h3>Words to Search For : </h3>
            <span>{array.sort()}</span>
        </div>
    );
}

export default List;