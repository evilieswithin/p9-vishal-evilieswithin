import axios from "axios";
import { useEffect, useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard';


const LinkResult = ({ inputValue }) => {

    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchData = async () => {
        // let links = [];
        try {
            const linksStr = window.localStorage.getItem("history")
            console.log({linksStr})
            const linksArr = JSON.parse(linksStr)
            console.log({linksArr})
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link)
            console.log({shortenLink})
            linksArr.push( res.data.result.full_short_link);
             window.localStorage.setItem("history", JSON.stringify(linksArr))
        } catch (error) {
            setError(error)
            console.log({error})
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData()
        }
    }, [inputValue])


    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer)
    }, [copied])


    if (loading) {
        <p className="noData">Loading...</p>
    }
    if (error) {
        <p className="noData">Something went wrong  :(</p>
    }


    return (
        <>
            {shortenLink && (
                <div className="result">
                    <p>{shortenLink}</p>

                    <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
                        <button className={copied ? "copied" : ""}>Copy to clipboard</button>
                    </CopyToClipboard>

                </div>
            )}
        </>
    )
}

export default LinkResult