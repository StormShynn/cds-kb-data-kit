---
name: I_INSPLOTSUMMARYCONTROLVH
description: Insplotsummarycontrolvh
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
  - value-help
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTSUMMARYCONTROLVH

**Insplotsummarycontrolvh**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionLotOrigin` | ✓ | |  |  |
| `InspLotSummaryControl` | ✓ | |  |  |
| `_InspectionLotOrigin` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Lot Summary'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel:{
               usageType:{
                           sizeCategory: #S,
                           serviceQuality: #A,
                           dataClass:#MASTER
                         }
                         }
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@Search.searchable: true
@ObjectModel.representativeKey: 'InspLotSummaryControl'
@Consumption.ranked: true
@ObjectModel.resultSet.sizeCategory: #XS
define view entity I_InspLotSummaryControlVH
  as select from I_InspLotSummaryControl
{
      @ObjectModel.foreignKey.association: '_InspectionLotOrigin'
  key InspectionLotOrigin,

      @ObjectModel.text.element: ['InspLotSummaryControlTxt']

  key InspLotSummaryControl,
      @Semantics.text: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.7, ranking: #HIGH }
      _Text[1:Language=$session.system_language].InspLotSummaryControlTxt,

      @Consumption.hidden: true
      _InspectionLotOrigin
}
```
