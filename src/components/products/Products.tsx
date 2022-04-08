import { motion } from "framer-motion";
const Products = () => {
  return (
    <section id="features" className="py-8 px-4">
      <div className="font-poppins max-w-7xl mx-auto ">
        {/* heading */}
        <h1 className="font-black my-8 text-4xl  text-[#383737]">
          PRODUCT OVERVIEW
        </h1>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-8 lg:gap-12  ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out overflow-hidden"
              src="/po1g.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Esprit Ruffle Shirt</h4>
            <p className="text-slate-800">$16</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po2g.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Herschel supply</h4>
            <p className="text-slate-800">$46</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po3b.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Only Check Trouser</h4>
            <p className="text-slate-800">$26</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po4g.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Front Pocket Jumper</h4>
            <p className="text-slate-800">$34.5</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po5g.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Vintage Inspired Classic</h4>
            <p className="text-slate-800">$56</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po6watch.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Pieces Metallic Printed</h4>
            <p className="text-slate-800">$5.34</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po7g.jpg"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">
              Converse All Star Hi Plimsolls
            </h4>
            <p className="text-slate-800">$12</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po8g.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Femme T-Shirt In Stripe</h4>
            <p className="text-slate-800">$23.5</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po9boot.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Herschel supply</h4>
            <p className="text-slate-800">$25.5</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po10g.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Herschel supply</h4>
            <p className="text-slate-800">$40</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po11b.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">T-Shirt with Sleeve</h4>
            <p className="text-slate-800">$13</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po12belt.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Pretty Little Thing</h4>
            <p className="text-slate-800">$19</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po13g.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Mini Silver Mesh Watch</h4>
            <p className="text-slate-800">$31.5</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po14shirt.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Square Neck Back</h4>
            <p className="text-slate-800">$50</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po15watch2.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Square Neck Back</h4>
            <p className="text-slate-800">$50</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              className="rounded-lg transform hover:scale-105 transition duration-250 ease-in-out"
              src="/po16g.webp"
              alt="random-img"
            />
            <h4 className="text-slate-500 my-2">Square Neck Back</h4>
            <p className="text-slate-800">$50</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
