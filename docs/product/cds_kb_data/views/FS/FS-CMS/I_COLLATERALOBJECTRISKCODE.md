---
name: I_COLLATERALOBJECTRISKCODE
description: "Collateral Object Risk Code"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTRISKCODE')/$value
semantic_en: "Collateral Object Risk Code"
semantic_vi: "Collateral Object Risk Code — CDS view giao diện dựa trên tcms_riskcode."
keywords:
  - "collateral"
  - "object"
  - "risk"
  - "code"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALOBJECTRISKCODE

**Collateral Object Risk Code**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTRISKCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectRiskCode` | ✓ | |  | `risk_code` | `CHAR(6)` | Risk Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralObjectRiskCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTRISKCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTRISKCODE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLOBJRSKCODE',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralObjectRiskCode'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Object Risk Code'
define view I_CollateralObjectRiskCode
  as select from tcms_riskcode
  association [0..*] to I_CollateralObjectRiskCodeText as _Text on $projection.CollateralObjectRiskCode = _Text.CollateralObjectRiskCode
{
      @ObjectModel.text.association: '_Text'
  key risk_code as CollateralObjectRiskCode,

      _Text
}
```
