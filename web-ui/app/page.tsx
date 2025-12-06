'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import SearchSection from '@/components/SearchSection';
import AgentActivity from '@/components/AgentActivity';
import RecommendationSection from '@/components/RecommendationSection';
import { mockRecommendations, mockTrending } from '@/lib/mockData';

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    setIsSearching(true);

    // Simulate agent processing
    await new Promise(resolve => setTimeout(resolve, 6000));

    setIsSearching(false);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-[1400px] mx-auto px-4 py-8">
        <SearchSection onSearch={handleSearch} />

        {isSearching && (
          <div className="mt-8">
            <AgentActivity />
          </div>
        )}

        {!isSearching && (
          <>
            <RecommendationSection
              title="🌟 Top Picks for You"
              subtitle="Personalized recommendations based on your preferences"
              recommendations={mockRecommendations}
              layout="grid"
            />

            <RecommendationSection
              title="🔥 Trending Now"
              subtitle="What everyone is watching right now"
              recommendations={mockTrending}
              layout="scroll"
            />

            {query && (
              <RecommendationSection
                title={`📊 Because you searched "${query}"`}
                subtitle="Similar content you might enjoy"
                recommendations={mockRecommendations.slice(0, 4)}
                layout="grid"
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
