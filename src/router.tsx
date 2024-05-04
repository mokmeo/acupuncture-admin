import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import { BaseLayout } from './layouts';

// NOTE: _app.tsx, 404.tsx
const DEFAULT_MODULES: Record<string, { [key: string]: any }> =
  import.meta.glob('/src/pages/(_app|404).tsx', { eager: true });

// NOTE: 일반 컴포넌트
const COMPONENT_MODULES: Record<string, { [key: string]: any }> =
  import.meta.glob('/src/pages/**/[a-z[]*.tsx', { eager: true });

// TODO: 변수 리팩토링
const defaultRoutes = Object.keys(DEFAULT_MODULES).reduce<{
  [key: string]: any;
}>((routes, modulePath) => {
  const key = modulePath.replace(/\/src\/pages\/|\.tsx$/g, '');
  return { ...routes, [key]: DEFAULT_MODULES[modulePath].default };
}, {});

const components = Object.keys(COMPONENT_MODULES).map((modulePath) => {
  const path = modulePath
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  return { path, component: COMPONENT_MODULES[modulePath].default };
});

export const Router = () => {
  const App = defaultRoutes?.['_app'] || Fragment;
  const NotFound = defaultRoutes?.['404'] || Fragment;

  return (
    <Routes>
      <Route element={<App />}>
        {components.map(({ path, component: Component = Fragment }) => (
          <Route
            index
            key={path}
            path={path}
            element={
              <BaseLayout>
                <Component />
              </BaseLayout>
            }
          />
        ))}
        <Route path="*" element={NotFound} />
      </Route>
    </Routes>
  );
};
