---
name: I_OBJECTVALUATIONTYPE
description: "Object Valuation Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONTYPE')/$value
semantic_en: "Object Valuation Type"
semantic_vi: "Object Valuation Type — CDS view giao diện dựa trên tcms_oms_valty."
keywords:
  - "object"
  - "valuation"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTVALUATIONTYPE

**Object Valuation Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectValuationType` | ✓ | |  | `value_type` | `CHAR(6)` | Value Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ObjectValuationTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJVALTNTYPE',
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
    representativeKey: 'ObjectValuationType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Valuation Type'
define view I_ObjectValuationType
  as select from tcms_oms_valty
  association [0..*] to I_ObjectValuationTypeText as _Text on $projection.ObjectValuationType = _Text.ObjectValuationType
{
      @ObjectModel.text.association: '_Text'
  key value_type as ObjectValuationType,

      _Text
}
```
