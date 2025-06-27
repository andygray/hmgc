declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"courses": {
"heaton-moor.md": {
	id: "heaton-moor.md";
  slug: "heaton-moor";
  body: string;
  collection: "courses";
  data: InferEntrySchema<"courses">
} & { render(): Render[".md"] };
};
"docs": {
"DAILY.md": {
	id: "DAILY.md";
  slug: "daily";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"MOC.md": {
	id: "MOC.md";
  slug: "moc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"TEMPLATES.md": {
	id: "TEMPLATES.md";
  slug: "templates";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};
"events": {
"2025-06-open-day.md": {
	id: "2025-06-open-day.md";
  slug: "2025-06-open-day";
  body: string;
  collection: "events";
  data: InferEntrySchema<"events">
} & { render(): Render[".md"] };
};
"facilities": {
"clubhouse.md": {
	id: "clubhouse.md";
  slug: "clubhouse";
  body: string;
  collection: "facilities";
  data: InferEntrySchema<"facilities">
} & { render(): Render[".md"] };
};
"history": {
"club-history.md": {
	id: "club-history.md";
  slug: "club-history";
  body: string;
  collection: "history";
  data: InferEntrySchema<"history">
} & { render(): Render[".md"] };
};
"members": {
"john-doe.md": {
	id: "john-doe.md";
  slug: "john-doe";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
};
"membership": {
"member-benefits.md": {
	id: "member-benefits.md";
  slug: "member-benefits";
  body: string;
  collection: "membership";
  data: InferEntrySchema<"membership">
} & { render(): Render[".md"] };
"membership-pricing.md": {
	id: "membership-pricing.md";
  slug: "membership-pricing";
  body: string;
  collection: "membership";
  data: InferEntrySchema<"membership">
} & { render(): Render[".md"] };
"sections.md": {
	id: "sections.md";
  slug: "sections";
  body: string;
  collection: "membership";
  data: InferEntrySchema<"membership">
} & { render(): Render[".md"] };
};
"play": {
"golf-simulator.md": {
	id: "golf-simulator.md";
  slug: "golf-simulator";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".md"] };
};
"pricing": {
"memberships-2025.md": {
	id: "memberships-2025.md";
  slug: "memberships-2025";
  body: string;
  collection: "pricing";
  data: InferEntrySchema<"pricing">
} & { render(): Render[".md"] };
};
"societies": {
"society-packages.md": {
	id: "society-packages.md";
  slug: "society-packages";
  body: string;
  collection: "societies";
  data: InferEntrySchema<"societies">
} & { render(): Render[".md"] };
};
"staff": {
"club-professional.md": {
	id: "club-professional.md";
  slug: "club-professional";
  body: string;
  collection: "staff";
  data: InferEntrySchema<"staff">
} & { render(): Render[".md"] };
};
"visitors": {
"visitor-information.md": {
	id: "visitor-information.md";
  slug: "visitor-information";
  body: string;
  collection: "visitors";
  data: InferEntrySchema<"visitors">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
