const fetchRSS = async (url) => {
    try {
      const response = await fetch(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(url)}&disableCache=true`);
      if (!response.ok) throw new Error(i18n.t('Error de red'));
  
      const data = await response.json();
      const parser = new DOMParser();
      const xml = parser.parseFromString(data.contents, 'application/xml');
  
      if (xml.querySelector('parsererror')) {
        throw new Error(i18n.t('El recurso no contiene un RSS válido'));
      }
  
      return xml;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  