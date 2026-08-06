---
name: I_SUPPLIERACCOUNTGROUPSTDVH
description: Supplieraccountgroupstdvh
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
  - supplier
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERACCOUNTGROUPSTDVH

**Supplieraccountgroupstdvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierAccountGroup` | `SupplierAccountGroup` |
| `_SupplierAccountGroupText` | *Association* |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1cdxbOc1sYG
@AbapCatalog.sqlViewName: 'ISAG__VH2'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'SupplierAccountGroup'

@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #NONE                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_SupplierAccountGroupText']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Supplier Account Group'
@Consumption.ranked: true

define view I_SupplierAccountGroupStdVH as select from I_SupplierAccountGroup {
  @ObjectModel.text.association: '_SupplierAccountGroupText'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key SupplierAccountGroup,

  _SupplierAccountGroupText
}
```
