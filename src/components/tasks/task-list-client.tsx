"use client";

import { useMemo } from "react";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { normalizeCategory, isValidCategory } from "@/lib/categories";
import type { TaskKey } from "@/lib/site-config";
import type { SitePost } from "@/lib/site-connector";
import { getLocalPostsForTask } from "@/lib/local-posts";
import { cn } from "@/lib/utils";

type Props = {
  task: TaskKey;
  initialPosts: SitePost[];
  category?: string;
  /** ISO date string (YYYY-MM-DD) — hide posts published before this date */
  publishedAfter?: string;
  /** Optional grid classes for layout variants */
  listClassName?: string;
};

export function TaskListClient({ task, initialPosts, category, publishedAfter, listClassName }: Props) {
  const localPosts = getLocalPostsForTask(task);

  const merged = useMemo(() => {
    const bySlug = new Set<string>();
    const combined: Array<SitePost & { localOnly?: boolean; task?: TaskKey }> = [];

    localPosts.forEach((post) => {
      if (post.slug) {
        bySlug.add(post.slug);
      }
      combined.push(post);
    });

    initialPosts.forEach((post) => {
      if (post.slug && bySlug.has(post.slug)) return;
      combined.push(post);
    });

    const normalizedCategory = category ? normalizeCategory(category) : "all";
    let result =
      normalizedCategory === "all"
        ? combined.filter((post) => {
            const content = post.content && typeof post.content === "object" ? post.content : {};
            const value = typeof (content as any).category === "string" ? (content as any).category : "";
            return !value || isValidCategory(value);
          })
        : combined.filter((post) => {
            const content = post.content && typeof post.content === "object" ? post.content : {};
            const value =
              typeof (content as any).category === "string"
                ? normalizeCategory((content as any).category)
                : "";
            return value === normalizedCategory;
          });

    if (publishedAfter?.trim()) {
      const cutoff = new Date(publishedAfter.trim()).getTime();
      if (!Number.isNaN(cutoff)) {
        result = result.filter((post) => {
          if (!post.publishedAt) return true;
          return new Date(post.publishedAt).getTime() >= cutoff;
        });
      }
    }

    return result;
  }, [category, initialPosts, localPosts, publishedAfter]);

  if (!merged.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
        No posts yet for this section.
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", listClassName)}>
      {merged.map((post) => {
        const localOnly = (post as any).localOnly;
        const href = localOnly
          ? `/local/${task}/${post.slug}`
          : buildPostUrl(task, post.slug);
        return <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />;
      })}
    </div>
  );
}
