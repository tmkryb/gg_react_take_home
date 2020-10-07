import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { GiphTile } from '../giphTile/giphTile';

export function GiphDetail({ giph }) {
    return (
        <>
            <div className="centered">
                <GiphTile title={giph.title} tileClicked={() => { }} giphImage={giph.images.original}></GiphTile>
            </div>
            <br></br>
            <Card>
                <CardBody>
                    <Row>

                        <Col md="2">
                            Posted by:
                    </Col>
                        <Col md="4">
                            <b>{giph.username}</b>
                        </Col>
                        <Col md="2">
                            Source:
                    </Col>
                        <Col md="4">
                            <a target="_blank" href={giph.source ? giph.source : 'no source'}>/{giph.source}</a>
                        </Col>
                    </Row>
                    <Row>

                        <Col md="2">
                            Imported:
                    </Col>
                        <Col md="4">
                            <b>{giph.import_datetime}</b>
                        </Col>
                        <Col md="2">
                            Trending:
                    </Col>
                        <Col md="4">
                            <b>{giph.trending_datetime}</b>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}