let note = {
  title: 'new',
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
aspernatur modi numquam quo asperiores natus enim itaque amet? Corporis
autem obcaecati voluptates aperiam illum blanditiis doloremque enim, ut
quos praesentium.`,
};

class Store {
  getItems() {
    return [note, note, note];
  }

  addItem(note) {}

  removeItem(note) {}
}

let instance = new Store();
export default instance;
