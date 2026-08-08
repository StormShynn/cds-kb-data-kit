---
name: I_INSPECTIONCODEGROUP
description: "Inspectioncodegroup"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONCODEGROUP

**Inspectioncodegroup**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionCatalog` | ✓ | |  | `katalogart` |  |  |
| `InspectionCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `CodeGroupIsInactive` |  | |  | `case qpgr.inaktiv when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type ) else cast( 'X' as vdm_qm_codegroupisinactive preserving type ) end` |  |  |
| `CodeGroupStatus` |  | |  | `status` |  |  |
| `_InspectionCatalog` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionCatalog` | `I_Inspectioncatalog` | [1..1] |
| `_Text` | `I_Inspectioncodegrouptext` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Code Group'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey:  'InspectionCodeGroup'
@Analytics.technicalName: 'IINSPCODEGRP'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspectionCodeGroup as select from qpgr 
  association [1..1] to I_Inspectioncatalog as _InspectionCatalog
    on $projection.InspectionCatalog = _InspectionCatalog.InspectionCatalog

  association [1..*] to I_Inspectioncodegrouptext as _Text
    on $projection.InspectionCatalog = _Text.InspectionCatalog
   and $projection.InspectionCodeGroup = _Text.InspectionCodeGroup
    
{
  @ObjectModel.foreignKey.association: '_InspectionCatalog'  
    key qpgr.katalogart   as InspectionCatalog, 
  @ObjectModel.text: {
      association: '_Text'
  }
  key qpgr.codegruppe   as InspectionCodeGroup,
  
  // DB field has three values, but field shall be indicator
// @Semantics.booleanIndicator: true  // It is boolean, but we cannot tag it, due to static code check
  case qpgr.inaktiv
    when ' ' then cast( ' ' as vdm_qm_codegroupisinactive preserving type )
    else cast( 'X' as vdm_qm_codegroupisinactive preserving type )
  end                                                        as CodeGroupIsInactive,
  
  qpgr.status                                                as CodeGroupStatus,
    
  //Associations
  _InspectionCatalog,
  _Text
}
```
