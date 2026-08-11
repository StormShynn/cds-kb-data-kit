---
name: I_PRATAXTXCOMMODITYTYPETEXT
description: "PRA Tax Texas Commodity Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXCOMMODITYTYPETEXT')/$value
semantic_en: "PRA Tax Texas Commodity Type - Text"
semantic_vi: "PRA Tax Texas Commodity Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "tax"
  - "texas"
  - "commodity"
  - "type"
  - "text"
  - "language"
  - "code"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXTXCOMMODITYTYPETEXT

**PRA Tax Texas Commodity Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXCOMMODITYTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityType` | ✓ | |  | `cast( domvalue_l as oiux3_tx_commodity_type )` | `CHAR(3)` | Texas Commodity Type |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `CommodityCodeName` |  | |  | `cast( ddtext as oiu_vdm_tx_commodity_type_nm )` | `CHAR(60)` | Commodity Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXCOMMODITYTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXTXCOMMODITYTYPETEXT')/$value)*

```abap
@EndUserText.label: 'PRA Tax Texas Commodity Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTXCOMDTYTT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CommodityType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATaxTXCommodityTypeText
  as select from dd07t
{
  key cast( domvalue_l as oiux3_tx_commodity_type )           as CommodityType,
      @Semantics.language
  key cast( ddlanguage as spras )                             as Language,
      @Semantics.text
      cast( ddtext as oiu_vdm_tx_commodity_type_nm )          as CommodityCodeName
}
where
      domname  = 'OIUX3_TX_COMMODITY_TYPE'
  and as4local = 'A';
```
