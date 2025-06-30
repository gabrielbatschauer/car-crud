export function capitalize(str) {
  // Função para capitalizar a primeira letra de uma string
  // Ela verifica se a string é válida, e se sim, transforma a primeira letra em maiúscula
  // e o restante em minúsculas, retornando a string modificada
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
