import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Component = "div", className = "", children, ...props }) {
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={nodeRef} className={`reveal ${visible ? "is-visible" : ""} ${className}`} {...props}>
      {children}
    </Component>
  );
}
