---
name: I_AGREEMENTTYPETEXT
description: "Agreement Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTYPETEXT')/$value
semantic_en: "Agreement Type - Text"
semantic_vi: "Agreement Type - Text — CDS view giao diện dựa trên tcms_cag_typ_t."
keywords:
  - "agreement"
  - "type"
  - "text"
  - "collateral"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTTYPETEXT

**Agreement Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralAgreementType` | ✓ | |  | `cagmt_type` | `CHAR(6)` | Collateral Agreement Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralAgreementTypeText` |  | |  | `name` | `CHAR(40)` | Name of Collateral Agreement Type |
| `_Language` | | ✓ | | | | |
| `_AgreementType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementType` | `I_AgreementType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGTYPETXT',
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
    representativeKey: 'CollateralAgreementType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Type - Text'
define view I_AgreementTypeText
  as select from tcms_cag_typ_t
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
  association [0..1] to I_AgreementType as _AgreementType on $projection.CollateralAgreementType = _AgreementType.CollateralAgreementType
{
      @ObjectModel.foreignKey.association: '_AgreementType'
  key cagmt_type as CollateralAgreementType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language   as Language,
      @Semantics.text: true
      name       as CollateralAgreementTypeText,

      _Language,
      _AgreementType
}
```
