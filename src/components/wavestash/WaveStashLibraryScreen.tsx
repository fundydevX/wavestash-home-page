import {
  ArrowDownWideNarrow,
  BookOpen,
  Filter,
  MoreVertical,
  Plus,
  Rows3,
  Search,
  Settings,
  StickyNote,
  VolumeX,
  Wifi,
} from "lucide-react";

function ArticleCard({
  title,
  source,
  tags,
  readTime,
  savedDate,
  status,
  progress,
  image,
}: {
  title: string;
  source: string;
  tags: string[];
  readTime: string;
  savedDate: string;
  status: string;
  progress: number;
  image: string;
}) {
  return (
    <article className="relative mt-[3cqw] h-[40cqw] overflow-hidden rounded-[3.4cqw] border border-[#193b59]/15 bg-white px-[3.5cqw] py-[3.3cqw] shadow-[0_0.5cqw_1.5cqw_rgba(28,62,88,0.04)]">
      <img
        src={image}
        alt=""
        className="absolute right-[4cqw] top-[3.5cqw] h-[20cqw] w-[17cqw] rounded-[2cqw] border border-[#193b59]/10 object-cover"
      />
      <div className="w-[65cqw]">
        <h3 className="font-display text-[5.15cqw] font-semibold leading-[1.02] tracking-[-0.035em] text-[#142638]">
          {title}
        </h3>
        <p className="mt-[1.4cqw] truncate text-[3cqw] leading-none text-[#40556b]">{source}</p>
        <div className="mt-[2.1cqw] flex items-center gap-[1.2cqw] whitespace-nowrap">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#e2f1f8] px-[2.2cqw] py-[1.1cqw] text-[2.65cqw] leading-none text-[#087fa8]">
              {tag}
            </span>
          ))}
          <span className="text-[2.65cqw] leading-none text-[#52657a]">+2</span>
        </div>
      </div>
      <div className="absolute inset-x-[3.5cqw] bottom-[3.2cqw] flex items-center justify-between text-[2.75cqw] leading-none text-[#4b6074]">
        <span>~{readTime} read · {savedDate}</span>
        <span className="mr-[5cqw] font-medium text-[#087fa8]">{status}</span>
      </div>
      <MoreVertical className="absolute bottom-[2.5cqw] right-[2.3cqw] h-[3.5cqw] w-[3.5cqw] text-[#53657a]" strokeWidth={3} />
      <div className="absolute inset-x-0 bottom-0 h-[0.7cqw] bg-[#e6f0f5]">
        <div className="h-full bg-[#159bc0]" style={{ width: `${progress}%` }} />
      </div>
    </article>
  );
}

