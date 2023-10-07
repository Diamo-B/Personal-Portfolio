const useAutoScroll = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          window.scrollTo({
            top: section.offsetTop, // Scroll to the top of the section
            behavior: "smooth",
          });
        }
    };

    return{
        scrollToSection
    }
}
 
export default useAutoScroll;