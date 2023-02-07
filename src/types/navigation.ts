export interface NavigationProps {
    children?: React.ReactNode | React.ReactNode[];
    className?: string | undefined;
}
  
  export interface NavigationItemProps {
    name: string
    path: string
}