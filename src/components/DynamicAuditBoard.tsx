import React, { useState } from 'react';

// Astro कडून येणाऱ्या डेटाचा टाईप
interface Post {
  id: string;
  slug: string;
  data: {
    title: string;
    excerpt: string;
    publishDate: Date;
    category: string;
    coverImage: any;
  };
}

interface DynamicAuditBoardProps {
  posts: Post[];
}

export default function DynamicAuditBoard({ posts }: DynamicAuditBoardProps) {
  // डिफॉल्ट कॅटेगरी 'All Data' ठेवली आहे
  const [activeCategory, setActiveCategory] = useState('All Data');

  // कॅटेगरीजची लिस्ट (हवी तर अजून वाढवू शकतोस)
  const categories = ['All Data', 'NMC Alerts', 'Financial Truths', 'FMGE Data', 'Exposé'];

  // ॲक्टिव्ह कॅटेगरीनुसार पोस्ट्स फिल्टर करणे
  const filteredPosts = activeCategory === 'All Data' 
    ? posts 
    : posts.filter(post => post.data.category === activeCategory);

  return (
    <div className="w-full">
      {/* १. The Dynamic Filter Buttons */}
      <div className="flex flex-wrap gap-2 lg:gap-3 justify-center md:justify-start mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === category
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* २. The Animated Grid */}
      {/* टीप: इथे आपण Tailwind चं ॲनिमेशन लावलं आहे जेणेकरून फिल्टर झाल्यावर कार्ड्स स्मूथली येतील */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <a 
              key={post.id} 
              href={`/intelligence/${post.id.split('.')[0]}`} 
              className="group block bg-[#0a0f1c] border border-slate-800 hover:border-emerald-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:-translate-y-1"
            >
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 mb-3">
                  {post.data.category}
                </p>
                <h3 className="text-xl font-serif text-slate-200 font-medium leading-snug mb-3 group-hover:text-white transition-colors">
                  {post.data.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {post.data.excerpt}
                </p>
                <div className="mt-6 flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-emerald-400 transition-colors">
                  Read Audit Report →
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-full py-12 text-center border border-dashed border-slate-800 rounded-2xl">
            <p className="text-slate-500 font-mono text-sm">No classified data found in this vault yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}