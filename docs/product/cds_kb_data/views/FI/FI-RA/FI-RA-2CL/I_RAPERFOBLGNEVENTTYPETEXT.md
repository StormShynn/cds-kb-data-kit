---
name: I_RAPERFOBLGNEVENTTYPETEXT
description: "Raperfoblgneventtypetext"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - text-view
  - text
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RAPERFOBLGNEVENTTYPETEXT

**Raperfoblgneventtypetext**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `language` |  |  |
| `PerfOblgnEventType` | ✓ | |  | `event_type` |  |  |
| `PerfOblgnEventTypeText` |  | |  | `cast(description as farr_cds_event_type_name preserving type)` |  |  |
| `_RAPerfOblgnEventType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RAPerfOblgnEventType` | `I_RAPerfObligationEventType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRAEVENTTYPETEXT'

@EndUserText.label: 'Event Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PerfOblgnEventType'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@VDM.viewType: #BASIC

define view entity I_RAPerfOblgnEventTypeText
  as select from farr_c_evnt_ty_t

  association [1..1] to I_RAPerfObligationEventType as _RAPerfOblgnEventType
    on $projection.PerfOblgnEventType = _RAPerfOblgnEventType.PerfOblgnEventType

  association [0..1] to I_Language                  as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language                                                      as Language,

      @ObjectModel.foreignKey.association: '_RAPerfOblgnEventType'
  key event_type                                                    as PerfOblgnEventType,

      @Semantics.text: true
      cast(description as farr_cds_event_type_name preserving type) as PerfOblgnEventTypeText,

      _Language,
      _RAPerfOblgnEventType

}
```
