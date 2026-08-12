---
name: I_INSPECTIONCODE
description: "Inspectioncode"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_INSPECTIONCODE

**Inspectioncode**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionCatalog` | ✓ | |  | `katalogart` |  |  |
| `InspectionCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `InspectionCode` | ✓ | |  | `code` |  |  |
| `CodeIsInactive` |  | |  | `case qpcd.inaktiv when ' ' then cast( ' ' as vdm_qm_codeisinactive preserving type ) else cast( 'X' as vdm_qm_codeisinactive preserving type ) end` |  |  |
| `_InspectionCatalog` | | ✓ | | | | |
| `_InspectionCodeGroup` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionCatalog` | `I_Inspectioncatalog` | [1..1] |
| `_InspectionCodeGroup` | `I_InspectionCodeGroup` | [1..1] |
| `_Text` | `I_InspectionCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Code'
@VDM: {
    viewType:#BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspectionCode'
@Analytics.technicalName: 'IINSPCODE'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspectionCode as select from qpcd 
  association [1..1] to I_Inspectioncatalog as _InspectionCatalog
    on $projection.InspectionCatalog = _InspectionCatalog.InspectionCatalog

  association [1..1] to I_InspectionCodeGroup as _InspectionCodeGroup
    on $projection.InspectionCatalog = _InspectionCodeGroup.InspectionCatalog
   and $projection.InspectionCodeGroup = _InspectionCodeGroup.InspectionCodeGroup
  association [1..*] to I_InspectionCodeText as _Text
    on $projection.InspectionCatalog = _Text.InspectionCatalog
   and $projection.InspectionCodeGroup = _Text.InspectionCodeGroup
   and $projection.InspectionCode      = _Text.InspectionCode  
{
    @ObjectModel.foreignKey.association: '_InspectionCatalog'
    key qpcd.katalogart as InspectionCatalog,
    @Consumption.valueHelpDefinition: [ 
      { entity:  { name:    'I_InspectionCodeGroupStdVH',
                   element: 'InspectionCodeGroup' },
        additionalBinding: [{ localElement: 'InspectionCatalog',
                              element: 'InspectionCatalog' }]
      }]
    @ObjectModel.foreignKey.association: '_InspectionCodeGroup'
    key codegruppe as InspectionCodeGroup,
//  key qpcd.version --> is always 1 so we could leave out
    @ObjectModel.text.association: '_Text'
    key code as  InspectionCode,
    
    // DB field has three values, but field shall be indicator
//    @Semantics.booleanIndicator: true  // It is boolean, but we cannot tag it, due to static code check
     case qpcd.inaktiv
       when ' ' then cast( ' ' as vdm_qm_codeisinactive preserving type )
       else cast( 'X' as vdm_qm_codeisinactive preserving type )
     end                                                       as CodeIsInactive,    
    
    //Associations
    _InspectionCatalog,
    _InspectionCodeGroup,
    _Text
    
} where qpcd.version = '000001'
```
