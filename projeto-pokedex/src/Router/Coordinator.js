export const goToPokedex = (history) => {
  history.push("/pokedex");
};

export const goToPokeDetails = (history, id) => {
  history.push(`/pokemon-details/${id}`);
};

export const goToHome = (history) => {
  history.push("/");
};

export const goToBack = (history) => {
  history.go(-1)
};