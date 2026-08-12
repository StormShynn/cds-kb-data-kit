---
name: I_CHARCATTRIBUTECODEGRP
description: "Charcattributecodegrp"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CHARCATTRIBUTECODEGRP

**Charcattributecodegrp**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharacteristicAttributeCodeGrp` | ✓ | |  | `codegruppe` |  |  |
| `CodeGroupIsInactive` |  | |  | `case qpgr.inaktiv when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type ) else cast( 'X' as vdm_qm_codegroupisinactive preserving type ) end` |  |  |
| `CodeGroupStatus` |  | |  | `status` |  |  |
| `CharcAttribCodeGroupCrtedBy` |  | |  | `ersteller` |  |  |
| `CharcAttribCodeGroupCrtedOn` |  | |  | `e_datum` |  |  |
| `CharcAttribCodeGroupLastChgdBy` |  | |  | `aenderer` |  |  |
| `CharcAttribCodeGroupLastChgdOn` |  | |  | `a_datum` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CharcAttributeCodeGrpText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICHRCATTRBTCDGRP'
//@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Characteristic Attribute Code Group'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.compositionRoot: true // Annotation does not make sense, but static check forces us to keep it
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #A }
@ObjectModel.representativeKey: 'CharacteristicAttributeCodeGrp'
@Metadata.ignorePropagatedAnnotations: true
define view I_CharcAttributeCodeGrp as select from qpgr 
    association [0..*] to I_CharcAttributeCodeGrpText as _Text 
      on $projection.CharacteristicAttributeCodeGrp = _Text.CharacteristicAttributeCodeGrp
{
    key qpgr.codegruppe as CharacteristicAttributeCodeGrp,
      
    // DB field has three values, but field shall be indicator
//    @Semantics.booleanIndicator: true  // It is boolean, but we cannot tag it, due to static code check
    case qpgr.inaktiv
      when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type )
      else cast( 'X' as vdm_qm_codegroupisinactive preserving type )
    end                 as CodeGroupIsInactive,
    
    qpgr.status         as CodeGroupStatus,

    @Semantics.user.createdBy: true
    qpgr.ersteller      as CharcAttribCodeGroupCrtedBy,
    @Semantics.businessDate.at: true
    qpgr.e_datum        as CharcAttribCodeGroupCrtedOn,
    @Semantics.user.lastChangedBy: true
    qpgr.aenderer       as CharcAttribCodeGroupLastChgdBy,
    @Semantics.businessDate.at: true
    qpgr.a_datum        as CharcAttribCodeGroupLastChgdOn,
    
    //Associations
    _Text
}
where katalogart = '1'
```
