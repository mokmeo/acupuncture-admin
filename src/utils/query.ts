export const getAllQuery = (searchParams: URL['searchParams']) =>
  Object.keys(Object.fromEntries(searchParams)).reduce(
    (acc, query) => ({
      ...acc,
      [query]: searchParams.getAll(query),
    }),
    {},
  );
