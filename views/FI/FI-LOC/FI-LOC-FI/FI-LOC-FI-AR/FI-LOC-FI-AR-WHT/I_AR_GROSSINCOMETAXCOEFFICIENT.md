---
name: I_AR_GROSSINCOMETAXCOEFFICIENT
description: AR Grossincometaxcoefficient
app_component: FI-LOC-FI-AR-WHT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - tax
  - component:FI-LOC-FI-AR-WHT
  - lob:Finance
---
# I_AR_GROSSINCOMETAXCOEFFICIENT

**AR Grossincometaxcoefficient**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-AR-WHT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |
| `FiscalYear` | ✓ | |  | `gjahr` |
| `Region` | ✓ | |  | `regio` |
| `EmploymentTaxDistributionType` | ✓ | |  | `j_1adtyp` |
| `AR_GrossIncomeCoefficientRate` |  | |  | `j_1amacoef` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'AR Gross Income Tax Coefficient'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern:#NONE
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_AR_GrossIncomeTaxCoefficient as select from j_1amacof
{
    key bukrs as CompanyCode,
    key gjahr as FiscalYear,
    key regio as Region,
    key j_1adtyp as EmploymentTaxDistributionType,
    j_1amacoef as AR_GrossIncomeCoefficientRate
}
```
