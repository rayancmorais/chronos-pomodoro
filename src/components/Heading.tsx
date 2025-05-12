import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({children}: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}

/*

export function Heading:(props: HeadingProps) {
  const {children} = props;
  return <h1 className={styles.heading}>{children}</h1>;
  
  */
