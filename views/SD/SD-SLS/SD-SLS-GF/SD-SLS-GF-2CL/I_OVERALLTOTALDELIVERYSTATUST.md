---
name: I_OVERALLTOTALDELIVERYSTATUST
description: Overalltotaldeliverystatust
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
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
# I_OVERALLTOTALDELIVERYSTATUST

**Overalltotaldeliverystatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `OverallTotalDeliveryStatus` | `statu` |
| key `Language` | `spras` |
| `OverallTotalDeliveryStatusDesc` | `bezei` |
| `_OverallTotalDeliveryStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OverallTotalDeliveryStatus` | `I_OverallTotalDeliveryStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OverallTotalDeliveryStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Overall Total Delivery Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVRLTOTDLSTST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true

define view I_OverallTotalDeliveryStatusT
as select from tvbst

association [0..1] to I_OverallTotalDeliveryStatus as _OverallTotalDeliveryStatus on $projection.OverallTotalDeliveryStatus = _OverallTotalDeliveryStatus.OverallTotalDeliveryStatus
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{ 
    @ObjectModel.foreignKey.association: '_OverallTotalDeliveryStatus'
    key statu as OverallTotalDeliveryStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    bezei as OverallTotalDeliveryStatusDesc,
    
    _OverallTotalDeliveryStatus,
    _Language    
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'LFGSK');
```
