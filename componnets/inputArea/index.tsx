import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';

import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/filtrardorDados';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Invalid Date!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Invalid Category!');
    }
    if(titleField === '') {
      errors.push('Fill the title!');
    }
    if(valueField <= 0) {
      errors.push('write the amount!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

  return (
      <C.Container>
        <C.InputLabel>
          <C.InputTitle>Date</C.InputTitle>
          <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Category</C.InputTitle>
          <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Title</C.InputTitle>
          <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Amount</C.InputTitle>
          <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Add</C.Button>
        </C.InputLabel>
      </C.Container>
  );
}