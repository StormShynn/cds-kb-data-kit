---
name: I_INSPLOTSUMMARYCONTROLVH
description: "Insplotsummarycontrolvh"
app_component: QM-IM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotOrigin` | ✓ | |  |  |  |  |
| `InspLotSummaryControl` | ✓ | |  |  |  |  |
| `_InspectionLotOrigin` | | ✓ | | | | |

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
