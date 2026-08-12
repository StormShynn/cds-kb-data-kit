---
name: I_OVERALLTOTALSDDOCREFSTATUS
description: "Overalltotalsddocrefstatus"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLTOTALSDDOCREFSTATUS

**Overalltotalsddocrefstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallTotalSDDocRefStatus` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OverallTotalSDDocRefStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'OverallTotalSDDocRefStatus'
@ObjectModel.sapObjectNodeType.name: 'OverallTotalSDDocRefStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Ovrl Total SD Document Reference Status'
@Analytics: { dataCategory: #DIMENSION}
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVTTSDDCRFST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_OverallTotalSDDocRefStatus
as select from dd07l

association [0..*] to I_OverallTotalSDDocRefStatusT as _Text on $projection.OverallTotalSDDocRefStatus = _Text.OverallTotalSDDocRefStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as OverallTotalSDDocRefStatus,
    
    @Search.defaultSearchElement: true
    _Text
}

where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
