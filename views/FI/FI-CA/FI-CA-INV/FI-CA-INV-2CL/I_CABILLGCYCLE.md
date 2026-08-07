---
name: I_CABILLGCYCLE
description: Cabillgcycle
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGCYCLE

**Cabillgcycle**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CABillgCycle` | ✓ | | `_tfk2607` | `cycle` |
| `CALastDayOfBillingPeriod` |  | | `_tfk2607` | `cycle_day` |
| `CABillgCyclePeriodCategory` |  | | `_tfk2607` | `cycle_periodcat` |
| `CABillgCycleIsIndividual` |  | | `_tfk2607` | `individual` |
| `_CALastDayOfBillingPeriod` | | ✓ | | |
| `_CABillgCycleText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CALastDayOfBillingPeriod` | `I_CALastDayOfBillingPeriod` | [0..1] |
| `_CABillgCycleText` | `I_CABillgCycleText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Abrechnungszyklus'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgCycle',
  sapObjectNodeType.name: 'ContrAcctgBillingCycle',
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

define view entity I_CABillgCycle
  as select from tfk2607 as _tfk2607
  association [0..1] to I_CALastDayOfBillingPeriod as _CALastDayOfBillingPeriod on $projection.CALastDayOfBillingPeriod = _CALastDayOfBillingPeriod.CALastDayOfBillingPeriod
  association [1..*] to I_CABillgCycleText         as _CABillgCycleText         on $projection.CABillgCycle = _CABillgCycleText.CABillgCycle
{
      @ObjectModel.text.association: '_CABillgCycleText'
  key _tfk2607.cycle           as CABillgCycle,

      @ObjectModel.foreignKey.association: '_CALastDayOfBillingPeriod'
      _tfk2607.cycle_day       as CALastDayOfBillingPeriod,
      _tfk2607.cycle_periodcat as CABillgCyclePeriodCategory,
      _tfk2607.individual      as CABillgCycleIsIndividual,

      _CALastDayOfBillingPeriod,
      _CABillgCycleText
}
```
