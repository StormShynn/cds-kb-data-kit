---
name: I_PRATAXNDRESERVOIR
description: "PRA Tax North Dakota Reservoir"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDRESERVOIR')/$value
semantic_en: "PRA Tax North Dakota Reservoir"
semantic_vi: "PRA Tax North Dakota Reservoir — CDS view giao diện dựa trên PRA Tax North Dakota Reservoir."
keywords:
  - "pra"
  - "tax"
  - "north"
  - "dakota"
  - "reservoir"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXNDRESERVOIR

**PRA Tax North Dakota Reservoir**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDRESERVOIR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservoir` | ✓ | |  | `pool_code` | `CHAR(3)` | Tax 2.0: ND Pool Code |
| `ReservoirName` |  | |  | `pool_code_desc` | `CHAR(50)` | General Description - 50 Characters |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDRESERVOIR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDRESERVOIR')/$value)*

```abap
@EndUserText.label: 'PRA Tax North Dakota Reservoir'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXNDRES'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'Reservoir'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRANorthDakotaTaxReservoir'

define view I_PRATaxNDReservoir
  as select from /pra/nd_pool_cd
{
      @ObjectModel.text.element:  [ 'ReservoirName' ]
  key pool_code                                             as Reservoir,
      @Semantics.text: true
      pool_code_desc                                        as ReservoirName
}
```
