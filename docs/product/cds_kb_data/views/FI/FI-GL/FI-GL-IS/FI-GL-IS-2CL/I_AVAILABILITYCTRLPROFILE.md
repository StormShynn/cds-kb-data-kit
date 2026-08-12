---
name: I_AVAILABILITYCTRLPROFILE
description: "Availabilityctrlprofile"
app_component: FI-GL-IS-2CL
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
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_AVAILABILITYCTRLPROFILE

**Availabilityctrlprofile**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `AvailabilityControlProfile` | ✓ | |  | `profile` |  |  |
| `AvailabilityControlProfileType` |  | |  | `profile_type` |  |  |
| `AvailyCtrlTimeRangeType` |  | |  | `time_range` |  |  |
| `BudgetCurrencyRole` |  | |  | `budget_currency_type` |  |  |
| `_Text` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AvailabilityCtrlProfileText` | [0..*] |
| `_SemanticTag` | `I_AvailyCtrlProfileSemanticTag` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Budget Availability Control Profile'
@Analytics: {
  dataCategory: #DIMENSION
 // dataExtraction.enabled: true
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIAVCPRFL'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'AvailabilityControlProfile'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@ObjectModel.supportedCapabilities:  [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET
    ]
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #FULL
}
@AbapCatalog.preserveKey:true
@ObjectModel.sapObjectNodeType.name: 'BdgtAvailabilityControlProfile'
@AbapCatalog.compiler.compareFilter:true

define view I_AvailabilityCtrlProfile
  as select from finsc_avc_prof
  association [0..*] to I_AvailabilityCtrlProfileText  as _Text        on $projection.AvailabilityControlProfile = _Text.AvailabilityControlProfile
  association [0..*] to I_AvailyCtrlProfileSemanticTag as _SemanticTag on $projection.AvailabilityControlProfile = _SemanticTag.AvailabilityControlProfile

{
      @ObjectModel.text.association: '_Text'
  key profile              as AvailabilityControlProfile,
      profile_type         as AvailabilityControlProfileType,
      time_range           as AvailyCtrlTimeRangeType,
      budget_currency_type as BudgetCurrencyRole,
      _Text,
      _SemanticTag

}
```
