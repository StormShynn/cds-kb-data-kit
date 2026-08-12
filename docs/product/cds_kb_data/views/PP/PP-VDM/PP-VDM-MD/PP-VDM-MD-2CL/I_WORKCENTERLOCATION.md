---
name: I_WORKCENTERLOCATION
description: "Work CenterLOCATION"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERLOCATION

**Work CenterLOCATION**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterPlant` | ✓ | |  | `Plant` |  |  |
| `WorkCenterLocation` | ✓ | |  | `Location` |  |  |
| `AddressID` |  | |  |  |  |  |
| `WorkCenterLocationName` |  | |  | `LocationName` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_Address_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Address` | `I_Address` | [0..1] |
| `_Address_2` | `I_Address_2` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWKCLOCATION'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_Address', '_Address_2']
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'WorkCenterLocation'
@ObjectModel.semanticKey: ['WorkCenterPlant', 'WorkCenterLocation']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Location'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_WorkCenterLocation as select from I_Location as t499s
  association [1..1] to I_Plant     as _Plant     on  $projection.WorkCenterPlant = _Plant.Plant
  association [0..1] to I_Address   as _Address   on  $projection.AddressID = _Address.AddressID
  association [0..1] to I_Address_2 as _Address_2 on  $projection.AddressID = _Address_2.AddressID
                                                  and _Address_2.AddressPersonID           = ''
                                                  and _Address_2.AddressRepresentationCode = ''
{
      @ObjectModel.foreignKey.association: '_Plant'
  key t499s.Plant        as WorkCenterPlant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.element: ['WorkCenterLocationName']
  key t499s.Location     as WorkCenterLocation,
      @ObjectModel.foreignKey.association: '_Address'
      t499s.AddressID    as AddressID,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      t499s.LocationName as WorkCenterLocationName,

      // Associations
      _Plant,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_Address_2'
      _Address,
      _Address_2
};
```
