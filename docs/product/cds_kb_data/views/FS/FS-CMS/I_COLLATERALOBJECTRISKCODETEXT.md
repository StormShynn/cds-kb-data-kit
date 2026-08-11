---
name: I_COLLATERALOBJECTRISKCODETEXT
description: "Collateral Object Risk Code - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTRISKCODETEXT')/$value
semantic_en: "Collateral Object Risk Code - Text"
semantic_vi: "Collateral Object Risk Code - Text — CDS view giao diện dựa trên tcms_riskcode_t."
keywords:
  - "collateral"
  - "object"
  - "risk"
  - "code"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALOBJECTRISKCODETEXT

**Collateral Object Risk Code - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTRISKCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectRiskCode` | ✓ | |  | `risk_code` | `CHAR(6)` | Risk Code |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralObjectRiskCodeText` |  | |  | `name` | `CHAR(40)` | Risk Code Name in a specified Language |
| `_Language` | | ✓ | | | | |
| `_CollateralObjectRiskCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralObjectRiskCode` | `I_CollateralObjectRiskCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTRISKCODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTRISKCODETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLOBJRSKCODET',
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
    representativeKey: 'CollateralObjectRiskCode'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Object Risk Code - Text'
define view I_CollateralObjectRiskCodeText
  as select from tcms_riskcode_t
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
  association [0..1] to I_CollateralObjectRiskCode as _CollateralObjectRiskCode on $projection.CollateralObjectRiskCode = _CollateralObjectRiskCode.CollateralObjectRiskCode
{
      @ObjectModel.foreignKey.association: '_CollateralObjectRiskCode'
  key risk_code as CollateralObjectRiskCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language  as Language,
      @Semantics.text: true
      name      as CollateralObjectRiskCodeText,

      _Language,
      _CollateralObjectRiskCode

}
```
