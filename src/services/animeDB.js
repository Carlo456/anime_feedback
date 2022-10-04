const createCollectionsInIndexedDB = () => {
  const idb =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;
  if (!idb) {
    console.log("This browser doesn't support IndexedDB");
    return;
  }
  console.log(idb);
};

export default createCollectionsInIndexedDB;
