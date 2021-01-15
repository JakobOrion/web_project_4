class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._itemContainer = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => {
      const card = this._renderer(item);
      this._itemContainer.append(card);
    })
  }

  addItem(card) {
    this._itemContainer.prepend(card);
  }
}

export default Section;
