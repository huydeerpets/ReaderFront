function getDefaultLanguage() {
  if (typeof localStorage !== 'undefined' && localStorage.getItem("rf_language") === null) {
    localStorage.setItem("rf_language", "en");
    return "en";
  } else if (typeof localStorage !== 'undefined' && localStorage.getItem("rf_language") !== null) {
    return localStorage.getItem("rf_language");
  } else {
    return "en"
  }
}

let initialState = getDefaultLanguage();

export function language(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_CHANGE_LANGUAGE":
      localStorage.setItem("rf_language", action.language);
      return action.language;

    default:
      return state;
  }
}
