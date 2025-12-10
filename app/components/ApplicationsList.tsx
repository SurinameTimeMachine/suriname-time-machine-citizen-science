import Image from 'next/image';
import type { ResourceItem } from './types';

type ApplicationsListProps = {
  resources: ResourceItem[];
};

export function ApplicationsList({ resources }: ApplicationsListProps) {
  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <div
          key={resource.id}
          className="applications-row border-t border-slate-100/70 py-4 first:border-0"
        >
          <div className="text-xs font-semibold text-teal-strong">
            {resource.id}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden border border-slate-200 [clip-path:polygon(25%_0,100%_0,100%_75%,75%_100%,0_100%,0_25%)]">
              <Image
                src={resource.asset.src}
                alt={resource.asset.alt}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <p className="text-sm text-ink">{resource.description}</p>
          </div>
          <div className="download-dot text-ink/60" />
        </div>
      ))}
    </div>
  );
}
