---
name: I_AR_GROSSINCOMETAXPERCENTAGE
description: "AR Grossincometaxpercentage"
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
# I_AR_GROSSINCOMETAXPERCENTAGE

**AR Grossincometaxpercentage**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-AR-WHT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `Region` | ✓ | |  | `regio` |  |  |
| `GrossIncomeTaxActivityCode` | ✓ | |  | `j_1agicd` |  |  |
| `AR_ActivityCodeValidityAsText` | ✓ | |  | `cast( ( 99999999 - cast( j_1avaldat as abap.int4) ) as abap.char( 12 ) )` |  |  |
| `AR_ActivityCodeTaxRate` |  | |  | `j_1agiper` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'AR Gross Income Tax Percentage'
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
define view entity I_AR_GrossIncomeTaxPercentage as select from j_1agiper
{
  key land1 as Country,
  key regio as Region,
  key j_1agicd as GrossIncomeTaxActivityCode,
  @EndUserText.label: 'Activity Code Validity'
  key cast( ( 99999999 - cast( j_1avaldat as abap.int4) ) as abap.char( 12 ) ) as AR_ActivityCodeValidityAsText,
  j_1agiper as AR_ActivityCodeTaxRate
}
```
