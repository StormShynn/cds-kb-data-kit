---
name: I_BPGOODSRECEIVINGHOUR
description: "Bpgoodsreceivinghour"
semantic_vi: "View Bpgoodsreceivinghour cung cấp thông tin về giờ nhận hàng hóa, có liên quan khi quản lý logistics và kho hàng."
keywords:
  - "goods receiving"
  - "receiving hours"
  - "logistics"
  - "inventory"
  - "warehouse"
  - "bpgoodsreceivinghourscode"
  - "lo-md-bp-2cl"
  - "ekko"
  - "sap logistics general"
  - "lo"
  - "lo-md"
  - "lo-md-bp"
semantic_en: "The Bpgoodsreceivinghour view provides information about receiving hours for goods, which is relevant when managing logistics and inventory in a warehouse."
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_BPGOODSRECEIVINGHOUR

**Bpgoodsreceivinghour**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPGoodsReceivingHoursCode` | ✓ | |  | `wanid` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPGoodsReceivingHourText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGRH'
@Search.searchable: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'BPGoodsReceivingHoursCode'
@ObjectModel.representativeKey: 'BPGoodsReceivingHoursCode'
@ObjectModel:{
modelingPattern: #ANALYTICAL_DIMENSION,
//supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE]
}
@EndUserText.label: 'BP Goods Receiving Hour'
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
define view I_BPGoodsReceivingHour as select from tvwa 
association [0..*] to I_BPGoodsReceivingHourText as _Text on $projection.BPGoodsReceivingHoursCode = _Text.BPGoodsReceivingHoursCode
{
   @ObjectModel.text.association: '_Text'
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH
   @EndUserText.label: 'Goods Receiving Hours'
   key tvwa.wanid as BPGoodsReceivingHoursCode,
   _Text
}
```
