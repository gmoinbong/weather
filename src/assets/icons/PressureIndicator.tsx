import React from 'react'

type Props = {}

export const PressureIndicator = (props: Props) => {
    return (
        <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0)">
                <path
                    d="M10.1346 0.281303C9.8173 -0.0359516 9.3414 -0.115293 8.9448 0.201998C8.9448 0.201998 8.8655 0.201998 8.8655 0.281303C8.23095 1.07446 2.36151 8.21295 2.36151 11.8615C2.36151 15.8274 5.53416 19 9.50001 19C13.4658 19 16.6385 15.8274 16.6385 11.8615C16.6385 8.21295 10.7691 1.07446 10.1346 0.281303Z"
                    fill="url(#paint0_linear)"
                />
                <path
                    d="M7.70506 13.9841L12.4722 9.21693L11.3506 8.09526L6.58338 12.8624L7.70506 13.9841Z"
                    fill="white"
                />
                <path
                    d="M7.12049 10.2752C7.55853 10.2752 7.91364 9.92005 7.91364 9.482C7.91364 9.04396 7.55853 8.68885 7.12049 8.68885C6.68244 8.68885 6.32733 9.04396 6.32733 9.482C6.32733 9.92005 6.68244 10.2752 7.12049 10.2752Z"
                    fill="white"
                />
                <path
                    d="M11.8795 13.4478C12.3175 13.4478 12.6726 13.0927 12.6726 12.6547C12.6726 12.2166 12.3175 11.8615 11.8795 11.8615C11.4414 11.8615 11.0863 12.2166 11.0863 12.6547C11.0863 13.0927 11.4414 13.4478 11.8795 13.4478Z"
                    fill="white"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="3.90806"
                    y1="16.383"
                    x2="15.0729"
                    y2="5.22218"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#34CDFA" />
                    <stop offset="1" stopColor="#E8D9F1" />
                </linearGradient>
                <clipPath id="clip0">
                    <rect width="19" height="19" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
