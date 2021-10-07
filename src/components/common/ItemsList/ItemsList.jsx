import cl from './ItemsList.module.css';

const ItemsList = ({ items, Component, itemsName, isListLoading = false, ...props }) => {
  if (!items.length && !isListLoading) {
    return <div className={cl.noItems}>There is no {itemsName}!</div>;
  }

  return (
    <div className={cl.items}>
      {items.map((item, index) => (
        <Component key={item.id} item={item} index={index} {...props} />
      ))}
    </div>
  );
};

export default ItemsList;
