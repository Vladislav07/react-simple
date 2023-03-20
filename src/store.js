let note = {
  title: 'new',
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
aspernatur modi numquam quo asperiores natus enim itaque amet? Corporis
autem obcaecati voluptates aperiam illum blanditiis doloremque enim, ut
quos praesentium.`,
};

let data=[note, note, note]

class Store {
  getItems() {
    return data;
  }

  addItem(note) {
    data.push(note)
  }

  removeItem(note) {}
}

let instance = new Store();
export default instance;
