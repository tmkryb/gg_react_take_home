import React from 'react';
import { Card, CardBody, CardFooter, Button } from 'reactstrap';
mport {CopyToClipboard} from 'react-copy-to-clipboard';


export function GiphTile({ giphImage, id, tileClicked, title }) {
    return (
        <>
            <Card onClick={() => { tileClicked(id) }} key={id}>
                <CardBody>
                    <div className="centered">
                        <img
                            width={giphImage.width}
                            height={giphImage.height} src={giphImage.url}>
                        </img>
                        <Button></Button>
                    </div>
                </CardBody>
                {title && <CardFooter>
                    {title}
                </CardFooter>}
            </Card>
        </>)
}