---
name: I_PRATAXTXCOMMODITYTYPE
description: "PRA Tax Texas Commodity Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXCOMMODITYTYPE')/$value
semantic_en: "PRA Tax Texas Commodity Type"
semantic_vi: "PRA Tax Texas Commodity Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "tax"
  - "texas"
  - "commodity"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXTXCOMMODITYTYPE

**PRA Tax Texas Commodity Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXCOMMODITYTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityType` | ✓ | |  | `cast( domvalue_l as oiux3_tx_commodity_type )` | `CHAR(3)` | Texas Commodity Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxTXCommodityTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXCOMMODITYTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXCOMMODITYTYPE')/$value)*

```abap
@EndUserText.label: 'PRA Tax Texas Commodity Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTXCOMDTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'CommodityType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRATexasTaxCommodityType'

define view I_PRATaxTXCommodityType
  as select from dd07l
  association [0..*] to I_PRATaxTXCommodityTypeText as _Text on $projection.CommodityType = _Text.CommodityType
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as oiux3_tx_commodity_type )   as CommodityType,
      _Text
}
where
      domname  = 'OIUX3_TX_COMMODITY_TYPE'
  and as4local = 'A';
```
