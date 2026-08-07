---
name: I_DEFECTCODEGROUP
description: Defectcodegroup
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_DEFECTCODEGROUP

**Defectcodegroup**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectCodeGroup` | ✓ | |  | `cast( qpgr.codegruppe as vdm_qfegrp preserving type )` |  |  |
| `CodeGroupIsInactive` |  | |  | `case qpgr.inaktiv when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type ) else cast( 'X' as vdm_qm_codegroupisinactive preserving type ) end` |  |  |
| `CodeGroupStatus` |  | |  | `status` |  |  |
| `_Text` | | ✓ | | | | |
| `_DefectCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DefectCodeGroupText` | [0..*] |
| `_DefectCode` | `I_DefectCode` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IDEFECTCODEGRP'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Defect Code Group'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: [ '_Text' ]
@VDM: {
    viewType:#BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics.dataCategory: #DIMENSION
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    representativeKey: 'DefectCodeGroup',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
define view I_DefectCodeGroup as select from qpgr 

  association [0..*] to I_DefectCodeGroupText as _Text
    on $projection.DefectCodeGroup     = _Text.DefectCodeGroup
    
  association [0..*] to I_DefectCode as _DefectCode
    on $projection.DefectCodeGroup = _DefectCode.DefectCodeGroup
    
{
  @ObjectModel.text.association: '_Text'
  key cast( qpgr.codegruppe as vdm_qfegrp preserving type )   as DefectCodeGroup,
  
  // DB field has three values, but field shall be indicator
  @Semantics.booleanIndicator: true
  case qpgr.inaktiv
    when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type )
    else cast( 'X' as vdm_qm_codegroupisinactive preserving type )
  end                                                        as CodeGroupIsInactive,
  
  qpgr.status                                                as CodeGroupStatus,

  //Associations
  _Text,
  _DefectCode
  
} where qpgr.katalogart = '9' // Defects
```
