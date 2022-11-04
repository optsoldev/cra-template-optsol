export const withHook =
  <HookType extends (...args: any) => any>(
    hook: HookType,
    Component: (props: ReturnType<HookType>) => JSX.Element
  ) =>
  (...[props]: Parameters<HookType>) => {
    return <Component {...hook(props)} />;
  };
