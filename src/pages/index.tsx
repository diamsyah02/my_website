import Head from 'next/head'
import { Inter } from 'next/font/google'
import { WebResponseEntity } from '@/helpers/web_response'
import { getDataFE } from '@/helpers/fetching'
import Profile from '@/components/Profile'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Skill from '@/components/Skill'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'

export default function Home({ profile, skill, contact, portfolio, education, experience }: { profile: WebResponseEntity, skill: WebResponseEntity, contact: WebResponseEntity, portfolio: WebResponseEntity, education: WebResponseEntity, experience: WebResponseEntity }) {
  return (
    <>
      <Head>
        <title>Website Dida Mustofa Diamsyah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:description" name="description" content="Website Pribadi Diamsyah M Dida, Dibuat Dengan Vue JS v3. Diamsyah M Dida atau Dida Mustofa Diamsyah adalah seorang programmer yang sudah berkecimpung di dunia pemrograman selama lebih dari 3 tahun, dan terbiasa menggunakan bahasa program PHP dan Javascript." key="description" />
        <meta property="og:keywords" name="keywords" content="Website Pribadi Diamsyah M Dida, Website Diamsyah, Website Dida, Diamsyah M Dida, Dida, Dida Mustofa, Dida Mustofa Diamsyah" key="keywords" />
        <meta property="og:author" name="author" content="Diamsyah M Dida" key="author" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center h-screen bg-gray-200">
          <div
            className="
              w-full
              md:w-4/5
              bg-white bg-opacity-75
              shadow-2xl
              rounded
              overflow-y-auto
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-gray-900 h-full text-white">
                <Profile data={profile?.data[0]} />
                <Contact data={contact?.data} />
                <Education data={education?.data} />
              </div>
              <div className="p-4 h-full">
                <Skill data={skill?.data} />
                <Portfolio data={portfolio?.data} />
                <Experience data={experience?.data} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

Home.getInitialProps = async () => {
  return {
    profile: await getDataFE(`profile`),
    skill: await getDataFE(`skill`),
    contact: await getDataFE(`contact`),
    portfolio: await getDataFE(`portfolio`),
    education: await getDataFE(`education`),
    experience: await getDataFE(`experience`),
  }
}
