import React,{useContext} from 'react'
import { Form } from 'react-bootstrap';
import {
    globalContext
} from '../../Context/GlobalState'
const Contact = () => {
    const { tokenAddress, setTokenAddress, setGO, runMain, setTokenPrice,
        setMarketCap, setTokenName, settransdata, isDark, setIsDark, setCirsupply, setVolume, setTokenLogo, setTokenSymbol, setLiquidityval, settransdata1, settotalSupply, setisToggleShow } = useContext(globalContext)
    return (
        <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body" style={{background: isDark ? 'lightgray' : '#14161d', color: isDark ? 'black': '#ffff'}}>
                        <h4 className="card-title" style={{ color: isDark ? 'black': '#ffff'}}>Submit a Recommendation</h4>
                        <form className="forms-sample">
                            <Form.Group>
                                <label htmlFor="exampleInputUsername1">Name</label>
                                <Form.Control style={{background: isDark ? 'lightgray' : '#14161d', color: isDark ? 'black': '#ffff'}} type="text" id="exampleInputUsername1" placeholder="Name" />
                            </Form.Group>
                            <Form.Group>
                                <label htmlFor="exampleInputUsername1">Telegram</label>
                                <Form.Control style={{background: isDark ? 'lightgray' : '#14161d', color: isDark ? 'black': '#ffff'}} type="text" id="exampleInputUsername1" placeholder="Telegram" />
                            </Form.Group>
                            <Form.Group>
                                <label htmlFor="exampleTextarea1">What do you think?</label>
                                <textarea style={{background: isDark ? 'lightgray' : '#14161d', color: isDark ? 'black': '#ffff'}} className="form-control" id="exampleTextarea1" rows="4"></textarea>
                            </Form.Group>
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button className="btn btn-dark" style={{background: isDark ? 'lightgray' : '#0d0d0d', color: isDark ? 'black': '#ffff'}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact