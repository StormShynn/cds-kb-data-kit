---
name: I_INSPLOTSUMMARYCONTROL
description: Insplotsummarycontrol
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
# I_INSPLOTSUMMARYCONTROL

**Insplotsummarycontrol**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotOrigin` | ✓ | |  | `herkunft` |  |  |
| `InspLotSummaryControl` | ✓ | |  | `einwelos` |  |  |
| `_Text` | | ✓ | | | | |
| `_InspectionLotOrigin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspLotSummaryControlText` | [0..*] |
| `_InspectionLotOrigin` | `I_InspectionLotOrigin` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel:{
               usageType:{
                           sizeCategory: #S,
                           serviceQuality: #A,
                           dataClass:#MASTER
                         }
                         }
@EndUserText.label: 'Control of Inspection Lot Summary'
@ObjectModel.representativeKey: 'InspLotSummaryControl'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IINSPLOTSMRYCL'
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'InspectionLotSummaryControl'
define view entity I_InspLotSummaryControl as select from tq32c
association[0..*] to I_InspLotSummaryControlText as _Text on $projection.InspLotSummaryControl = _Text.InspLotSummaryControl
                                                              and $projection.InspectionLotOrigin = _Text.InspectionLotOrigin 
association [0..1] to I_InspectionLotOrigin as _InspectionLotOrigin
        on $projection.InspectionLotOrigin = _InspectionLotOrigin.InspectionLotOrigin {
   
   @ObjectModel.foreignKey.association: '_InspectionLotOrigin'
   key herkunft as InspectionLotOrigin,
   @ObjectModel.text.association: '_Text'
   key einwelos as InspLotSummaryControl,
   
   _Text,
   _InspectionLotOrigin
}
```
