---
name: I_AGRMTPORTIONBLOCKINGTYPETEXT
description: "Agreement Portion Blocking Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTPORTIONBLOCKINGTYPETEXT')/$value
semantic_en: "Agreement Portion Blocking Type - Text"
semantic_vi: "Agreement Portion Blocking Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agreement"
  - "portion"
  - "blocking"
  - "type"
  - "text"
  - "language"
  - "agrmt"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTPORTIONBLOCKINGTYPETEXT

**Agreement Portion Blocking Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTPORTIONBLOCKINGTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AgreementPortionBlockingType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_por_blk_typ preserving type )` | `CHAR(2)` | Blocking Category for Collateral Agreement Portion |
| `AgrmtPortionBlockingTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_AgreementPortionBlockingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementPortionBlockingType` | `I_AgreementPortionBlockingType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTPORTIONBLOCKINGTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTPORTIONBLOCKINGTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGPORBLKGTXT',
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
    representativeKey: 'AgreementPortionBlockingType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Portion Blocking Type - Text'
define view I_AgrmtPortionBlockingTypeText
  as select from dd07t
  association [0..1] to I_Language                     as _Language                     on $projection.Language = _Language.Language
  association [0..1] to I_AgreementPortionBlockingType as _AgreementPortionBlockingType on $projection.AgreementPortionBlockingType = _AgreementPortionBlockingType.AgreementPortionBlockingType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                        as Language,
      @ObjectModel.foreignKey.association: '_AgreementPortionBlockingType'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_por_blk_typ preserving type ) as AgreementPortionBlockingType,
      @Semantics.text: true
      ddtext                                                                            as AgrmtPortionBlockingTypeText,

      _Language,
      _AgreementPortionBlockingType
}
where
      dd07t.domname  = 'CMS_IND_BLK_TYP'
  and dd07t.as4local = 'A'
```
