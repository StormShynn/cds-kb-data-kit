---
name: I_MRPAREASUBCONTRACTOR
description: "Mrpareasubcontractor"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
