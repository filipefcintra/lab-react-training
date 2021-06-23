function Random({max, min}) {
    let random = Math.floor(Math.random() * (max - min)) + min;
    return (
        <div className="randomNum">
            <p>Random value between {min} and {max} => {random} </p>
        </div>
    )
}

export default Random;