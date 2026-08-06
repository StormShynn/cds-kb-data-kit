---
name: I_BPGOODSRECEIVINGHOUR
description: Bpgoodsreceivinghour
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BPGoodsReceivingHoursCode` | `tvwa.wanid` |
| `_Text` | *Association* |

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
