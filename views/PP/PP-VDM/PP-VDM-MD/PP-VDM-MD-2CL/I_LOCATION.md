---
name: I_LOCATION
description: Location
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_LOCATION

**Location**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Location` | ✓ | |  | `stand` |
| `Plant` | ✓ | |  | `werks` |
| `AddressID` |  | |  | `addrnum` |
| `LocationName` |  | |  | `cast(loc.ktext as locationname preserving type)` |
| `_Plant` | | ✓ | | |
| `_Address` | | ✓ | | |
| `_Address_2` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Address` | `I_Address` | [0..1] |
| `_Address_2` | `I_Address_2` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPLOCATION'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_Address', '_Address_2']
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'Location'
@ObjectModel.semanticKey: ['Location', 'Plant']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Location'
@ObjectModel.sapObjectNodeType.name: 'Location'

define view I_Location as select from t499s as loc
  association [1..1] to I_Plant     as _Plant     on  $projection.Plant     = _Plant.Plant
  association [0..1] to I_Address   as _Address   on  $projection.AddressID = _Address.AddressID
  association [0..1] to I_Address_2 as _Address_2 on  $projection.AddressID = _Address_2.AddressID
                                                  and _Address_2.AddressPersonID           = ''
                                                  and _Address_2.AddressRepresentationCode = ''
{
      @ObjectModel.text.element: ['LocationName']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key loc.stand   as Location,
      @ObjectModel.foreignKey.association: '_Plant'
  key loc.werks   as Plant,
      @ObjectModel.foreignKey.association: '_Address'
      loc.addrnum as AddressID,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(loc.ktext as locationname preserving type) as LocationName,

      // Associations
      _Plant,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_Address_2'
      _Address,
      _Address_2
};
```
