---
name: I_STORAGELOCATIONADDRESS
description: "Storagelocationaddress"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - address
  - component:MM
  - lob:Sourcing & Procurement
---
# I_STORAGELOCATIONADDRESS

**Storagelocationaddress**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `StorageLocation` | ✓ | |  | `lgort` |  |  |
| `StorLocAddressSequenceNumber` | ✓ | |  | `lfdnr` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_Address_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1] |
| `_StorageLocation` | `I_StorageLocation` | [1] |
| `_Address` | `I_Address` | [1] |
| `_Address_2` | `I_OrganizationAddress` | [1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMM_STORLOCADDR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Assigned addresses of storage locations'
@ObjectModel.usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           }
@ObjectModel.representativeKey: 'StorLocAddressSequenceNumber'
@ObjectModel.supportedCapabilities: [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true


define view I_StorageLocationAddress
  as select from twlad
  association [1] to I_Plant           as _Plant           on  $projection.Plant = _Plant.Plant
  association [1] to I_StorageLocation as _StorageLocation on  $projection.StorageLocation = _StorageLocation.StorageLocation
                                                           and $projection.Plant           = _StorageLocation.Plant
  association [1] to I_Address                      as _Address         on  $projection.AddressID = _Address.AddressID
  association [1] to I_OrganizationAddress          as _Address_2       on  $projection.AddressID = _Address_2.AddressID
                                                                        and _Address_2.AddressPersonID           = ''
                                                                        and _Address_2.AddressRepresentationCode = ''
{

      @ObjectModel.foreignKey.association: '_Plant'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }]       //CustomUI
  key werks as Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' }, useAsTemplate: true }]       //CustomUI
  key lgort as StorageLocation,
  key lfdnr as StorLocAddressSequenceNumber,
      @ObjectModel.foreignKey.association: '_Address_2'
      adrnr as AddressID,

      _Plant,
      _StorageLocation,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_Address_2'
      _Address,
      _Address_2
}
```
