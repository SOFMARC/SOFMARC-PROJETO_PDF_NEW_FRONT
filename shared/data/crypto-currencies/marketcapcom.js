import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import * as marketcap from "../../../shared/data/crypto-currencies/marketcap"
// Need to Import {Importent}
import Chart from 'chart.js/auto';
import { Table } from '@mui/material';
;

// Images
import btc from "../../../public/assets/img/svgs/crypto-currencies/btc.svg";
import eth from "../../../public/assets/img/svgs/crypto-currencies/eth.svg";
import xrp from "../../../public/assets/img/svgs/crypto-currencies/xrp.svg";
import ltc from "../../../public/assets/img/svgs/crypto-currencies/ltc.svg";
import neo from "../../../public/assets/img/svgs/crypto-currencies/neo.svg";
import xmr from "../../../public/assets/img/svgs/crypto-currencies/xmr.svg";
import eos from "../../../public/assets/img/svgs/crypto-currencies/eos.svg";
import steem from "../../../public/assets/img/svgs/crypto-currencies/steem.svg";
import miota from "../../../public/assets/img/svgs/crypto-currencies/miota.svg";
import dash from "../../../public/assets/img/svgs/crypto-currencies/dash.svg";
import waves from "../../../public/assets/img/svgs/crypto-currencies/waves.svg";

const CryptMarketingValues =
  [
    { image: btc.src, ID: 1, Symbol: "bitcoin", Name: "Bitcoin", crypt: "BTC", lastprice: "$10513.00", MarkerCap: "$51,191,183730", Change: "success", platform: "Trade", },
    { ID: 2, ymbol: "ethereum", Name: "Ethereum", crypt: "ETH", lastprice: "$723.48", MarkerCap: "$4,48,308,110", Change: "success", platform: "Trade", image: eth.src, },
    { ID: 3, Symbol: "ripple", Name: "Ripple", crypt: "XRP", lastprice: "$425.25", MarkerCap: "$7,63,80,043", Change: "success", platform: "Trade", image: xrp.src, },
    { ID: 4, Symbol: "litecoin", Name: "Litecoin", crypt: "LTC", lastprice: "$1.2029", MarkerCap: "$6,14,18,", Change: "danger", platform: "Trade", image: ltc.src, },
    { ID: 5, Symbol: "neo", Name: "Neo", crypt: "NEO", lastprice: "$1547.67", MarkerCap: "$19,07,67,295", Change: "danger", platform: "Trade", image: neo.src, },
    { ID: 6, Symbol: "monero", Name: "Monero", crypt: "XMR", lastprice: "$305.16", MarkerCap: "$4,778,157,533", Change: "success", platform: "Trade", image: xmr.src, },
    { ID: 7, Symbol: "eos", Name: "Eos", crypt: "EOS", lastprice: "$149.18", MarkerCap: "$8,44,49,000", Change: "danger", platform: "Trade", image: eos.src, },
    { ID: 8, Symbol: "steem", Name: "Steem", crypt: "STEEM", lastprice: "$0.467813", MarkerCap: "$8,358,735,080", Change: "success", platform: "Trade", image: steem.src, },
    { ID: 9, Symbol: "lota", Name: "Lota", crypt: "LOTA", lastprice: "$2.34", MarkerCap: "$6504,100,862", Change: "danger", platform: "Trade", image: miota.src, },
    { ID: 10, Symbol: "dash", Name: "Dash", crypt: "DASH", lastprice: "$747.222", MarkerCap: "$5,88,1,413,815", Change: "success", platform: "Trade", image: dash.src, },
    { ID: 11, Symbol: "waves", Name: "Bitcoin", crypt: "NEM", lastprice: "$181.39", MarkerCap: "$3,084,108,676", Change: "danger", platform: "Trade", image: waves.src, },
  ];

const Marketcapcom = () => {
  return (
    <div>
    {/* <!-- row --> */}
	<Row className="row-sm">
        <Col lg={6} xl={6} xxl={3} md={6} >
          <Card className="custom-card">
            <Card.Body className="">
              <h5 className="tx-14">BTC / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">34.4324 <span className="text-muted tx-12">$29.42</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-danger me-2 font-weight-bold">-0.22%</span>
                    Volume - 76,434 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} id="btc-market" options={marketcap.Marketcap1}  className="ms-auto float-end" data={marketcap.marketcap1} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} xxl={3} md={6}>
          <Card className="custom-card">
            <Card.Body className=" ">
              <h5 className="tx-14">ETH / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">29.4124 <span className="text-muted tx-12">$23.15</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-success me-2 font-weight-bold">+0.23%
                    </span>
                    Volume - 23,346 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} options={marketcap.Marketcap2} className="ms-auto float-end"  data={marketcap.marketcap2} id="ethereum-market" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} xxl={3} md={6}>
          <Card className="custom-card">
            <Card.Body className=" ">
              <h5 className="tx-14">XRP / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">34.5674 <span className="text-muted tx-12">$45.24</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-danger me-2 font-weight-bold">-0.42%</span>
                    Volume - 56,456 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} options={marketcap.Marketcap3} className="ms-auto float-end" data={marketcap.marketcap3} id="xrp-market" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xl={6} xxl={3} md={6}>
          <Card className="custom-card">
            <Card.Body className="">
              <h5 className="tx-14">LTC / USD</h5>
              <div className="d-flex">
                <div className="volume">
                  <h4 className="mb-2">45.4542 <span className="text-muted tx-12">$63.34</span></h4>
                  <div className="d-flex text-muted tx-13">
                    <span className="text-success me-2 font-weight-bold">-0.12%</span>
                    Volume - 34,462 USDT
                  </div>
                </div>
                <div className="d-flex ms-auto float-end">
                  <Line width={150} height={120} options={marketcap.Marketcap4} className="ms-auto float-end" data={marketcap.marketcap4} id="ltc-market" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
						{/* <!-- End row -->

						<!-- row opened --> */}
						<Row>
        <Col xl={12} lg={12} md={12}>
          <Card className="custom-card crypto-custom-card">
            <Card.Header className=" border-bottom-0"><label className="main-content-label my-auto">Crypt Marketing Values</label></Card.Header>
            <Card.Body>
              
                <Table hover="true" responsive="true" className="table text-nowrap border">
                  <thead className="table border-bottom">
                    <tr>
                      <th className="bg-transparent">No</th>
                      <th className="bg-transparent">Name</th>
                      <th className="bg-transparent">Last Price</th>
                      <th className="bg-transparent">Market Cap</th>
                      <th className="bg-transparent">Change(24h)</th>
                      <th className="bg-transparent">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CryptMarketingValues.map((items, index) => (
                      <tr key={index} data-index={index} >
                        <td>{items.ID}</td>
                        <td ><img src={items.image} className="wd-30 ht-30 me-3" alt="img" />{items.Name} <b>{items.crypt}</b></td>
                        <td>{items.MarkerCap}</td>
                        <td>{items.lastprice}</td>
                        <td><span className={`text-${items.Change}`}>+3.49%</span></td>
                        <td><b className="btn btn-outline-primary btn-sm">{items.platform}</b></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
						{/* <!-- Row End --> */}
    </div>
  )
}

export default Marketcapcom