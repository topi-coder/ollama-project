"use client";
import { useState } from "react";
import { items, CraftingItem } from "../data/items";
import { Search, Package, Tool, Shield, Home, Utensils } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<CraftingItem | null>(null);

  const categories = {
    tool: { label: "ツール", icon: Tool },
    weapon: { label: "武器", icon: Shield },
    base: { label: "拠点", icon: Home },
    consumable: { label: "消費", icon: Utensils },
    material: { label: "素材", icon: Package },
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  
  return (
    <div className="max-w-md mx-auto p-4 space-y-6 pb-20 font-sans">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-amber-500">7DTD Crafting</h1>
        <p className="text-slate-400 text-sm">アイテム素材検索ガイド</p>
      </header>

      <div className="sticky top-4 z-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="アイテム名で検索..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {Object.entries(categories).map(([key, { label, icon: Icon }]) => (
          <button key={key} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-200 whitespace-nowrap active:bg-amber-600 transition-colors">
            <Icon className="w-3 h-3" /> {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            onClick={() => setSelectedItem(item)} 
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 active:scale-95 transition-transform cursor-pointer hover:border-amber-500/50"
          >
            <div className=\"flex justify-between items-center\">
              <span className=\"font-medium text-slate-100\">{item.name}</span>
              <span className=\"text-xs text-slate-500\">{categories[item.category as keyof typeof categories]?.label}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 rounded-t-3xl sm:rounded-3xl border border-slate-800 p-6 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/20 rounded-lg">
                  <Package className