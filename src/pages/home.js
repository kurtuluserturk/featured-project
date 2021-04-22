import React from 'react'
import { useTranslation } from 'react-i18next';
import Title from '../components/Title'

const Home = () => {

    const [t] = useTranslation('common');

    return (
        <div className="py-5">
            <div className="container container-w-400 container-w-310">
                <Title name={t('home.name')} title="Lorem" />
                <div className="row">
                    <h2>{t('home.loremTitle1')}</h2>
                    <p>
                        <strong>{t('home.loremParagraphStrong1')}</strong> {t('home.loremParagraph1')}
                    </p>
                    <h2>{t('home.loremTitle2')}</h2>
                    <p>{t('home.loremParagraph2')}</p>
                </div>
            </div>
        </div>
    )
}

export default Home
