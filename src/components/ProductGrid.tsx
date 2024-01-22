import { motion } from 'framer-motion';
import { gridData } from "../GridData";
import { IoMdCart } from "react-icons/io";
import { useState } from 'react';

function ProductGrid() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleTouchStart = (index: number) => {
    setIsHovered(index);
  };

  const handleTouchEnd = () => {
    setIsHovered(null);
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-4">
      {gridData.map((data, index) => {
        const { img, h1, white } = data;
        return (
          <motion.div
            key={h1}
            className="relative h-[300px] w-[300px] md:h-[300px] md:w-[300px] bg-gradient-to-b from-[#11111F] to-[#C1A01E] shadow-md rounded-md overflow-hidden mx-auto"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart(index)}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="relative w-full h-full group"
              whileHover={{ opacity: 0.8 }}
            >
              {isHovered === index ? (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 bg-[#C1A01E] transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="flex flex-col items-center gap-3 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h1 className={`text-2xl font-bold ${white ? "text-white" : "text-black"}`}>{h1}</h1>
                    <motion.div
                      className="p-2 transition-opacity transform rounded-full opacity-75 bg-gold hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <IoMdCart size={55} color="white" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : null}
              <img
                className="object-cover object-center w-full h-full"
                src={img}
                alt={h1}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default ProductGrid;
