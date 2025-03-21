"use client"

import { useRef, useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"

interface AnimatedButtonProps {
  text: string
  href?: string
  onClick?: () => void
  className?: string
}

const StyledWrapper = styled.div`
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(201, 187, 187, 0.6);
    --animation-color: var(--primary, #FF7F50);
    --fs-size: 1.5em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Inter", Arial, sans-serif;
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }

  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }

  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color))
  }
`

export default function AnimatedButton({ text, href, onClick, className }: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const button = buttonRef.current

    if (button) {
      gsap.fromTo(
        button,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
          delay: 0.2,
        },
      )
    }

    return () => {
      gsap.killTweensOf(button)
    }
  }, [])

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const content = (
    <StyledWrapper ref={buttonRef} className={className} suppressHydrationWarning>
      <button className="button" onClick={handleClick} data-text={text}>
        <span className="actual-text">&nbsp;{text}&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;{text}&nbsp;
        </span>
      </button>
    </StyledWrapper>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return content
}

