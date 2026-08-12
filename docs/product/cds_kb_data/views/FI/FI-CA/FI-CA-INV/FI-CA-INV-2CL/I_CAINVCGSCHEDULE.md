---
name: I_CAINVCGSCHEDULE
description: "Cainvcgschedule"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - schedule-line
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGSCHEDULE

**Cainvcgschedule**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgSchedule` | ✓ | | `_tfk2606` | `inv_schedule` |  |  |
| `_CAInvcgScheduleText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgScheduleText` | `I_CAInvcgScheduleText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName:#LOCAL
}

@EndUserText.label: 'Terminsteuerung'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgSchedule',
  sapObjectNodeType.name: 'ContrAcctgInvoicingSchedule',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}

@VDM.viewType: #BASIC

define view entity I_CAInvcgSchedule
  as select from tfk2606 as _tfk2606
  association [1..*] to I_CAInvcgScheduleText as _CAInvcgScheduleText on $projection.CAInvcgSchedule = _CAInvcgScheduleText.CAInvcgSchedule
{
      @ObjectModel.text.association: '_CAInvcgScheduleText'
  key _tfk2606.inv_schedule as CAInvcgSchedule,
      
      _CAInvcgScheduleText
}
```
