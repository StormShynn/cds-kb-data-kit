---
name: I_AVAILABILITYCTRLPROFILETEXT
description: Availabilityctrlprofiletext
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_AVAILABILITYCTRLPROFILETEXT

**Availabilityctrlprofiletext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AvailabilityControlProfile` | ✓ | |  | `profile` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `AvailabilityControlProfileName` |  | |  | `txt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIAVCPRFLT'
@EndUserText.label: 'Budget Availibility Ctrl Profile - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AvailabilityControlProfile'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: #LANGUAGE_DEPENDENT_TEXT

define view I_AvailabilityCtrlProfileText
  as select from finsc_avc_proft
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key profile as AvailabilityControlProfile,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu   as Language,
      @Semantics.text
      txt     as AvailabilityControlProfileName,
      _Language
}
```
