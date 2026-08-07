---
name: I_CAINVCGSCHEDULETEXT
description: "Cainvcgscheduletext"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - schedule-line
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGSCHEDULETEXT

**Cainvcgscheduletext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgSchedule` | ✓ | | `_tfk2606t` | `inv_schedule` |  |  |
| `Language` | ✓ | | `_tfk2606t` | `langu` |  |  |
| `CAInvcgScheduleText` |  | | `_tfk2606t` | `text` |  |  |
| `_CAInvcgSchedule` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgSchedule` | `I_CAInvcgSchedule` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Terminsteuerung der Fakturierung - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgSchedule',
  sapObjectNodeType.name: 'ContrAcctgInvcgScheduleText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgScheduleText
  as select from tfk2606t as _tfk2606t
  association [1..1] to I_CAInvcgSchedule as _CAInvcgSchedule on $projection.CAInvcgSchedule = _CAInvcgSchedule.CAInvcgSchedule
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgSchedule'
  key _tfk2606t.inv_schedule as CAInvcgSchedule,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2606t.langu        as Language,
      @Semantics.text: true
      _tfk2606t.text         as CAInvcgScheduleText,

      _CAInvcgSchedule,
      _Language
}
```
