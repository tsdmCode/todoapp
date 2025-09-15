export default function saveData(data) {
  localStorage.setItem('todoapp_data', JSON.stringify(data));
}
