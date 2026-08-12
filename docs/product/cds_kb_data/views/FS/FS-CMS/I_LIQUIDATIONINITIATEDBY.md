---
name: I_LIQUIDATIONINITIATEDBY
description: "Liquidation Intiated By"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONINITIATEDBY')/$value
semantic_en: "Liquidation Intiated By"
semantic_vi: "Liquidation Intiated By — CDS view giao diện dựa trên dd07l."
keywords:
  - "liquidation"
  - "intiated"
  - "initiated"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONINITIATEDBY

**Liquidation Intiated By**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONINITIATEDBY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationInitiatedBy` | ✓ | |  | `cast(substring(domvalue_l, 1, 6) as cms_dte_liq_ini_by preserving type )` | `CHAR(6)` | Liquidation Initiated By |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LiquidationInitiatedByText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONINITIATEDBY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONINITIATEDBY')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ILIQINITBY',
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
    representativeKey: 'LiquidationInitiatedBy'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Intiated By'
define view I_LiquidationInitiatedBy
  as select from dd07l
  association [0..*] to I_LiquidationInitiatedByText as _Text on $projection.LiquidationInitiatedBy = _Text.LiquidationInitiatedBy
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 6) as cms_dte_liq_ini_by preserving type ) as LiquidationInitiatedBy,

      _Text
}
where
      dd07l.domname  = 'CMS_LIQ_INI_BY'
  and dd07l.as4local = 'A'
```
