---
name: I_LIQUIDATIONTYPE
description: "Liquidation Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONTYPE')/$value
semantic_en: "Liquidation Type"
semantic_vi: "Liquidation Type — CDS view giao diện dựa trên tcms_liq_typ."
keywords:
  - "liquidation"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONTYPE

**Liquidation Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationType` | ✓ | |  | `liq_typ` | `CHAR(6)` | Liquidation Measure Type ID |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LiquidationTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ILIQTYPE',
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
    representativeKey: 'LiquidationType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Type'
define view I_LiquidationType
  as select from tcms_liq_typ
  association [0..*] to I_LiquidationTypeText as _Text on $projection.LiquidationType = _Text.LiquidationType
{
      @ObjectModel.text.association: '_Text'
  key liq_typ as LiquidationType,

      _Text
}
```
