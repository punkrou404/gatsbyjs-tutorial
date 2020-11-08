import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default function PostHeadline(props) {
    return (
        <div key={props.id}>
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
        </div>
    )
}