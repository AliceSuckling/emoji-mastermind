import storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";
import merger from "redux-storage-merger-immutablejs";
import filter from "redux-storage-decorator-filter";
import debounce from "redux-storage-decorator-debounce";

const engine = debounce(filter(createEngine("__mastermind"), [
  // Allowed keys go here
]), 1000);

const middleware = storage.createMiddleware(engine);

export { storage, middleware, engine, merger };
