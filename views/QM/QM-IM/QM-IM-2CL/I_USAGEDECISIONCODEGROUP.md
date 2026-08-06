---
name: I_USAGEDECISIONCODEGROUP
description: Usagedecisioncodegroup
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_USAGEDECISIONCODEGROUP

**Usagedecisioncodegroup**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `UsageDecisionCodeGroup` | `qpgr.codegruppe` |
| `CodeGroupIsInactive` | `case qpgr.inaktiv when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type ) else cast( 'X' as vdm_qm_codegroupisinactive preserving type ) end` |
| `CodeGroupStatus` | `qpgr.status` |
| `UsgeDcsnCodeGroupCreatedBy` | `qpgr.ersteller` |
| `UsgeDcsnCodeGroupCreatedOn` | `qpgr.e_datum` |
| `UsgeDcsnCodeGroupLastChgdBy` | `qpgr.aenderer` |
| `UsgeDcsnCodeGroupLastChgdOn` | `qpgr.a_datum` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_UsageDecisionCodeGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSGDECCDGRP'
//@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Usage Decision Code Group'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'UsageDecisionCodeGroup'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A 
}
@ObjectModel.sapObjectNodeType.name: 'UsageDecisionCodeGroup'
@Metadata.ignorePropagatedAnnotations: true
define view I_UsageDecisionCodeGroup as select from qpgr
    association [0..*] to I_UsageDecisionCodeGroupText as _Text 
      on $projection.UsageDecisionCodeGroup = _Text.UsageDecisionCodeGroup
{
    @ObjectModel.text.association: '_Text'
    key qpgr.codegruppe as UsageDecisionCodeGroup,
    
    // DB field has three values, but field shall be indicator
//   @Semantics.booleanIndicator: true  // It is boolean, but we cannot tag it, due to static code check
    case qpgr.inaktiv
      when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type )
      else cast( 'X' as vdm_qm_codegroupisinactive preserving type )
    end                 as CodeGroupIsInactive,
    
    qpgr.status         as CodeGroupStatus,

    @Semantics.user.createdBy: true
    qpgr.ersteller      as UsgeDcsnCodeGroupCreatedBy,
    @Semantics.businessDate.at: true
    qpgr.e_datum        as UsgeDcsnCodeGroupCreatedOn,
    @Semantics.user.lastChangedBy: true
    qpgr.aenderer       as UsgeDcsnCodeGroupLastChgdBy,
    @Semantics.businessDate.at: true
    qpgr.a_datum        as UsgeDcsnCodeGroupLastChgdOn,
        
    /* Associations */
    _Text
}
where katalogart = '3' // Usage Decision
```
