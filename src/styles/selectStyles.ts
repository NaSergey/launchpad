export const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: '#2d2d2d', // Цвет фона поля
      borderColor: '#9333ea', // Цвет рамки
      color: '#9333ea', // Цвет текста в поле
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#9333ea ', // Цвет фона выпадающего списка
      color: 'white', // Цвет текста в выпадающем списке
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#4b9cd3' : state.isFocused ? '#333' : '#1e1e1e', // Цвет фона для выбранного и фокусированного элемента
      color: 'white', // Цвет текста в опции
      padding: '10px',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#9e9e9e', // Цвет текста в плейсхолдере
    }),

  };
  