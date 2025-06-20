import {
  SiJavascript,
  SiReact,
  SiAngular,
  SiFlutter,
  SiNodedotjs,
} from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { BsMicrosoft } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"

export default function TechGrid() {
  const { t } = useTranslation();

  const technologies = [
    {
      name: "Microsoft Stack",
      icon: BsMicrosoft,
      color: "#0080ff",
    },
    {
      name: "Laravel",
      icon: FaLaravel,
      color: "#ff2d20",
    },
    {
      name: "React & Next.js",
      icon: SiReact,
      color: "#61dafb",
    },
    {
      name: "JavaScript & TypeScript",
      icon: SiJavascript,
      color: "#f7df1e",
    },
    {
      name: "Angular",
      icon: SiAngular,
      color: "#dd1b16",
    },
    {
      name: "Node.js & NestJS",
      icon: SiNodedotjs,
      color: "#68A063",
    },
    {
      name: "Flutter & Swift",
      icon: SiFlutter,
      color: "#02569b",
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Title and Description */}
         <div className="max-w-7xl mx-auto relative z-10 ">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 tracking-tight ">
              <span className="text-[#ff7858] inline-block relative pb-3">
                {t("technologiesSection.title")}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#ff7858]/30 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.span>
              </span>{" "}
              <span className="text-[#1f3059] inline-block relative pb-3">
                {t("technologiesSection.title2")}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#1f3059]/30 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                ></motion.span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl leading-relaxed">{t("technologiesSection.description")}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff7858] to-[#1f3059] mx-auto rounded-full mt-8"></div>
          </motion.div>
        </motion.div>
      </div>

        {/* Technology Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
         {technologies.map((tech, index) => (
  <div
    key={tech.name}
    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] border border-gray-100"
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mr-4">
          <tech.icon
            className="w-7 h-7"
            style={{ color: tech.color }}
          />
        </div>
        <h4 className="text-xl font-semibold text-[#1f3059]">
          {t(`technologiesSection.technologies.${index}.name`)}
        </h4>
      </div>
      <p className="text-gray-600 leading-relaxed">
        {t(`technologiesSection.technologies.${index}.description`)}
      </p>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}