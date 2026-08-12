---
name: I_BPGOODSRECEIVINGHOURTEXT
description: "Bpgoodsreceivinghourtext"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - text-view
  - text
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_BPGOODSRECEIVINGHOURTEXT

**Bpgoodsreceivinghourtext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `BPGoodsReceivingHoursText` |  | |  | `vtext` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGDSRHRTXT'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BPGoodsReceivingHoursCode',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
}
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label: 'BPGoodsReceivingHour - Text'
define view I_BPGoodsReceivingHourText as select from tvwat
{
      key tvwat.wanid as BPGoodsReceivingHoursCode,
      @Semantics.language: true
      key tvwat.spras as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Goods Receiving Hours Description'
      tvwat.vtext as BPGoodsReceivingHoursText
}
```
