import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import ReactLoading from 'react-loading';
import { GiphTile } from '../../components/giphTile/giphTile';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import { GiphDetail } from '../giphDetail/giphDetail';

export function ImageGrid({ giphs, isLoadingGifs }) {
    
    const [giphDetailsVisible, setGiphDetailsVisible] = useState(false);
    const [selectedGiph, setSelectedGiph] = useState({})
    const showGiph = (id) => {        
        setSelectedGiph(giphs.find(a => a.id === id));
        setGiphDetailsVisible(true);
    }

    return (
        <>
            {!giphs.length &&
                <div className="centered">  
                    <h1>Upss... can't find any giphs.</h1>
                </div>}
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 550: 2, 750: 3, 950: 4, 1150: 5, 1350: 6 }}>
                <Masonry gutter={4}>
                    {giphs.map(giph =>
                        <GiphTile id={giph.id} key={giph.id} tileClicked={(id) => {showGiph(id)}} giphImage={giph.images.fixed_width_downsampled}></GiphTile>
                    )}
                </Masonry>
            </ResponsiveMasonry>
            {isLoadingGifs &&
                <div className='centered'>
                    <ReactLoading type="cubes" width='200px' color="blue"></ReactLoading>
                </div>}
            <Modal toggle={() => {setGiphDetailsVisible(!giphDetailsVisible)}} size="lg" isOpen={giphDetailsVisible}>
                <ModalBody>
                    <GiphDetail giph={selectedGiph}></GiphDetail>
                </ModalBody>
            </Modal>
        </>
    )
}