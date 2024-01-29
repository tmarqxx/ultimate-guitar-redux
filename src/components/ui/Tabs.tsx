import * as RadixTabs from "@radix-ui/react-tabs";
import style from '../../styles/ui/Tabs.module.css'


const Root = ({ triggers, children }) => {
  return (
    <RadixTabs.Root className={style['tabs']} defaultValue="tab0">
      <RadixTabs.List  className={style['tabs_list']}>
        {triggers.map((label: string, index: number) => (
          <RadixTabs.Trigger  className={style['tabs_trigger']} value={`tab${index}`} key={index}>
            {label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>

      {children}
    </RadixTabs.Root>
  );
};

const Content = ({ children, value }) => {
  return (
    <RadixTabs.Content  className={style['tabs_content']} value={value}>
      {children}
    </RadixTabs.Content>
  )
}

export const Tabs = Object.assign(Root, { Content })
