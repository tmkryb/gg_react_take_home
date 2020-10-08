import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Button, Toast, ToastBody, CardHeader } from 'reactstrap';
import copy from 'copy-to-clipboard';
import { FaLink } from 'react-icons/fa'
import { CgDetailsMore } from 'react-icons/cg';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';

export function GiphTile({ giphImage, giph, tileClicked, title }) {
    const [showToast, setShowToast] = useState(false);
    const [mouseOverTile, setMouseOverTile] = useState(false);
    const [favorites] = useLocalStorage("favorite_giphs", []);
    const copyToClipboard = (text) => {
        copy(text, { debug: true });
        setShowToast(true);
        setTimeout(() => { setShowToast(false); }, 3000)
    }

    const handleFavorite = (giph) => {
        let giphIndex = favorites.findIndex(f => f.id === giph.id);
        if(giphIndex !== -1){
            favorites.splice(giphIndex, 1)
            writeStorage('favorite_giphs', [...favorites]);
        }else{
            writeStorage('favorite_giphs', [...favorites, giph]);
        }
    }

    return (
        <>
            <Card className="giph-tile-card" key={giph.id} onMouseLeave={() => {
                setMouseOverTile(false);
            }} onMouseOverCapture={() => {
                setMouseOverTile(true);
            }}>
                {showToast && <CardHeader>
                    <Toast isOpen={showToast}>
                        <ToastBody>
                            Link copied to clipboard.
                </ToastBody>
                    </Toast>
                </CardHeader>}
                <CardBody>
                    <div style={{ position: "relative" }} className="centered">
                        <img onClick={() => { tileClicked(giph.id) }}
                            width={giphImage.width}
                            height={giphImage.height} src={giphImage.url}>
                        </img>
                        {mouseOverTile &&
                            <div className="centered-element">
                                <Button className="tile-button"onClick={(e) => copyToClipboard(giph.images.original.url)} ><FaLink></FaLink></Button>
                                <Button className="tile-button"onClick={() => { tileClicked(giph.id) }} ><CgDetailsMore></CgDetailsMore></Button>
                                <Button className="tile-button"onClick={() => { handleFavorite(giph) }} >
                                    {favorites.findIndex(f => f.id === giph.id) !== -1 ? <AiFillStar></AiFillStar> : <AiOutlineStar></AiOutlineStar>}
                                </Button>
                            </div>
                        }
                    </div>
                </CardBody>
                {title && <CardFooter>
                    {title}
                </CardFooter>}
            </Card>

        </>)
}