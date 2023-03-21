export function ListNodeUI({ val, next }) {
  return (
    <li>
      {val}
      {next ? <ul><ListNodeUI {...next} /></ul> : null}
    </li>
  );
}
export function createListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

//export default ListNodeUI;
