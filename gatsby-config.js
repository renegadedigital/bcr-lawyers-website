module.exports = {
  siteMetadata: {
    title: `Property Lawyer, Commercial &amp; Business Solicitors, Litigation &amp; Dispute Resolution Lawyer, Family Lawyers, Criminal Lawyers Solicitors Melbourne Collins Street`,
    description: "Beckwith Cleverdon Rees is a general practice legal advisory firm located in the heart of Collins Street, Melbourne offering a broad range of legal advice relating to Property Law, Commercial and Business.",
    author: "@renegadedigital"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beckwith Cleverdon Rees Barristers & Solicitors`,
        short_name: `BCR Lawyers`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `minimal-ui`,
        icon: `src/images/bcr-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-prismic',
			options: {
				repositoryName: 'bcrlawyers',
				accessToken: 'MC5YSkgtOVJBQUFMODVWcHAx.77-977-977-9FSbvv71lde-_vVfvv70iKO-_ve-_vTo677-977-9QDfvv70O77-977-9SO-_ve-_ve-_ve-_ve-_vSw',
			},
		},
  ],
}
