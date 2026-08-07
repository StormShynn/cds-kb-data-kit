---
name: I_INSPSUBSETFIELDCOMBINATION
description: "Inspsubsetfieldcombination"
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
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSUBSETFIELDCOMBINATION

**Inspsubsetfieldcombination**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspSubsetFieldCombination` | ✓ | |  | `slwbez` |  |  |
| `InspectionSubsetType` |  | |  | `ppkttyp` |  |  |
| `InspSbstFieldCombnIsLastValid` |  | |  | `last_valid` |  |  |
| `SamplingProcedureInspSubset` |  | |  | `cast( case tq79.ppkttyp when '1' then '1' when '2' then '1' when '3' then '2' else 'X' end as vdm_qkzrast preserving type )` |  |  |
| `InspSbstLongTxtFldProperty` |  | |  | `userc1akt` |  |  |
| `InspSbstShrtTxtFldProperty` |  | |  | `userc2akt` |  |  |
| `InspSbstLongNmbrFldProperty` |  | |  | `usern1akt` |  |  |
| `InspSbstShrtNmbrFldProperty` |  | |  | `usern2akt` |  |  |
| `InspSbstDateFldProperty` |  | |  | `userd1akt` |  |  |
| `InspSbstTimeFldProperty` |  | |  | `usert1akt` |  |  |
| `SelectedCodeSet` |  | |  | `ppvemenge` |  |  |
| `SelectedCodeSetPlant` |  | |  | `ppvewerk` |  |  |
| `_InspectionSubsetType` | | ✓ | | | | |
| `_SelectedCodeSetPlant` | | ✓ | | | | |
| `_UsageDcsnSelectedCodeSet` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionSubsetType` | `I_InspectionSubsetType` | [0..1] |
| `_SelectedCodeSetPlant` | `I_Plant` | [0..1] |
| `_UsageDcsnSelectedCodeSet` | `I_UsageDcsnSelectedCodeSet` | [0..1] |
| `_Text` | `I_InspSubsetFieldCombinationT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Inspection Point Field Combination'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IINSPSSFCMB'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    representativeKey: 'InspSubsetFieldCombination',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSubsetFieldCombination
  as select from tq79
  
  association [0..1] to I_InspectionSubsetType     as _InspectionSubsetType      on $projection.InspectionSubsetType = _InspectionSubsetType.InspectionSubsetType
  association [0..1] to I_Plant                    as _SelectedCodeSetPlant      on  $projection.SelectedCodeSetPlant = _SelectedCodeSetPlant.Plant
  association [0..1] to I_UsageDcsnSelectedCodeSet as _UsageDcsnSelectedCodeSet  on $projection.SelectedCodeSetPlant = _UsageDcsnSelectedCodeSet.SelectedCodeSetPlant
                                                                                 and $projection.SelectedCodeSet = _UsageDcsnSelectedCodeSet.SelectedCodeSet
  association [0..*] to I_InspSubsetFieldCombinationT as _Text                   on $projection.InspSubsetFieldCombination = _Text.InspSubsetFieldCombination
  
{
      @ObjectModel.text.association: '_Text'
  key slwbez                                                                    as InspSubsetFieldCombination,
      @ObjectModel.foreignKey.association: '_InspectionSubsetType'
      ppkttyp                                                                   as InspectionSubsetType,
      last_valid                                                                as InspSbstFieldCombnIsLastValid,
      cast(
        case tq79.ppkttyp
          when '1' then '1'  //Equipment
          when '2' then '1'  //Functional Location
          when '3' then '2'  //Sample
          else 'X'
        end as vdm_qkzrast preserving type )                                    as SamplingProcedureInspSubset,
      userc1akt                                                                 as InspSbstLongTxtFldProperty,
      userc2akt                                                                 as InspSbstShrtTxtFldProperty,
      usern1akt                                                                 as InspSbstLongNmbrFldProperty,
      usern2akt                                                                 as InspSbstShrtNmbrFldProperty,
      userd1akt                                                                 as InspSbstDateFldProperty,
      usert1akt                                                                 as InspSbstTimeFldProperty,
      @ObjectModel.foreignKey.association: '_UsageDcsnSelectedCodeSet'
      ppvemenge                                                                 as SelectedCodeSet,
      @ObjectModel.foreignKey.association: '_SelectedCodeSetPlant'
      ppvewerk                                                                  as SelectedCodeSetPlant,
      
      // Associations
      _InspectionSubsetType,
      _SelectedCodeSetPlant,
      _UsageDcsnSelectedCodeSet,
      _Text
}
```
