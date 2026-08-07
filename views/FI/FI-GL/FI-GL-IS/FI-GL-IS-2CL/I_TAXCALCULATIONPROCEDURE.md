---
name: I_TAXCALCULATIONPROCEDURE
description: "Taxcalculationprocedure"
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
  - tax
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_TAXCALCULATIONPROCEDURE

**Taxcalculationprocedure**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxCalculationProcedure` | ✓ | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PricingProcedureName` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Tax Calculation Procedure'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.technicalName: 'IFITAXCALCPROC'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.representativeKey: 'TaxCalculationProcedure'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'TaxCalculationProcedure'

define view entity I_TaxCalculationProcedure
  as select from P_TAXCALCPROCEDURE

{
  key TaxCalculationProcedure as TaxCalculationProcedure,
      Language                as Language,
      PricingProcedureName    as PricingProcedureName
}
```