export function WaveStashLibraryScreen() {
  return (
    <div
      role="img"
      aria-label="WaveStash library in a blue theme, showing the saved slow-travel article A slower way to see the Amalfi Coast, followed by saved recipe and technology articles with reading progress"
      className="relative aspect-[945/2048] w-full overflow-hidden rounded-[31px] bg-[#f4f7fb] text-[#142638] [container-type:inline-size]"
    >
      <div className="flex h-[10cqw] items-center justify-between px-[2.7cqw] pt-[1cqw]">
        <span className="text-[4.7cqw] font-medium leading-none tracking-tight">12:22</span>
        <div className="flex items-center gap-[2.2cqw]">
          <VolumeX className="h-[4.4cqw] w-[4.4cqw]" fill="currentColor" strokeWidth={1.5} />
          <span className="relative">
            <Wifi className="h-[4.4cqw] w-[4.4cqw]" strokeWidth={2.6} />
            <span className="absolute -right-[1.3cqw] -top-[1.5cqw] text-[2.3cqw] font-bold">6</span>
          </span>
          <span className="flex h-[4.5cqw] items-end gap-[0.6cqw]">
            <span className="h-[1.6cqw] w-[0.8cqw] bg-current" />
            <span className="h-[2.4cqw] w-[0.8cqw] bg-current" />
            <span className="h-[3.2cqw] w-[0.8cqw] bg-current" />
            <span className="h-[4cqw] w-[0.8cqw] bg-current" />
          </span>
          <span className="flex h-[5.4cqw] w-[10.5cqw] items-center justify-center rounded-full bg-[#263441] text-[3.4cqw] font-semibold leading-none text-white">64</span>
        </div>
      </div>

      <div className="px-[4.2cqw] pt-[2.2cqw]">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-[6.4cqw] font-semibold leading-none tracking-[-0.045em]">WaveStash</h2>
          <div className="flex items-center gap-[6.2cqw] pr-[1.2cqw] text-[#233d56]">
            <Rows3 className="h-[5.3cqw] w-[5.3cqw]" strokeWidth={2.3} />
            <Filter className="h-[5.3cqw] w-[5.3cqw]" strokeWidth={2.3} />
            <ArrowDownWideNarrow className="h-[5.3cqw] w-[5.3cqw]" strokeWidth={2.3} />
          </div>
        </div>
        <p className="mt-[1.8cqw] flex items-center text-[3.25cqw] leading-none text-[#435a70]">
          <span className="mr-[1.5cqw] h-[2.2cqw] w-[2.2cqw] rounded-full bg-[#087fa8]" />
          10 saved <span className="mx-[1.4cqw]">•</span> ready offline
        </p>

        <div className="mt-[4cqw] flex h-[14cqw] items-center rounded-[4.2cqw] border border-[#274967]/15 bg-white px-[3.7cqw] shadow-[0_0.5cqw_1.2cqw_rgba(28,62,88,0.03)]">
          <Search className="mr-[3.2cqw] h-[5.5cqw] w-[5.5cqw] text-[#63788c]" strokeWidth={2.4} />
          <span className="text-[3.45cqw] text-[#718395]">Search your library...</span>
        </div>

        <div className="mt-[4cqw] flex h-[8.5cqw] gap-[2.2cqw] overflow-hidden whitespace-nowrap">
          <span className="flex items-center rounded-[2.4cqw] bg-[#dceff7] px-[4.2cqw] text-[3.5cqw] font-medium text-[#087fa8]">All</span>
          <span className="flex items-center rounded-[2.4cqw] border border-[#274967]/15 bg-white px-[4.2cqw] text-[3.5cqw] text-[#3e5268]">Web Pages</span>
          <span className="flex items-center rounded-[2.4cqw] border border-[#274967]/15 bg-white px-[4.2cqw] text-[3.5cqw] text-[#3e5268]">EPUBs</span>
          <span className="flex items-center rounded-[2.4cqw] border border-[#274967]/15 bg-white px-[4.2cqw] text-[3.5cqw] text-[#3e5268]">PDFs</span>
          <span className="flex items-center rounded-[2.4cqw] border border-[#274967]/15 bg-white px-[4.2cqw] text-[3.5cqw] text-[#3e5268]">Favorites</span>
        </div>

        <div className="mt-[3cqw] flex h-[8.5cqw] gap-[2.2cqw] whitespace-nowrap">
          <span className="flex items-center rounded-[2.4cqw] bg-[#dceff7] px-[4.2cqw] text-[3.15cqw] text-[#087fa8]">To Read (5)</span>
          <span className="flex items-center rounded-[2.4cqw] border border-[#274967]/15 bg-white px-[4.2cqw] text-[3.15cqw] text-[#3e5268]">Finished (5)</span>
          <span className="flex items-center rounded-[2.4cqw] border border-[#274967]/15 bg-white px-[4.2cqw] text-[3.15cqw] text-[#3e5268]">All (10)</span>
        </div>
      </div>

      <div className="px-[3.2cqw]">
        <ArticleCard
          title="A slower way to see the Amalfi Coast"
          source="Field Notes Journal"
          tags={["Travel", "Slow travel"]}
          readTime="8 min"
          savedDate="Nov 10"
          status="Started"
          progress={32}
          image="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=360&q=85"
        />
        <ArticleCard
          title="Weeknight pasta, with a little more character"
          source="The Good Table"
          tags={["Recipes", "Weeknight"]}
          readTime="6 min"
          savedDate="Nov 4"
          status="60% read"
          progress={60}
          image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=360&q=85"
        />
        <ArticleCard
          title="How the humble transistor changed everything"
          source="The Long View"
          tags={["Technology", "Computing"]}
          readTime="12 min"
          savedDate="Oct 28"
          status="100% read"
          progress={100}
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=360&q=85"
        />
      </div>

      <div className="absolute bottom-[28cqw] right-[4cqw] flex h-[14cqw] w-[14cqw] items-center justify-center rounded-[4cqw] bg-[#087fa8] text-white shadow-[0_2cqw_4cqw_rgba(8,127,168,0.25)]">
        <Plus className="h-[6.5cqw] w-[6.5cqw]" strokeWidth={2.3} />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[23cqw] border-t border-[#274967]/10 bg-white/95 px-[7cqw] pt-[3cqw] backdrop-blur-sm">
        <div className="flex items-start justify-between text-center">
          <div className="w-[19cqw] text-[#087fa8]">
            <div className="mx-auto flex h-[9cqw] w-[14cqw] items-center justify-center rounded-full bg-[#dceff7]">
              <BookOpen className="h-[5cqw] w-[5cqw]" fill="currentColor" strokeWidth={1.5} />
            </div>
            <p className="mt-[1.2cqw] text-[2.8cqw] leading-none">Library</p>
          </div>
          <div className="w-[19cqw] text-[#465b70]">
            <div className="mx-auto flex h-[9cqw] w-[14cqw] items-center justify-center">
              <StickyNote className="h-[5.3cqw] w-[5.3cqw]" strokeWidth={2} />
            </div>
            <p className="mt-[1.2cqw] text-[2.8cqw] leading-none">Notes</p>
          </div>
          <div className="w-[19cqw] text-[#465b70]">
            <div className="mx-auto flex h-[9cqw] w-[14cqw] items-center justify-center">
              <Settings className="h-[5.5cqw] w-[5.5cqw]" strokeWidth={2} />
            </div>
            <p className="mt-[1.2cqw] text-[2.8cqw] leading-none">Settings</p>
          </div>
        </div>
        <div className="mx-auto mt-[3.2cqw] h-[1.1cqw] w-[36cqw] rounded-full bg-[#a8b2bd]" />
      </div>
    </div>
  );
}
