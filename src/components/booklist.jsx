import React, { useState, useEffect } from "react";
import axios from "axios";

export const Booklist = (props) => {

    const [bookData, setBookData] = useState(null);
    const language = props.languages;
    const getData = props.getData;
    const undefinedAddress = "data:image/png;base64,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";



    const getDataFromAutors = async (keyword) => {
        const requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${keyword}`;
        const result = await axios.get(requestUrl);
        console.log(result);
        return result
      } 

    useEffect(() => {
        getData?.(language).then((response) => {
            setBookData(response)
            console.log(response)
        }
        );
    }, [language, getData]);

    return (
        <>
            <h1>{language}</h1>
            <ul>
                {bookData === null ? (
                    <p>now loading...</p>
                ) : (
                    bookData.data.items.map((x, index) => (
                        <div key={index}>
                            <li>{x.volumeInfo.title}</li>
                            <p onClick={() => {
                                getDataFromAutors(x.volumeInfo.authors[0])
                            }}>
                                著者：{x.volumeInfo.authors[0]}
                            </p>
                            <img src={x.volumeInfo.imageLinks?.smallThumbnail} />
                        </div>
                    ))
                )}
            </ul>
        </>
    );
};


