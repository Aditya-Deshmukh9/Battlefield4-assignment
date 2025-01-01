function Breadcrumbs() {
  return (
    <div className="mt-5">
      <div className="text-[14px] font-semibold flex items-center gap-x-3">
        <span className="mr-2">
          <img src="/back.svg" alt="back.svg" />
        </span>
        <span>MULTIPLAYER</span>
        <span>/</span>
        <span>SERVER BROWSER</span>
        <span>/</span>
      </div>
      <h1 className="text-3xl font-semibold">SERVER INFO</h1>
    </div>
  );
}

export default Breadcrumbs;
