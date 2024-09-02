import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faYoutube,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons"
import "./socials.scss"

const Socials = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/contact/contact.md/" }) {
        childMarkdownRemark {
          frontmatter {
            facebook_url
            instagram_url
            youtube_url
          }
        }
      }
    }
  `)

  const socialsData = data?.file?.childMarkdownRemark
  const formatUrl = socialName => {
    const url = socialsData?.frontmatter?.[socialName]
    return url?.startsWith("http://") || url?.startsWith("https://")
      ? url
      : `https://${url}`
  }

  const fbUrl = socialsData?.frontmatter?.facebook_url
  const instagramUrl = socialsData?.frontmatter?.instagram_url
  const ytUrl = socialsData?.frontmatter?.youtube_url

  const socialsVisible =
    fbUrl?.length > 0 || instagramUrl?.length > 0 || ytUrl?.length > 0

  if (!socialsVisible) return null
  
  return (
    <aside className="socials">
      <Container className="d-flex flex-column justify-content-center align-items-center gap-3 shadow p-3">
        {fbUrl.length > 0 && (
          <a
            href={formatUrl("facebook_url")}
            target="_blank"
            rel="noreferrer"
            aria-label="TgLine Facebook link"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        )}
        {instagramUrl.length > 0 && (
          <a
            href={formatUrl("instagram_url")}
            target="_blank"
            rel="noreferrer"
            aria-label="TgLine Instagram link"
          >
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
        )}
        {ytUrl.length > 0 && (
          <a
            href={formatUrl("youtube_url")}
            target="_blank"
            rel="noreferrer"
            aria-label="TgLine YouTube link"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        )}
      </Container>
    </aside>
  )
}

export default Socials
