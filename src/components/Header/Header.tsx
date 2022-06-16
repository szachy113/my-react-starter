import styles from './Header.module.css';

export default function Header() {
  const { title } = styles;

  return (
    <header>
      <h1 className={title}>Hello, World!</h1>
    </header>
  );
}
