Array.prototype.parse2D = function () {
  const rows = [];
  for (let i = 0; i < this.length; i += 16) {
    rows.push(this.slice(i, i + 16));
  }

  return rows;
};

Array.prototype.createObjectsFrom2D = function () {
  const objects = [];
  this.forEach((row, index_y) => {
    row.forEach((symbol, index_x) => {
      if (symbol === 292) {
        objects.push(
          new CollisionBlock({
            position: {
              x: index_x * 64,
              y: index_y * 64,
            },
          })
        );
      }
    });
  });
  return objects;
};
