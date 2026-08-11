---
name: I_COLLTRLINSURPERSNSPEC
description: "Specification of Persn for Colltrl Insur"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURPERSNSPEC')/$value
semantic_en: "Specification of Persn for Colltrl Insur"
semantic_vi: "Specification of Persn for Colltrl Insur — CDS view giao diện dựa trên cms_ins_psn."
keywords:
  - "specification"
  - "persn"
  - "for"
  - "colltrl"
  - "insur"
  - "collateral"
  - "insurance"
  - "person"
  - "insured"
  - "name"
  - "status"
  - "date"
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLINSURPERSNSPEC

**Specification of Persn for Colltrl Insur**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURPERSNSPEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralInsurancePersonUUID` | ✓ | |  | `ins_psn_guid` | `RAW(16)` | Insurance Person GUID |
| `CollateralInsuranceUUID` |  | |  | `ins_guid` | `RAW(16)` | Insurance GUID |
| `CollateralInsuredPersonName` |  | |  | `insrd_prsn_nm` | `CHAR(30)` | Name of the insured person |
| `CollateralInsuranceStatus` |  | |  | `prsn_status` | `CHAR(6)` | Status of  insurance |
| `CollateralInsuranceStatusDate` |  | |  | `prsn_status_dt` | `DATS(8)` | Status date of  insurance |
| `ColltrlInsurRankDescription` |  | |  | `spec_ins_rnk_pr` | `CHAR(30)` | Specification on the insurance rank of the person |
| `CollateralInsuredRiskType` |  | |  | `insured_rsk` | `CHAR(6)` | Insured risk |
| `ColltrlInsurSglPremiumAmount` |  | |  | `sgle_prm` | `CURR(17)` | Insurance one time Cntribution /Single Premium insurance |
| `ColltrlInsurSglPremiumCurrency` |  | |  | `sgle_prm_cky` | `CUKY(5)` | Currency |
| `ColltrlInsurOneTmeContrbnAmt` |  | |  | `one_tme_con` | `CURR(17)` | Undrawn(unused) one time contribution |
| `ColltrlInsurOneTmeContrbnCrcy` |  | |  | `one_tme_con_cky` | `CUKY(5)` | Currency |
| `ColltrlInsurPremiumRenewalDate` |  | |  | `renew_dat` | `DATS(8)` | Renewal date(insurance premium) |
| `CollateralInsuranceEnteredBy` |  | |  | `created_by` | `CHAR(12)` | Login ID of the User who created the Record |
| `ColltrlInsurEnteredDateTime` |  | |  | `created_at` | `DEC(15)` | Creation Timestamp |
| `ColltrlInsuranceLastChangedBy` |  | |  | `changed_by` | `CHAR(12)` | Last Changed By |
| `ColltrlInsurLastChgdDateTime` |  | |  | `changed_at` | `DEC(15)` | Change Timestamp |
| `ColltrlInsuranceEnteredSource` |  | |  | `sourceofentry` | `CHAR(32)` | Source of Entry |
| `_CollateralInsurance` | | ✓ | | | | |
| `_ObjectInsuranceLinkData` | | ✓ | | | | |
| `_ObjectAssetPartner` | | ✓ | | | | |
| `_ObjectAssetDocument` | | ✓ | | | | |
| `_ObjectValuationLinkData` | | ✓ | | | | |
| `_CollateralInsuranceStatus` | | ✓ | | | | |
| `_CollateralInsuredRiskType` | | ✓ | | | | |
| `_ColltrlInsurSglPremCurrency` | | ✓ | | | | |
| `_ColltrlInsurOneTmeContrbnCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralInsurance` | `I_CollateralInsurance` | [0..1] |
| `_ObjectInsuranceLinkData` | `I_ObjectInsuranceLinkData` | [0..*] |
| `_ObjectAssetPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_ObjectAssetDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_ObjectValuationLinkData` | `I_ObjectValuationLinkData` | [0..*] |
| `_CollateralInsuranceStatus` | `I_CollateralAttributeIndType` | [0..1] |
| `_CollateralInsuredRiskType` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlInsurSglPremCurrency` | `I_Currency` | [0..1] |
| `_ColltrlInsurOneTmeContrbnCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURPERSNSPEC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURPERSNSPEC')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICINSURPERSNSPEC',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #MANDATORY,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    representativeKey: 'CollateralInsurancePersonUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
        dataExtraction: {
        enabled: true,
    delta.changeDataCapture: {
        mapping: [ {
           table : 'CMS_INS_PSN',
           role : #MAIN,
           viewElement : ['CollateralInsurancePersonUUID'],
           tableElement : ['INS_PSN_GUID']
        } ]
            }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Specification of Persn for Colltrl Insur'
define view I_ColltrlInsurPersnSpec
  as select from cms_ins_psn
  association [0..1] to I_CollateralInsurance        as _CollateralInsurance           on  $projection.CollateralInsuranceUUID = _CollateralInsurance.CollateralInsuranceUUID
  association [0..*] to I_ObjectInsuranceLinkData    as _ObjectInsuranceLinkData       on  $projection.CollateralInsuranceUUID = _ObjectInsuranceLinkData.ObjectInsuranceReferenceUUID
  association [0..*] to I_ObjectAssetPartner         as _ObjectAssetPartner            on  $projection.CollateralInsuranceUUID = _ObjectAssetPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument        as _ObjectAssetDocument           on  $projection.CollateralInsuranceUUID = _ObjectAssetDocument.ObjectAssetUUID
  association [0..*] to I_ObjectValuationLinkData    as _ObjectValuationLinkData       on  $projection.CollateralInsuranceUUID = _ObjectValuationLinkData.ObjectValuationLinkUUID
  association [0..1] to I_CollateralAttributeIndType as _CollateralInsuranceStatus     on  _CollateralInsuranceStatus.CollateralAttributeIndCat = 'INS003'
                                                                                       and $projection.CollateralInsuranceStatus                = _CollateralInsuranceStatus.CollateralAttributeIndType
  association [0..1] to I_CollateralAttributeIndType as _CollateralInsuredRiskType     on  _CollateralInsuredRiskType.CollateralAttributeIndCat = 'INS002'
                                                                                       and $projection.CollateralInsuredRiskType                = _CollateralInsuredRiskType.CollateralAttributeIndType
  association [0..1] to I_Currency                   as _ColltrlInsurSglPremCurrency   on  $projection.ColltrlInsurSglPremiumCurrency = _ColltrlInsurSglPremCurrency.Currency
  association [0..1] to I_Currency                   as _ColltrlInsurOneTmeContrbnCrcy on  $projection.ColltrlInsurOneTmeContrbnCrcy = _ColltrlInsurOneTmeContrbnCrcy.Currency
{
  key ins_psn_guid    as CollateralInsurancePersonUUID,
      ins_guid        as CollateralInsuranceUUID,
      insrd_prsn_nm   as CollateralInsuredPersonName,
      @ObjectModel.foreignKey.association: '_CollateralInsuranceStatus'
      prsn_status     as CollateralInsuranceStatus,
      prsn_status_dt  as CollateralInsuranceStatusDate,
      spec_ins_rnk_pr as ColltrlInsurRankDescription,
      @ObjectModel.foreignKey.association: '_CollateralInsuredRiskType'
      insured_rsk     as CollateralInsuredRiskType,
      @Semantics.amount.currencyCode: 'ColltrlInsurSglPremiumCurrency'
      sgle_prm        as ColltrlInsurSglPremiumAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsurSglPremCurrency'
      sgle_prm_cky    as ColltrlInsurSglPremiumCurrency,
      @Semantics.amount.currencyCode: 'ColltrlInsurOneTmeContrbnCrcy'
      one_tme_con     as ColltrlInsurOneTmeContrbnAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlInsurOneTmeContrbnCrcy'
      one_tme_con_cky as ColltrlInsurOneTmeContrbnCrcy,
      renew_dat       as ColltrlInsurPremiumRenewalDate,
      created_by      as CollateralInsuranceEnteredBy,
      created_at      as ColltrlInsurEnteredDateTime,
      changed_by      as ColltrlInsuranceLastChangedBy,
      changed_at      as ColltrlInsurLastChgdDateTime,
      sourceofentry   as ColltrlInsuranceEnteredSource,

      _CollateralInsurance,
      _ObjectInsuranceLinkData,
      _ObjectAssetPartner,
      _ObjectAssetDocument,
      _ObjectValuationLinkData,
      _CollateralInsuranceStatus,
      _CollateralInsuredRiskType,
      _ColltrlInsurSglPremCurrency,
      _ColltrlInsurOneTmeContrbnCrcy
}
```
