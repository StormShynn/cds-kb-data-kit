---
name: I_LIQUIDATIONCASHFLOWTYPE
description: "Liquidation Cash Flow Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOWTYPE')/$value
semantic_en: "Liquidation Cash Flow Type"
semantic_vi: "Liquidation Cash Flow Type — CDS view giao diện dựa trên tcms_liq_c_typ."
keywords:
  - "liquidation"
  - "cash"
  - "flow"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONCASHFLOWTYPE

**Liquidation Cash Flow Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOWTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationCashFlowType` | ✓ | |  | `liq_cflow_typ` | `CHAR(6)` | Cash Flow Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LiquidationCashFlowTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOWTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOWTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ILIQCFLOWTYPE',
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
    representativeKey: 'LiquidationCashFlowType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Cash Flow Type'
define view I_LiquidationCashFlowType
  as select from tcms_liq_c_typ
  association [0..*] to I_LiquidationCashFlowTypeText as _Text on $projection.LiquidationCashFlowType = _Text.LiquidationCashFlowType
{
      @ObjectModel.text.association: '_Text'
  key liq_cflow_typ as LiquidationCashFlowType,

      _Text
}
```
