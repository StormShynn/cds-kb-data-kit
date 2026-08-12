---
name: C_ANALYZESUPLRUTILZNCUBE
description: "Analyzesuplrutilzncube"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - analytical
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_ANALYZESUPLRUTILZNCUBE

**Analyzesuplrutilzncube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  |  |  |
| `SupplierAccountGroup` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `NmbrOfAvailableSuppliers` |  | |  |  |  |  |
| `NumberOfContracts` |  | |  |  |  |  |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSUPLRUTCUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Cube View of Suppliers Utilization'
define view C_AnalyzeSuplrUtilznCube as select from P_TotalNumberOfSuppliers 
  left outer to one join P_SuplrWithContracts as _WithContracts on P_TotalNumberOfSuppliers.Supplier = _WithContracts.SuplrsWithContracts
association[1..1] to I_Country as _Country on $projection.Country = _Country.Country
association[1..1] to I_Region as _Region on $projection.Region = _Region.Region and $projection.Country = _Region.Country
association[1..1] to I_Supplier as _Supplier on $projection.Supplier = _Supplier.Supplier
 {
 
    @ObjectModel.foreignKey.association: '_Supplier'
    @Analytics.internalName:#LOCAL
    key Supplier,
   
    SupplierAccountGroup,
    AuthorizationGroup,
     @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
    P_TotalNumberOfSuppliers.Country,
     @ObjectModel.foreignKey.association: '_Region'
      @Analytics.internalName:#LOCAL
     Region,
     @DefaultAggregation:#SUM
     NmbrOfAvailableSuppliers,
      @DefaultAggregation:#SUM
     NumberOfContracts,
     _Supplier,
     _Country,
     _Region
}
```
