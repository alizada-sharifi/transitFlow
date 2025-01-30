function HeadingItem({ icon: Icon, para1, para2 }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="logo p-5 rounded-full bg-primary-100 border border-primary-200">
        <Icon />
      </div>
      <div className="content text-white font-Krub">
        <p>{para1}</p>
        <p>{para2}</p>
      </div>
    </div>
  );
}

export default HeadingItem;
