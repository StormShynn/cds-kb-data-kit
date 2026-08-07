---
name: I_INSPECTIONCODETEXT
description: Inspectioncodetext
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
  - text-view
  - inspection
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONCODETEXT

**Inspectioncodetext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionCatalog` | ✓ | |  | `katalogart` |
| `InspectionCodeGroup` |  | |  | `}] key codegruppe` |
| `InspectionCode` |  | |  | `}] key code` |
| `Language` | ✓ | |  | `sprache` |
| `InspectionCodeText` |  | |  | `cast( kurztext as vdm_qtxt_code preserving type )` |
| `_InspectionCatalog` | | ✓ | | |
| `_InspectionCodeGroup` | | ✓ | | |
| `_InspectionCode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionCatalog` | `I_Inspectioncatalog` | [1..1] |
| `_InspectionCodeGroup` | `I_InspectionCodeGroup` | [1..1] |
| `_InspectionCode` | `I_InspectionCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Code - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IINSPCODETEXT'
@ObjectModel.representativeKey: 'InspectionCode'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspectionCodeText
  as select from qpct
  association [1..1] to I_Inspectioncatalog   as _InspectionCatalog   on  $projection.InspectionCatalog = _InspectionCatalog.InspectionCatalog
  association [1..1] to I_InspectionCodeGroup as _InspectionCodeGroup on  $projection.InspectionCatalog   = _InspectionCodeGroup.InspectionCatalog
                                                                      and $projection.InspectionCodeGroup = _InspectionCodeGroup.InspectionCodeGroup
  association [1..1] to I_InspectionCode      as _InspectionCode      on  $projection.InspectionCatalog   = _InspectionCode.InspectionCatalog
                                                                      and $projection.InspectionCodeGroup = _InspectionCode.InspectionCodeGroup
                                                                      and $projection.InspectionCode      = _InspectionCode.InspectionCode
{
      @ObjectModel.foreignKey.association: '_InspectionCatalog'
  key katalogart as InspectionCatalog,
      //--[ GENERATED:012:GlBfhyFV7kY4h7jYW0xcqG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_InspectionCodeGroupStdVH',
                     element: 'InspectionCodeGroup' },
          additionalBinding: [{ localElement: 'InspectionCatalog',
                                element: 'InspectionCatalog' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspectionCodeGroup'
  key codegruppe as InspectionCodeGroup,
      //--[ GENERATED:012:GlBfhyFV7kY4h7jYW0xcqG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_InspectionCodeStdVH',
                     element: 'InspectionCode' },
          additionalBinding: [{ localElement: 'InspectionCatalog',
                                element: 'InspectionCatalog' },
                              { localElement: 'InspectionCodeGroup',
                                element: 'InspectionCodeGroup' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspectionCode'
  key code       as InspectionCode,
      @Semantics.language: true
  key sprache    as Language,
      @Semantics.text: true
      cast( kurztext as vdm_qtxt_code preserving type )  as InspectionCodeText,

      // Associations
      _InspectionCatalog,
      _InspectionCodeGroup,
      _InspectionCode
}
```
