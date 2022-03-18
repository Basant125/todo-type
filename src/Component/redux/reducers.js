const initialState = {
  company: [],
  filtered: [],
};

export const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMPANY":
      return {
        ...state,
        company: [...state.company, action.payload],
      };
    case "REMOVE_COMPANY":
      const index = state.company.findIndex(
        (item) => item.id === action.payload
      );

      const newCompany = [...state.company];
      if (index >= 0) {
        newCompany.splice(index, 1);
      } else {
        console.log("this id is not availabel");
      }
      return {
        ...state,
        company: newCompany,
      };

    case "SELECT_STATUS":
      const item = state.company.filter(
        (item) => item.status.toLowerCase() === action.payload.toLowerCase()
      );

      if (item.length > 0) {
        return {
          ...state,
          filtered: [...item],
        };
      }

    default:
      return state;
  }
};
