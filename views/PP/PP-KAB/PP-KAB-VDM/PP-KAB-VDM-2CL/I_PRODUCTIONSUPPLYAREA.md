---
name: I_PRODUCTIONSUPPLYAREA
description: Productionsupplyarea
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - product
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONSUPPLYAREA

**Productionsupplyarea**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProductionSupplyArea` | `cast(pvbe.prvbe as vdm_prvbe preserving type)` |
| key `Plant` | `pvbe.werks` |
| `StorageLocation` | `cast(pvbe.lgort as pph_lgort preserving type)` |
| `UnloadingPointName` | `pvbe.ablad` |
| `AddressID` | `pvbe.pvadr` |
| `ProductionSupplyAreaRespPerson` | `pvbe.rgver` |
| `FactoryCalendar` | `cast(pvbe.fabklv as fabkl preserving type)` |
| `ShiftGrouping` | `pvbe.schgrupv` |
| `ShiftSequence` | `pvbe.sprogv` |
| `PullIntervalInWorkdays` | `pvbe.pintvd` |
| `PullIntervalInHoursAndMinutes` | `cast(pvbe.pintvm as pintv_hrs_min)` |
| `UnloadingWarehouseStagingArea` | `pvbe.lgbzo` |
| `LastChangeDateTime` | `pvbe.lastchange_datetime` |
| `AutomotiveLoadingPoint` | `pvbe.loadingpoint` |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_ResponsiblePerson` | *Association* |
| `_Text` | *Association* |
| `_Address` | *Association* |
| `_ShiftGrouping` | *Association* |
| `_ShiftSequence` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_ResponsiblePerson` | `I_MRPController` | [0..1] |
| `_Text` | `I_ProductionSupplyAreaText` | [0..*] |
| `_Address` | `I_OrganizationAddress` | [0..1] |
| `_ShiftGrouping` | `I_ShiftGrouping` | [0..1] |
| `_ShiftSequence` | `I_ShiftSequence` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRODNSUPAREA'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Production Supply Area'

@Metadata.ignorePropagatedAnnotations:true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_ResponsiblePerson', '_Address']
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'ProductionSupplyArea'
@ObjectModel.semanticKey: 'ProductionSupplyArea'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'ProductionSupplyArea'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true, delta.changeDataCapture: { automatic : true } }

@Search.searchable: true

define view I_ProductionSupplyArea
  as select from pvbe as pvbe
  association [1..1] to I_Plant                    as _Plant             on  $projection.Plant = _Plant.Plant
  association [0..1] to I_StorageLocation          as _StorageLocation   on  $projection.Plant           = _StorageLocation.Plant
                                                                         and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [0..1] to I_MRPController            as _ResponsiblePerson on  $projection.Plant                          = _ResponsiblePerson.Plant
                                                                         and $projection.ProductionSupplyAreaRespPerson = _ResponsiblePerson.MRPController
  association [0..*] to I_ProductionSupplyAreaText as _Text              on  $projection.Plant                = _Text.Plant
                                                                         and $projection.ProductionSupplyArea = _Text.ProductionSupplyArea
  association [0..1] to I_OrganizationAddress      as _Address           on  $projection.AddressID = _Address.AddressID 
                                                                         and _Address.AddressPersonID is initial
                                                                         and _Address.AddressRepresentationCode is initial                                                                         
  association [0..1] to I_ShiftGrouping            as _ShiftGrouping     on  $projection.ShiftGrouping = _ShiftGrouping.ShiftGrouping
  association [0..1] to I_ShiftSequence            as _ShiftSequence     on  $projection.ShiftSequence = _ShiftSequence.ShiftSequence
                                                                         and $projection.ShiftGrouping = _ShiftSequence.ShiftGrouping
{
      // Key
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(pvbe.prvbe as vdm_prvbe preserving type) as ProductionSupplyArea,
      @ObjectModel.foreignKey.association: '_Plant'
  key pvbe.werks                                    as Plant,

      // Attributes
      @ObjectModel.foreignKey.association: '_StorageLocation'
      cast(pvbe.lgort as pph_lgort preserving type) as StorageLocation,
      @Semantics.text: true
      pvbe.ablad                                    as UnloadingPointName,
      pvbe.pvadr                                    as AddressID,
      @ObjectModel.foreignKey.association: '_ResponsiblePerson'
      pvbe.rgver                                    as ProductionSupplyAreaRespPerson,
      cast(pvbe.fabklv as fabkl preserving type)    as FactoryCalendar,
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
      pvbe.schgrupv                                 as ShiftGrouping,
      @ObjectModel.foreignKey.association: '_ShiftSequence'
      pvbe.sprogv                                   as ShiftSequence,
      pvbe.pintvd                                   as PullIntervalInWorkdays,
      // pvbe.pintvm                                         as PullIntervalInHoursAndMinutes,
      cast(pvbe.pintvm as pintv_hrs_min)            as PullIntervalInHoursAndMinutes, // cast to identical type to avoid conversion exit
      pvbe.lgbzo                                    as UnloadingWarehouseStagingArea,
      pvbe.lastchange_datetime                      as LastChangeDateTime,
      pvbe.loadingpoint                             as AutomotiveLoadingPoint,

      // Associations
      _Plant,
      _Text,
      _StorageLocation,
      _Address,
      _ResponsiblePerson,
      _ShiftGrouping,
      _ShiftSequence

};
```
