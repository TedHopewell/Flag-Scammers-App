
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
Sty
 export default function DropDown() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] =React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Email Address', value: 'Email Address'},
    {label: 'Physical Address', value: 'Physical Address'}
  ]);

  return (
    <DropDownPicker style={styles.droplist}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

const styles = StyleSheet.create({
    droplist: {
       height:'50%',
        paddingLeft: '2%',
        marginLeft: 5,
        width: '80%',
   
      },

})