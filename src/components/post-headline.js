import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function PostHeadline(props) {
    return (
        <div key={props.id}>
            <Link
              to={props.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {props.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {props.date}
                </span>
              </h3>
              <p>
                {props.excerpt}
              </p>
            </Link>
        </div>
    )
}