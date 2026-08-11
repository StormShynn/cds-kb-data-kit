---
name: I_AGRMTPORTIONASSGMTROLETEXT
description: "Agreement Portion Assignment Role - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTPORTIONASSGMTROLETEXT')/$value
semantic_en: "Agreement Portion Assignment Role - Text"
semantic_vi: "Agreement Portion Assignment Role - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agreement"
  - "portion"
  - "assignment"
  - "role"
  - "text"
  - "language"
  - "assgmt"
  - "agrmt"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTPORTIONASSGMTROLETEXT

**Agreement Portion Assignment Role - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTPORTIONASSGMTROLETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AgreementPortionAssgmtRole` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_por_asgmt preserving type )` | `CHAR(2)` | Role in which Collateral Agreement Portion is Assigned |
| `AgrmtPortionAssgmtRoleText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_AgreementPortionAssgmtRole` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementPortionAssgmtRole` | `I_AgreementPortionAssgmtRole` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTPORTIONASSGMTROLETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTPORTIONASSGMTROLETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGPORASGMTRTXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AgreementPortionAssgmtRole'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Portion Assignment Role - Text'
define view I_AgrmtPortionAssgmtRoleText
  as select from dd07t
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  association [0..1] to I_AgreementPortionAssgmtRole as _AgreementPortionAssgmtRole on $projection.AgreementPortionAssgmtRole = _AgreementPortionAssgmtRole.AgreementPortionAssgmtRole
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                      as Language,
      @ObjectModel.foreignKey.association: '_AgreementPortionAssgmtRole'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_por_asgmt preserving type ) as AgreementPortionAssgmtRole,
      @Semantics.text: true
      ddtext                                                                          as AgrmtPortionAssgmtRoleText,

      _Language,
      _AgreementPortionAssgmtRole
}
where
      dd07t.domname  = 'CMS_IND_CAG_POR_ASGMT'
  and dd07t.as4local = 'A'
```
