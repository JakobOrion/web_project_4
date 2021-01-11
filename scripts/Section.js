class Section {
  constructor({items, renderer}, classSelector) {
    this._items = items;
    this._renderer = renderer;
    this._itemContainer = document.querySelector(classSelector);
  }

  renderItems() {
    this._items.forEach(item => {
      const card = this._renderer(item);
      this._itemContainer.append(card);
    })
  }

  addItem(card) {
    this._itemContainer.prepend(card);
  }
}

export default Section;
