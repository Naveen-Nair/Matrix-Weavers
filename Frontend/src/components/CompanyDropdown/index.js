import React, { useState } from 'react';
import { Table, Thead, Tbody, Th, Tr, Select } from '@chakra-ui/react'; // Adjust import based on your UI library
import TablesTableRow from 'components/Tables/TablesTableRow'; // Import your row component

const CompanyTable = ({ }) => {
  const [selectedCompany, setSelectedCompany] = useState('');

  // Function to handle company selection
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };


  return (
    <div style={{color:'white'}}>
        Select Company 
      <Select
        placeholder='Select Company'
        onChange={handleCompanyChange}
        mb={4} // Margin-bottom for spacing
        style={{color:'white', fontColor:'white'}}
      >
        <option value='Reliance Digital'>Reliance Digital</option>
        <option value='Vijay Sales'>Vijay Sales</option>
        <option value='Aditya Vision'>Aditya Vision</option>
        <option value='Poojara'>Poojara</option>
        <option value='Bajaj Electronics'>Bajaj Electronics</option>
      </Select>
    </div>
  );
};

export default CompanyTable;
