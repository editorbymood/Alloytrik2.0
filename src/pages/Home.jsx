import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ScrollingShowcase from '@/components/sections/ScrollingShowcase';
import FourPillars from '@/components/sections/FourPillars';
import About from '@/components/sections/About';
import Founders from '@/components/sections/Founders';
import CommunityMembers from '@/components/sections/CommunityMembers';
import Manifesto from '@/components/sections/Manifesto';

export function Home() {
    return (
        <Layout>
            <main className="flex-grow pt-16 bg-transparent text-[#111111]">
                {/* Hero section */}
                <Hero />

                {/* The Manifesto / Vision section */}
                <Manifesto />

                {/* Scrolling Showcase */}
                <ScrollingShowcase />

                {/* Four Pillars */}
                <FourPillars />

                {/* About/Community Section */}
                <About />

                {/* Community Members Showcase */}
                <CommunityMembers />

                {/* Founders Section */}
                <Founders />
            </main>
        </Layout>
    );
}

export default Home;
