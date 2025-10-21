import { useTranslate } from "../hooks/useTranslate";

export const Footer = () => {
  const t = useTranslate();

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 md:py-10 mb-15 text-center">
      <p className="my-3 md:mt-5">© Patricio Esparza, 2025 - 無限力</p>
      <p className="mt-1 md:mt-5">{ t("footer.sourceCode") }: <a className="text-blue-600 dark:text-blue-200 italic underline" href="https://github.com/brutalkingran/portfolio-esparza">portfolio-esparza</a></p>
    </footer>
  );
}

export default Footer;
