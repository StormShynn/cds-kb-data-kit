---
name: I_OVERALLDELIVERYBLOCKSTATUST
description: "Overalldeliveryblockstatust"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - delivery
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLDELIVERYBLOCKSTATUST

**Overalldeliveryblockstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallDeliveryBlockStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `OverallDelivBlockStatusDesc` |  | |  | `bezei` |  |  |
| `_OverallDeliveryBlockStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OverallDeliveryBlockStatus` | `I_OverallDeliveryBlockStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OverallDeliveryBlockStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Overall Delivery Block Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVRLDVBLKSTST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true

define view I_OverallDeliveryBlockStatusT
as select from tvbst

association [0..1] to I_OverallDeliveryBlockStatus as _OverallDeliveryBlockStatus on $projection.OverallDeliveryBlockStatus = _OverallDeliveryBlockStatus.OverallDeliveryBlockStatus
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OverallDeliveryBlockStatus'
    key statu as OverallDeliveryBlockStatus,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    @Search.ranking: #LOW      
    bezei as OverallDelivBlockStatusDesc,
    
    _OverallDeliveryBlockStatus,
    _Language
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'LSSTK')
  and ((tvbst.statu = '') or (tvbst.statu = 'B') or (tvbst.statu = 'C'));
```
