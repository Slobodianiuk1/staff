import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks/store.hooks";
import styles from "../../common/styles/Sidebar.module.css";

const Sidebar = () => {
  const { list } = useAppSelector(({ categories }) => categories);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.title}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }: { isActive: boolean }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>

            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/help"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
