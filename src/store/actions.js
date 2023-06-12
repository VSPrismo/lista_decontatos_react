// Actions types
export const ADD_CONTACT = "ADD_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

// Action creators
export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    payload: id,
  };
};

export const editContact = (id) => {
  return {
    type: EDIT_CONTACT,
    payload: id,
  };
};
