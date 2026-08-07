---
name: I_CUSTOMERACCOUNTGROUPSTDVH
description: Customeraccountgroupstdvh
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - value-help
  - standard-value-help
  - customer
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMERACCOUNTGROUPSTDVH

**Customeraccountgroupstdvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CustomerAccountGroup` | ✓ | |  |  |
| `_CustomerAccountGroupText` | | ✓ | | |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1cdxbOc1sYG
@AbapCatalog.sqlViewName: 'ICAG__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'CustomerAccountGroup'

@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CustomerAccountGroupText']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Customer Account Group'

@Search.searchable: true
@Consumption.ranked: true
define view I_CustomerAccountGroupStdVH
  as select from I_CustomerAccountGroup
{
      @ObjectModel.text.association: '_CustomerAccountGroupText'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key CustomerAccountGroup,

      _CustomerAccountGroupText
}
```
