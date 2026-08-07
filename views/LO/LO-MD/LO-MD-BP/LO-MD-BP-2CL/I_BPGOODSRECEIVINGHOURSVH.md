---
name: I_BPGOODSRECEIVINGHOURSVH
description: "Bpgoodsreceivinghoursvh"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
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
