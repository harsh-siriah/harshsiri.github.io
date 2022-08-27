import CertificatesData from ".";

export const CertificatesDataKeys = {
  Data: "data",
  Items: "items",
  Id: "id",
  Name: "name",
  Content: "content",
  Source: "source",
  Url: "url",
};

class CertificatesDataHelper {
  constructor() {
    this.data = CertificatesData;

    this.getCertificatesDataItemsList.bind(this);
    this.getCertificatesDataById.bind(this);
    this.doNestedCoursesExist.bind(this);
  }

  getCertificatesDataItemsList() {
    return this.data.items;
  }

  getCertificatesDataById(id) {
    return this.data.data?.[id] || null;
  }

  doesMainCertificateExist(id) {
    return !!this.getCertificatesDataById(id)?.[CertificatesDataKeys.Url];
  }

  doNestedCoursesExist(id) {
    return !!this.getCertificatesDataById(id)?.[CertificatesDataKeys.Content];
  }
}

export default new CertificatesDataHelper();
