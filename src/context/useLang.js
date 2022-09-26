import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'

const useLang = (hashKey = null) => {
  const [lang, setLang] = useLocalStorage('lang', undefined)
  const [locales, setLocales] = useLocalStorage('locales', undefined)
  const loadLocales = (fetchLang) => (
    fetch(`${process.env.PUBLIC_URL || import.meta.env.BASE_URL}locales/${fetchLang}.json${hashKey ? `?hashKey=${hashKey}` : ''}`)
      .then((raw) => raw.json())
      .then((newLocales) => setLocales({
        data: newLocales,
        lang: fetchLang,
        date: Date.now(),
        hashKey
      }))
  )
  const setLoadLocales = (fetchLang = 'en') => {
    setLang(fetchLang)
    loadLocales(fetchLang)
  }
  useEffect(() => {
    // load lang
    let currentLang = lang
    if (!lang) {
      // retrieve lang from navigator
      const { navigator } = window
      if (navigator) {
        const { language, userLanguage, languages } = navigator
        currentLang = language || userLanguage || (languages && languages.length && languages[0]) || 'en'
        if (currentLang.length > 2) currentLang = currentLang.substring(0, 2)
        if (currentLang.length < 2) currentLang = 'en'
      }
      setLang(currentLang)
    }

    // load locales
    if (
      !locales ||
        !locales.date ||
        !locales.lang ||
        locales.lang !== currentLang ||
        (hashKey && hashKey !== locales.hashKey) ||
        (Date.now() - locales.date) > 259200000 /* 3 days */
    ) {
      loadLocales(currentLang)
        .catch(() => {
          setLoadLocales()
        })
    }
  }, [hashKey])

  return {
    lang,
    locales,
    setLoadLocales
  }
}

export { useLang }
