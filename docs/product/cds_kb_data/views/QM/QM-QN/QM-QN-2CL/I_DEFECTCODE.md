---
name: I_DEFECTCODE
description: "Defectcode"
app_component: QM-QN-2CL
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
  - QM-QN
  - interface-view
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_DEFECTCODE

**Defectcode**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
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
| `DefectCodeGroup` | ✓ | |  | `cast( qpcd.codegruppe as vdm_qfegrp preserving type )` |  |  |
| `DefectCode` | ✓ | |  | `cast( qpcd.code as vdm_qfecod preserving type )` |  |  |
| `CodeIsInactive` |  | |  | `case qpcd.inaktiv when ' ' then cast( ' ' as vdm_qm_codeisinactive preserving type ) else cast( 'X' as vdm_qm_codeisinactive preserving type ) end` |  |  |
| `DefectClass` |  | |  | `fehlklasse` |  |  |
| `CodeGroupStatus` |  | | `_DefectCodeGroup` | `CodeGroupStatus` |  |  |
| `_DefectCodeGroup` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_DefectClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DefectCodeGroup` | `I_DefectCodeGroup` | [1..1] |
| `_Text` | `I_DefectCodeText` | [0..*] |
| `_DefectClass` | `I_DefectClass` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Defect Code'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: [ '_Text', '_DefectCodeGroup' ]
@VDM: {
    viewType:#BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IDEFECTCODE'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    representativeKey: 'DefectCode',
    usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
define view entity I_DefectCode as select from qpcd 

   association [1..1] to I_DefectCodeGroup as _DefectCodeGroup on  $projection.DefectCodeGroup = _DefectCodeGroup.DefectCodeGroup
   
   association [0..*] to I_DefectCodeText  as _Text on  $projection.DefectCodeGroup = _Text.DefectCodeGroup
                                                    and $projection.DefectCode      = _Text.DefectCode
                                                    
   association [0..1] to I_DefectClass     as _DefectClass on $projection.DefectClass = _DefectClass.DefectClass
                                                     
{
   @Consumption.valueHelpDefinition: [ 
     { entity:  { name:    'I_DefectCodeGroupStdVH',
                  element: 'DefectCodeGroup' }
     }]
   @ObjectModel.foreignKey.association: '_DefectCodeGroup'
   key cast( qpcd.codegruppe as vdm_qfegrp preserving type )  as DefectCodeGroup,
   @ObjectModel.text.association: '_Text'
   key cast( qpcd.code       as vdm_qfecod preserving type )  as DefectCode,
// key qpcd.version --> is always 1 so we could leave out
   
   // DB field has three values, but field shall be indicator
   @Semantics.booleanIndicator: true
   case qpcd.inaktiv
     when ' ' then cast( ' ' as vdm_qm_codeisinactive preserving type )
     else cast( 'X' as vdm_qm_codeisinactive preserving type )
   end                                                        as CodeIsInactive,
   
   @ObjectModel.foreignKey.association: '_DefectClass'
   qpcd.fehlklasse                                            as DefectClass,
   
   // For authority check
   _DefectCodeGroup.CodeGroupStatus,
   
   // Associations
   _DefectCodeGroup,
   _Text,
   _DefectClass
    
} where qpcd.katalogart = '9' // Defects
    and qpcd.version    = '000001'
```
