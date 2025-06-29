type ScrollToTopButtonProps = {
  visible: boolean;
};

const ScrollToTopButton = ({ visible }: ScrollToTopButtonProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8
        bg-blue-600 text-white px-4 py-2 rounded shadow
        hover:bg-blue-700 transition
        opacity-${visible ? '100' : '0'}
        pointer-events-${visible ? 'auto' : 'none'}
        transition-opacity duration-700
      `}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
