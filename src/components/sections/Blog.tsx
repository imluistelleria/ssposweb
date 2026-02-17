import Image from "next/image";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <section
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width-content)",
          margin: "0 auto",
          padding: "0 var(--page-padding)",
        }}
      >
        {/* Section Heading */}
        <h2
          style={{
            fontSize: "var(--text-h1)",
            lineHeight: "var(--leading-tight)",
            fontWeight: 700,
            color: "var(--color-gray-900)",
            margin: "0 0 48px 0",
            textAlign: "left",
          }}
        >
          Blog
        </h2>

        {/* Blog Grid - 3 columns, 2 rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {blogPosts.map((post, index) => (
            <article
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                cursor: "pointer",
              }}
            >
              {/* Blog Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1024 / 576",
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={post.image}
                  alt={`Blog post ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Excerpt */}
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "var(--leading-relaxed)",
                  color: "var(--color-gray-600)",
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
