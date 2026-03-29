function BunnyBackground() {
  return (
    <div className="background-bunny-track" aria-hidden="true">
      <div className="background-bunny">
        <svg
          className="background-bunny-svg"
          viewBox="0 0 240 180"
          role="presentation"
        >
          <ellipse className="bunny-shadow" cx="118" cy="156" rx="56" ry="12" />

          <g className="bunny-art">
            <path
              className="bunny-ear bunny-ear-left"
              d="M142 58C139 24 146 10 156 10C165 10 170 28 167 59C164 88 147 88 142 58Z"
            />
            <path
              className="bunny-ear-inner"
              d="M150 56C148 31 151 19 156 19C161 19 163 32 161 56C159 78 151 78 150 56Z"
            />
            <path
              className="bunny-ear bunny-ear-right"
              d="M166 62C168 28 178 17 189 19C199 21 201 40 194 70C187 99 164 93 166 62Z"
            />
            <path
              className="bunny-ear-inner"
              d="M174 61C176 37 181 28 187 30C192 32 192 45 187 68C182 88 173 82 174 61Z"
            />

            <ellipse className="bunny-tail" cx="78" cy="102" rx="18" ry="18" />
            <ellipse className="bunny-body" cx="124" cy="110" rx="54" ry="38" />
            <ellipse
              className="bunny-belly"
              cx="135"
              cy="118"
              rx="22"
              ry="18"
            />
            <ellipse className="bunny-head" cx="171" cy="81" rx="28" ry="25" />
            <ellipse className="bunny-cheek" cx="181" cy="88" rx="8" ry="6" />

            <circle className="bunny-eye" cx="180" cy="77" r="3.8" />
            <path
              className="bunny-nose"
              d="M189 85C192 82 196 82 198 85C196 88 192 89 189 85Z"
            />
            <path
              className="bunny-mouth"
              d="M198 86C196 89 195 92 195 95M198 86C201 89 202 92 202 95"
            />

            <ellipse className="bunny-paw" cx="115" cy="143" rx="12" ry="8" />
            <ellipse className="bunny-paw" cx="152" cy="143" rx="12" ry="8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default BunnyBackground;
