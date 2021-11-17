import React, { Component,useContext } from 'react'
import { globalContext } from '../../Context/GlobalState'
import { Accordion, Card, Button } from 'react-bootstrap';

const  Faq  = () => {
  const { isDark  } = useContext(globalContext)
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            FAQ
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">FAQ</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card" style={{background:isDark ? 'white' : '#191c24'}}>
              <div className="card-body">
                <div className="faq-section">
                  <div className="container-fluid bg-success py-2">
                    <p className="mb-0 text-white">Section 1</p>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Card style={{background:isDark ? 'white' : '#191c24', color:isDark ? 'black' : 'white',border:isDark? '1px solid black': ''}}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          How many instances of Lorum Ipsum usage can be found on the web?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>                          
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card style={{background:isDark ? 'white' : '#191c24', color:isDark ? 'black' : 'white',border:isDark? '1px solid black': ''}}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          What is Lorum Ipsum and who invented it?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>                        
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card style={{background:isDark ? 'white' : '#191c24', color:isDark ? 'black' : 'white',border:isDark? '1px solid black': ''}}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                          How may times Lorum Ipsum has been used in this theme?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>                                               
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="faq-section">
                  <div className="container-fluid bg-warning py-2">
                    <p className="mb-0 text-white">Section 2</p>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Card style={{background:isDark ? 'white' : '#191c24', color:isDark ? 'black' : 'white',border:isDark? '1px solid black': ''}}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          How many instances of Lorum Ipsum usage can be found on the web?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>                          
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card style={{background:isDark ? 'white' : '#191c24', color:isDark ? 'black' : 'white',border:isDark? '1px solid black': ''}}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          What is Lorum Ipsum and who invented it?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>                        
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card style={{background:isDark ? 'white' : '#191c24', color:isDark ? 'black' : 'white',border:isDark? '1px solid black': ''}}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                          How may times Lorum Ipsum has been used in this theme?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>                                               
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="faq-section">
                  <div className="container-fluid bg-danger py-2">
                    <p className="mb-0 text-white">Section 3</p>
                  </div>
                  <Accordion defaultActiveKey="0">
                    <Card style={{background:isDark ? 'white' : '#191c24', color:isDark ? 'black' : 'white',border:isDark? '1px solid black': ''}}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          How many instances of Lorum Ipsum usage can be found on the web?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>                          
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card style={{background:isDark ? 'white' : '#191c24', color:isDark ? 'black' : 'white',border:isDark? '1px solid black': ''}}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          What is Lorum Ipsum and who invented it?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>                        
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card style={{background:isDark ? 'white' : '#191c24', color:isDark ? 'black' : 'white',border:isDark? '1px solid black': ''}}>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                          How may times Lorum Ipsum has been used in this theme?
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <p className="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>                                               
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Faq
