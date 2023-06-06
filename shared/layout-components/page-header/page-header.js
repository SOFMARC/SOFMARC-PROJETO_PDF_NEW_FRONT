import React,{Fragment, useState, useContext,useEffect} from 'react'
import { DropzoneAreaBase } from "material-ui-dropzone";
import {
	Card,
	Col,
	Dropdown,
	Nav,
	Pagination,
  Alert,
	Row,Button, Modal,
  Spinner
  } from "react-bootstrap";

import { GlobalContext } from '../../../context/GlobalState';
import Router from "next/router";
import { AuthContext } from '../../../context/AuthContext';
import { cadastro_permission } from '../../../services/database';
import useSWR from 'swr';

const PageHeader = (props) => {
  const [show, setShow] = useState(false);
  const [Basic, setBasic] = useState(false) 
  const [loading, setLoading] = useState(false) 
	const [files, setFiles] = useState([]);
  const [filesIds, setFilesIds] = useState([]);
  const [token, setToken] = useState('')
  const [select, setSelect] = useState('')
  
  const [perid, setPerId] = useState('')


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errLog, setErrLog] = useState(false);

  const status = [{per_id: 182, tipo: "Empresa"}, {per_id: 183, tipo: "Administrador"}, {per_id: 184, tipo: "Operador"}]

  useEffect(() =>{
    getToken()
  },[])

  async function getToken() {
    let res = localStorage.getItem('token', token);
    console.log("my token", res)
    setToken(res)
  }

  console.log('token', token)

  const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  const { atualizarListaIds, atualizarListaUsers } = useContext(GlobalContext);
  const { user, loadingStoreData, get_alls_users_clients, get_uploads_user } = useContext(AuthContext);


  const handleAdd = async (newFiles) =>  {
    console.log("add")
    newFiles = newFiles.filter(
		
      (file) => !files.find((f) => f.data === file.data)
	  
    );
	  
    console.log('files', newFiles);
    setFiles([...files, ...newFiles]);

	};

  const handleSubmit = async () => {
    setLoading(true)
    const id = []

    const url = "http://127.0.0.1:5000"

    let i = 0
    
    while(i < files.length) {
      const form_data = new FormData();
      console.log('file send', files[i])
      form_data.append(`file`, files[i].file, files[i].file.name);

      const res = await fetch(`${url}/uploader`, { method: 'POST',  headers: {Authorization: `Bearer ${token}`}, body: form_data }) 
      const data = await res.json()

      atualizarListaIds(data);
      get_uploads_user()

      i+=1
    }


    setTimeout(()=> {
      setLoading(false)
      handleClose()
    },1000)

    

  }

	const handleDelete = (deleted) => {
	  setFiles(files.filter((f) => f !== deleted));
	};
  
  const viewDemoShow = (modal) => {
    setBasic(true)
  }

  const viewDemoClose = (modal) => {
    setBasic(false)
  }

  const { mutate } = useSWR('allUsers', get_alls_users_clients);


  const handleCadastro = async ()  => {
    //console.log("users:", user)
    //console.log("cadastro user page:", name, email, password)
    
    let data = {id_cliente: user.id_client, per_id: perid, name: name, email:email, password:password}
    
    //console.log("users:", data)

    const res = await cadastro_permission(data)

    

    if(res.data.name === 'error') {
      setErrLog(true)
    } else {
      mutate()
      handleClose()
    }
  }

  if(props.active_item === "UserList") {
    return (
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">{props.title}</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a>{props.item}</a></li>
            <li className="breadcrumb-item active" aria-current="page">{props.active_item}</li>
          </ol>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Fragment>
              <div className="card-body text-center">
                  <Button className="btn ripple btn-primary btn-block" onClick={handleShow}>
                      <i className="fe fe-download-cloud me-2"></i> Criar usuarios
                  </Button>
  
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Adicionar arquivos PDFs</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row className=" row-sm">
                        <Col lg={12} md={12}>
                          <Card className=" custom-card">
                            <Card.Body>

                              <div>
                                <h6 className="main-content-label mb-1">Insira um novo membro</h6>
                                <p className="text-muted card-sub-title">
                                  Cadastre as infromações acesso ao usuario
                                </p>
                              </div>
                              {errLog && 
                                <Alert style={{marginTop: 5}} variant="danger">
                                  <Button  onClick={() => setErrLog(false)} className="float-end btn-close" variant="default"><span aria-hidden="true">×</span></Button>
                                  <strong>Oh snap!</strong> Change a few things up and try submittingagain.
                                </Alert>
                              }

                              <div className="d-flex flex-column">
                                <div className="form-group">
                                  <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    placeholder="Insira o nome"
                                    type="text"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    placeholder="Insiara o email"
                                    type="email"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    placeholder="Insira a senha"
                                    type="password"
                                  />
                                </div>
                                <div className="form-group flex items-center justify-center mt-4">
                                  <h6 className="main-content-label mb-1">Insira um novo membro: { select }</h6>
                                </div>
                                <div style={{marginTop: -10}} className="form-group flex">
                                  {status.map((res) => (
                                   <div style={{cursor: 'pointer', borderRadius: 5, marginTop: 12}} onClick={()=> [setSelect(res.tipo), setPerId(res.per_id)]} className='flex items-center justify-center w-full border border-zinc-200  p-2'>
                                    <span style={{fontWeight: 'normal', marginLeft: 5, color: '#a5b1c2'}}>{res.tipo}</span>
                                   </div>
                                  ))}
                                </div>
                                <Button onClick={()=> handleCadastro()} className="btn ripple btn-main-primary">Cadastrar usuario</Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Modal.Body>
                  </Modal>
              </div>
            </Fragment>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="page-header">
      <div>
        <h2 className="main-content-title tx-24 mg-b-5">{props.title}</h2>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a>{props.item}</a></li>
          <li className="breadcrumb-item active" aria-current="page">{props.active_item}</li>
        </ol>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <Fragment>
            <div className="card-body text-center">
                <Button className="btn ripple btn-primary btn-block" onClick={handleShow}>
                    <i className="fe fe-download-cloud me-2"></i> Importar PDFs
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Adicionar arquivos PDFs</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <DropzoneAreaBase fileObjects={files}  
                    maxFileSize={50000000} // Define o tamanho máximo do arquivo em bytes (neste exemplo, 5 MB)
                    filesLimit={10}
                    onAdd={handleAdd} onDelete={handleDelete} />
                  </Modal.Body>
                  <Modal.Footer>
                    {
                    loading ? 

                    <Button variant="secondary" disabled>
                      <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"
                      />
                      Envio em andamento...
                    </Button>

                    :

                    <Button variant="secondary" onClick={handleSubmit}>
                     Processar PDF
                    </Button>

                    }


                    <Button variant="primary" onClick={handleClose}>
                      Cancelar
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>
          </Fragment>
        </div>
      </div>
    </div>
  )
}

export default PageHeader


