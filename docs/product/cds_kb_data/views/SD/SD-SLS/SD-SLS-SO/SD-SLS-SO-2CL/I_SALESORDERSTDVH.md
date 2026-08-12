---
name: I_SALESORDERSTDVH
description: "Sales OrderSTDVH"
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - value-help
  - standard-value-help
  - sales-order
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERSTDVH

**Sales OrderSTDVH**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1w9JfZmsJU0
@AbapCatalog.sqlViewName: 'ISDSLSORDVH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel: {
    dataCategory: #VALUE_HELP,
    representativeKey: 'SalesOrder',
    usageType:{
        dataClass: #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory: #L
    },
    supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]
}

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Sales Order'
@Search.searchable: true
define view I_SalesOrderStdVH as select from I_SalesOrder {
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  key SalesOrder,

  @Consumption.hidden: true
  DistributionChannel,
  @Consumption.hidden: true
  OrganizationDivision,
  @Consumption.hidden: true
  SalesOrderType,
  @Consumption.hidden: true
  SalesOrganization
}
```
