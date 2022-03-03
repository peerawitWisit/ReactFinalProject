import React from 'react'
import { useParams, useHistory } from "react-router-dom"
import axios from 'axios'
import { Spinner, Card, CardDeck, Button } from "react-bootstrap"
import { InnerLayout, MainLayout } from '../styles/Layout'
import Title from '../Components/Title'
import { motion } from 'framer-motion'

const DetailPage = () => {

    const { id, title } = useParams()
    const history = useHistory()

    const [detail, setDetail] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const getData = async (id) => {
        try {
            setLoading(true) //เริ่มหมุน
            const resp = await axios.get('https://api.codingthailand.com/api/course/' + id)
            //console.log(resp.data)
            setDetail(resp.data.data)
        } catch (error) {
            //console.log(error.response)
            setError(error)
        } finally {
            setLoading(false)//หยุดหมุน
        }
    }

    React.useEffect(() => {
        getData(id)
    }, [id])

    if (loading === true) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="danger" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center mt-5 text-danger">
                <h4>Error for API ,Please try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }

    return (

        <motion.div initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
        <MainLayout>
            <InnerLayout>
            <Title title={"Detail"} span={"Detail"}/>
            
            <div className="row">
                <div className="col-md-12 mt-2">
                    
                    <h2>{title} ({id})</h2>
                    <Button variant="secondary" onClick={() => {
                        history.goBack()
                    }}>Back</Button>{' '}
                    <div className='row mt-4'>
                            {
                                detail.length > 0 ? (
                                    detail.map((d, index) => {
                                        return (
                                            <div className='col-md-4' key={d.ch_id}>
                                                <div className='mb-4 shadow-sm'>
                                                        {d.ch_title}
                                                       
                                                        <small className="text-muted">{d.ch_dateadd}</small>
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (
                                    <h1>No Data</h1>
                                )
                            }
                    </div>
                </div>
            </div>
            </InnerLayout>
        </MainLayout>
        </motion.div>
    )
}

export default DetailPage
