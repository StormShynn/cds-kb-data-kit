---
name: I_HDRDELIVINCOMPLETIONSTATUST
description: Hdrdelivincompletionstatust
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
  - status
  - header-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_HDRDELIVINCOMPLETIONSTATUST

**Hdrdelivincompletionstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `HeaderDelivIncompletionStatus` | ✓ | |  | `statu` |
| `Language` | ✓ | |  | `spras` |
| `HdrDelivIncompletionStatusDesc` |  | |  | `cast(bezei as hdrdelivincompletionstatusdesc preserving type)` |
| `_HeaderDelivIncompletionStatus` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HeaderDelivIncompletionStatus` | `I_HdrDelivIncompletionStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'HeaderDelivIncompletionStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Header Delivery Incompletion Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDHDDELINCPSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT  ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_HdrDelivIncompletionStatusT 
as select from tvbst 

association[0..1] to I_HdrDelivIncompletionStatus as _HeaderDelivIncompletionStatus on $projection.HeaderDelivIncompletionStatus = _HeaderDelivIncompletionStatus.HeaderDelivIncompletionStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_HeaderDelivIncompletionStatus'
    key statu as HeaderDelivIncompletionStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    cast(bezei as hdrdelivincompletionstatusdesc preserving type)  as HdrDelivIncompletionStatusDesc,
    
    //Associations
    _HeaderDelivIncompletionStatus,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'UVVLK')
  and ((tvbst.statu = 'A') or (tvbst.statu = 'C'));
```
