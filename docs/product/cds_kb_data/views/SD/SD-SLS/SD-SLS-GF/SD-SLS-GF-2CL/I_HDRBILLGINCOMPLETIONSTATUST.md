---
name: I_HDRBILLGINCOMPLETIONSTATUST
description: "Hdrbillgincompletionstatust"
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
  - status
  - header-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_HDRBILLGINCOMPLETIONSTATUST

**Hdrbillgincompletionstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HeaderBillgIncompletionStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `HdrBillgIncompletionStatusDesc` |  | |  | `cast(bezei as hdrbillgincompletionstatusdesc preserving type)` |  |  |
| `_HeaderBillgIncompletionStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HeaderBillgIncompletionStatus` | `I_HdrBillgIncompletionStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'HeaderBillgIncompletionStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Incompletion Status of Header - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDHDBILINCPSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT  ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_HdrBillgIncompletionStatusT 
as select from tvbst 

association[0..1] to I_HdrBillgIncompletionStatus as _HeaderBillgIncompletionStatus on $projection.HeaderBillgIncompletionStatus = _HeaderBillgIncompletionStatus.HeaderBillgIncompletionStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
    key statu as HeaderBillgIncompletionStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    cast(bezei as hdrbillgincompletionstatusdesc preserving type) as HdrBillgIncompletionStatusDesc,
        
    //Associations
    _HeaderBillgIncompletionStatus,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'UVFAK')
  and ((tvbst.statu = 'A') or (tvbst.statu = 'C'));
```
