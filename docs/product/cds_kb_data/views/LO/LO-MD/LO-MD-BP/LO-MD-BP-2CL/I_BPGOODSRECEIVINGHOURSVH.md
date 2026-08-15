---
name: I_BPGOODSRECEIVINGHOURSVH
description: "Bpgoodsreceivinghoursvh"
semantic_vi: "View Bpgoodsreceivinghoursvh cung cấp danh sách mã giờ nhận hàng cho hàng hóa, có thể được sử dụng để xác định các khoảng thời gian có sẵn để nhận hàng trong kho."
keywords:
  - "receiving hours"
  - "goods receiving"
  - "warehouse"
  - "logistics"
  - "goods"
  - "receiving hours code"
  - "bpgoodsreceivinghourscode"
  - "lo-md-bp-2cl"
  - "interface-view"
  - "value-help"
  - "logistics general"
semantic_en: "The Bpgoodsreceivinghoursvh view provides a list of receiving hours codes for goods, which can be used to determine the available time slots for receiving goods in a warehouse."
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
  - value-help
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_BPGOODSRECEIVINGHOURSVH

**Bpgoodsreceivinghoursvh**

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
| `_Text` | `I_BPGdsRcvgHrsValHelpText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGRHVH'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BPGoodsReceivingHoursCode'
@ClientHandling.algorithm : #SESSION_VARIABLE
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Search.searchable: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@EndUserText.label: 'Goods receiving hours'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel:{
modelingPattern: #VALUE_HELP_PROVIDER,
supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
}
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true

define view I_BPGoodsReceivingHoursVH as select from tvwa

 association [0..*] to I_BPGdsRcvgHrsValHelpText  as _Text on $projection.BPGoodsReceivingHoursCode = _Text.BPGoodsReceivingHoursCode

{
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH
   @ObjectModel.text.association: '_Text'
   @EndUserText.label: 'Goods Receiving Hours'
   key tvwa.wanid as BPGoodsReceivingHoursCode,
   
   _Text
}
```
