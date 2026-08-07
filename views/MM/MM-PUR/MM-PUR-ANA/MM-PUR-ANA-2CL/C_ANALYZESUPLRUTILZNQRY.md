---
name: C_ANALYZESUPLRUTILZNQRY
description: Suppliers Utilization
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ANALYZESUPLRUTILZNQRY')/$value
semantic_en: Suppliers Utilization
semantic_vi: Suppliers Utilization — CDS view tiêu dùng dựa trên C_AnalyzeSuplrUtilznCube.
keywords:
  - suppliers
  - utilization
  - supplier
  - country
  - region
  - nmbr
  - available
  - number
  - contracts
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
---
# C_ANALYZESUPLRUTILZNQRY

**Suppliers Utilization**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ANALYZESUPLRUTILZNQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `NmbrOfAvailableSuppliers` |  | |  |  | `INT8(19)` |  |
| `NumberOfContracts` |  | |  |  | `INT8(19)` |  |
| `NmbrOfSuplrWithOutContracts` |  | |  | `cast(1 as abap.int8 )` | `INT8(19)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ANALYZESUPLRUTILZNQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ANALYZESUPLRUTILZNQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMUTSUPQRY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.query: true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Suppliers Utilization'
define view C_AnalyzeSuplrUtilznQry as select from C_AnalyzeSuplrUtilznCube {
    @AnalyticsDetails.query.display: #KEY_TEXT
 @AnalyticsDetails.query.axis: #FREE
 @Analytics.internalName:#LOCAL
  key Supplier,
 @AnalyticsDetails.query.display: #KEY_TEXT
 @AnalyticsDetails.query.axis: #FREE
 @Analytics.internalName:#LOCAL
  Country,
 @AnalyticsDetails.query.display: #KEY_TEXT
 @AnalyticsDetails.query.axis: #FREE
 @Analytics.internalName:#LOCAL
  Region,
 @DefaultAggregation:#SUM
  NmbrOfAvailableSuppliers,
   @DefaultAggregation:#SUM
 NumberOfContracts,
 
 @DefaultAggregation: #FORMULA
 @EndUserText.label: 'Suppliers Without Contracts'      
 @AnalyticsDetails.query.formula :' ( $projection.NmbrOfAvailableSuppliers - $projection.NumberOfContracts )  '
 cast(1 as abap.int8  )  as NmbrOfSuplrWithOutContracts   
}
```
