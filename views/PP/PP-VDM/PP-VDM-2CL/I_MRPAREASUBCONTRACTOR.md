---
name: I_MRPAREASUBCONTRACTOR
description: "Mrpareasubcontractor"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - contract
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPAREASUBCONTRACTOR

**Mrpareasubcontractor**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPArea` | ✓ | |  | `berid` |  |  |
| `MRPAreaPlant` | ✓ | |  | `werks` |  |  |
| `MRPAreaSubcontractor` | ✓ | |  | `lbear` |  |  |
| `_MRPArea` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPArea` | `I_MRPArea` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMRPAREASUBCONT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'MRPArea'
@ObjectModel.semanticKey: ['MRPArea', 'MRPAreaPlant', 'MRPAreaSubcontractor']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Area Subcontractor'

define view I_MRPAreaSubcontractor
  as select from mdll as mdll
         
  association [1..1] to I_MRPArea  as _MRPArea  on $projection.MRPArea = _MRPArea.MRPArea
  association [1..1] to I_Plant    as _Plant    on $projection.MRPAreaPlant = _Plant.Plant
  association [1..1] to I_Supplier as _Supplier on $projection.MRPAreaSubcontractor = _Supplier.Supplier 
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      --    representative key
  key mdll.berid as MRPArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
  key mdll.werks as MRPAreaPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]  
      @ObjectModel.foreignKey.association: '_Supplier'
  key mdll.lbear as MRPAreaSubcontractor,

      // Associations
      _MRPArea,
      _Plant,
      _Supplier
};
```
