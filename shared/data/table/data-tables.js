import React,{useContext, useState, useEffect} from "react";
import DataTable from "react-data-table-component";
const DataTableExtensions = dynamic(() => import('react-data-table-component-extensions'), { ssr: true });
import differenceBy from 'lodash/differenceBy';
import { Button } from "react-bootstrap";
import "react-data-table-component-extensions/dist/index.css";
import dynamic from "next/dynamic";
import { AuthContext } from '../../../context/AuthContext';

export const DataTables = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(tableDataItems);

  const handleRowSelected = React.useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "S.NO",
      selector: row => [row.SNO],
      sortable: true
    },
    {
      name: "NAME",
      selector: row => [row.NAME],
      sortable: true
    },
    {
      name: "LAST NAME",
      selector: row => [row.LASTNAME],
      sortable: true
    },
    {
      name: "POSITION",
      selector: row => [row.POSITION],
      sortable: true,

    },
    {
      name: "DATE",
      selector: row => [row.DATE],
      sortable: true,

    },
    {
      name: " SALARY",
      selector: row => [row.SALARY],
      sortable: true
    },
    {
      name: "EMAIL",
      selector: row => [row.EMAIL],
      sortable: true
    },
  ];
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {

      if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.SNO)}?`)) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, 'SNO'));
      }
    };

    return (
      <Button key="delete" onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [data, selectedRows, toggleCleared]);
  const tableDatas = {
    columns,
    data,
  };
  return (

    <DataTableExtensions {...tableDatas} >
      <DataTable
        title
        columns={columns}
        data={data}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
      />
    </DataTableExtensions>
  );
}

function convertArrayOfObjectsToCSV(array) {

  console.log("meus dados download", array)
  let result;


  const columnDelimiter = ',';
  const lineDelimiter = '\n';
  const keys = Object.keys(array[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach(item => {
    let ctr = 0;
    keys.forEach(key => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}
// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
export function downloadCSV(array) {

  console.log("cheguei", array)

  const link = document.createElement('a');
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = 'export.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', filename);
  link.click();
}
const Export = ({ onExport }) => <Button onClick={e => onExport(e.target.value)}>Download Relatório</Button>;

export const ExportCSV = () => {
  const { relatorios, loadingRelatorios } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [inputError, setInputError] = useState(false);


  useEffect(() =>{
    loadingRelatorios()
  },[])


  console.log("relatorios", relatorios?.relatorio);

  const data = relatorios?.relatorio;
  const columns = [
    {
      name: "Nome do prestador",
      selector: row => [row.razao_prestador],
      sortable: true
    },
    {
      name: "CNPJ",
      selector: row => [row.cnpj_prestador],
      sortable: true
    },
    {
      name: "Nr da NF",
      selector: row => [row.nim_nota_fiscal],
      sortable: true
    },
    {
      name: "Cod.Seviço",
      selector: row => [row.codigo_servico],
      sortable: true,

    },
    {
      name: " Mun.Emissão",
      selector: row => [row.mun_emissao],
      sortable: true
    },
    {
      name: "Mun.Prestação",
      selector: row => [row.mun_prestacao],
      sortable: true
    },
    {
      name: "Valor dos serviços",
      selector: row => [row.valor_total_nota],
      sortable: true
    },
    {
      name: "Base de calculo",
      selector: row => [row.base_de_calculo],
      sortable: true
    },
    {
      name: "Aliquota",
      selector: row => [row.aliquota],
      sortable: true
    },

    {
      name: "Valor iss",
      selector: row => [row.valor_iss],
      sortable: true
    },
    {
      name: "Status",
      selector: row => [row.status],
      sortable: true
    }
  ];

  const regexNomePrestador = new RegExp(searchTerm, 'i');
  const regexCNPJ = /^\d{14}$/;

  const handleSearchChange = e => {
    const value = e.target.value;
 
    if (
      (selectedFilter === 'nome' && regexNomePrestador.test(value)) ||
      (selectedFilter === 'cnpj' && regexCNPJ.test(value)) ||
      (selectedFilter === 'nota' && regexNomePrestador.test(value)) ||
      (selectedFilter === 'cod' && regexNomePrestador.test(value)) ||
      (selectedFilter === 'emissao' && regexNomePrestador.test(value)) ||
      (selectedFilter === 'prestacao' && regexNomePrestador.test(value)) ||
      (selectedFilter === 'serviços' && regexNomePrestador.test(value)) ||
      (selectedFilter === 'calculo' && regexNomePrestador.test(value)) ||
      (selectedFilter === 'aliquotata' && regexNomePrestador.test(value)) ||
      (selectedFilter === 'iss' && regexNomePrestador.test(value)) ||
      (selectedFilter === 'status' && regexNomePrestador.test(value)) ||
      value === ''
    ) {
      setInputError(false);
    } else {
      setInputError(true);
    }

    setSearchTerm(value);
  };

  const filteredData = data?.filter(item => {
    if (selectedFilter === 'nome') {
      return item.razao_prestador?.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedFilter === 'cnpj') {
      return item.cnpj_prestador?.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedFilter === 'nota') {
      return item.nim_nota_fiscal?.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedFilter === 'cod') {
      return item.codigo_servico?.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedFilter === 'emissao') {
      return item.mun_emissao?.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedFilter === 'prestacao') {
      return item.mun_prestacao?.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (selectedFilter === 'serviços') {
      return item.valor_total_nota?.includes(searchTerm.toLowerCase());
    } else if (selectedFilter === 'calculo') {
      if (typeof item.base_de_calculo === 'string') {
        return item.base_de_calculo.includes(searchTerm);
      } else if (item.base_de_calculo !== undefined) {
        return item.base_de_calculo.includes(searchTerm);
      }
      return false; // Handle the case where item.aliquota is undefined
    }else if (selectedFilter === 'aliquota') {
      if (typeof item.aliquota === 'string') {
        return item.aliquota.includes(searchTerm);
      } else if (item.aliquota !== undefined) {
        return item.aliquota.toString().includes(searchTerm);
      }
      return false; // Handle the case where item.aliquota is undefined
    }
     else if (selectedFilter === 'status') {
      return item.status?.toLowerCase().includes(searchTerm.toLowerCase());
    }
    
    // Handle other filters or return false if no filter matches
    return true;
    
  });

  

    console.log("fitlros", filteredData);



  const tableDatas = {
    columns,
    data: filteredData,
  };

  const actionsMemo = <Export onExport={() => downloadCSV(filteredData)} />

  return (
    <div>

      <div style={{display: 'flex', alignItems: 'center'}}>
        <div className="filter-dropdown" style={{width: '20vw'}}>
          <select
            value={selectedFilter}
            style={{width: '100%'}}
            className="p-1 w-[75px] btn ripple btn-primary"
            onChange={e => setSelectedFilter(e.target.value)}
          >
            <option style={{height: 30}} value="">Filtrar por:</option>
            <option style={{height: 30}} value="nome">Nome do Prestador</option> 
            <option style={{height: 30}} value="cnpj">CNPJ</option>
            <option style={{height: 30}} value="nota">Nr da NF</option>
            <option style={{height: 30}} value="cod">Cod. Serviço</option>
            <option style={{height: 30}} value="emissao">Mun.Emissão</option>
            <option style={{height: 30}} value="prestacao">Mun.Prestação</option>
            <option style={{height: 30}} value="serviços">Valor dos serviços</option>
            <option style={{height: 30}} value="calculo">Base de calculo</option>
            <option style={{height: 30}} value="aliquota">Aliquota</option>
            <option style={{height: 30}} value="iss">Valor iss</option>
            <option style={{height: 30}} value="status">Status</option>


          </select>
          </div>
          <div style={{width:'32vw'}}>
            <input
              style={inputError ? {marginLeft: 10, background: 'transparent', border: '1px solid #ccc', borderRadius: 4, padding: 8, width: '100%', border: '3px solid #ccc'} : {marginLeft: 10, background: 'transparent', border: '1px solid #ccc', borderRadius: 4, padding: 8, width: '100%'}}
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
        </div>
      </div>

      <DataTableExtensions {...tableDatas}>
        <DataTable columns={columns} data={filteredData} actions={actionsMemo} pagination  />
      </DataTableExtensions>
    </div>
  );
};