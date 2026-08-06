---
name: I_SALESCONTRACTSTDVH
description: Salescontractstdvh
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - value-help
  - standard-value-help
  - sales-contract
  - contract
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTSTDVH

**Salescontractstdvh**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesContract` | `SalesContract` |
| `DistributionChannel` | `DistributionChannel` |
| `OrganizationDivision` | `OrganizationDivision` |
| `SalesContractType` | `SalesContractType` |
| `SalesOrganization` | `SalesOrganization` |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1w9JfZmsJU0
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog:{
    sqlViewName: 'ISDSLSCONTRVH',
    compiler.compareFilter: true,
    preserveKey: true
}
@VDM.viewType: #COMPOSITE
@ObjectModel:{
    dataCategory: #VALUE_HELP,
    representativeKey: 'SalesContract',
    usageType:{
        dataClass: #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory: #M
    },
    supportedCapabilities: [#VALUE_HELP_PROVIDER]
}
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Sales Contract'
@Search.searchable: true
@Consumption.ranked: true

define view I_SalesContractStdVH
  as select from I_SalesContract
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key SalesContract,

      @Consumption.hidden: true
      DistributionChannel,
      @Consumption.hidden: true
      OrganizationDivision,
      @Consumption.hidden: true
      SalesContractType,
      @Consumption.hidden: true
      SalesOrganization
}
```
