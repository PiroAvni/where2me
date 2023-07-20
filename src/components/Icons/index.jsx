export const HomeIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    viewBox="0 0 24 24"
    className={` w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="#494fff"
      d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
    />
  </svg>
);

export const FriendsIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    viewBox="0 0 32 32"
    className={` w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h32v32H0z" />
    <path
      fill="#494fff"
      d="M9 7c-3.3 0-6 2.7-6 6 0 1.984.977 3.75 2.469 4.844C2.832 19.152 1 21.864 1 25h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.137-1.832-5.848-4.469-7.156A6.006 6.006 0 0 0 29 13c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844A8.063 8.063 0 0 0 16 21.125a8.063 8.063 0 0 0-3.469-3.281A6.006 6.006 0 0 0 15 13c0-3.3-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4zm14 0c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4z"
    />
  </svg>
);

export const MapIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    viewBox="0 0 100 100"
    className={` w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h100v100H0z" />
    <path
      fill="#494fff"
      d="m70.387 70-3.854 7.247 18.87-3.085c-3.808-1.91-8.963-3.275-15.016-4.162Zm-48.61 1.58C13.037 73.885 7.5 77.662 7.5 83.272a8.4 8.4 0 0 0 .774 3.497l30.285-4.95zM91.79 80l-42.15 6.87 11.116 12.646C79.01 97.881 92.5 92.05 92.5 83.272c0-1.17-.252-2.257-.71-3.271zm-49.272 8.055-28.48 4.655C21.566 97.374 34.853 100 50 100c.918 0 1.815-.026 2.719-.045z"
    />
    <path
      fill="#494fff"
      d="M50.002 0c-16.3 0-29.674 13.333-29.674 29.596 0 6.252 1.987 12.076 5.342 16.865l19.234 33.25.082.107c.759.991 1.5 1.773 2.37 2.348.87.576 1.95.92 3.01.814 2.118-.212 3.415-1.708 4.646-3.376l.066-.086 21.234-36.141.012-.023c.498-.9.866-1.816 1.178-2.708a29.246 29.246 0 0 0 2.17-11.05C79.672 13.333 66.302 0 50.002 0zm0 17.045c7.071 0 12.59 5.509 12.59 12.55 0 7.043-5.519 12.55-12.59 12.55-7.072 0-12.594-5.508-12.594-12.55 0-7.04 5.523-12.55 12.594-12.55z"
      color="#494fff"
    />
  </svg>
);
// export default {HomeIcon,MapIcon,FriendsIcon}