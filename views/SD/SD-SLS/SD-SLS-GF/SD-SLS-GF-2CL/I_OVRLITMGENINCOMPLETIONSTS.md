---
name: I_OVRLITMGENINCOMPLETIONSTS
description: Ovrlitmgenincompletionsts
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
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVRLITMGENINCOMPLETIONSTS

**Ovrlitmgenincompletionsts**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OvrlItmGeneralIncompletionSts` | ✓ | |  | `cast ( substring (dd07l.domvalue_l, 1, 1) as item_general_incompletion_sts preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OvrlItmGenIncompletionStsT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'OvrlItmGeneralIncompletionSts'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.resultSet.sizeCategory: #XS
@EndUserText.label: 'Overall Item General Incompletion Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOIGENINCMSTS'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name: 'SlsDocOvrlItmGenIncompltnSts'

define view I_OvrlItmGenIncompletionSts 
as select from dd07l

association [0..*] to I_OvrlItmGenIncompletionStsT as _Text on $projection.OvrlItmGeneralIncompletionSts = _Text.OvrlItmGeneralIncompletionSts
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring (dd07l.domvalue_l, 1, 1) as item_general_incompletion_sts preserving type ) as OvrlItmGeneralIncompletionSts,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')
  and ((dd07l.domvalue_l = 'A') or (dd07l.domvalue_l = 'B') or (dd07l.domvalue_l = 'C'));
```
