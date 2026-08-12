---
name: I_WAREHOUSETEXT
description: "Warehousetext"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - warehouse
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_WAREHOUSETEXT

**Warehousetext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Warehouse` | ✓ | |  | `lgnum` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `WarehouseName` |  | |  | `lnumt` |  |  |
| `_Warehouse` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_Warehouse` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Warehouse'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'Warehouse'
//Commented by VDM CDS Suite Plugin:@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Warehouse Number - Text'
//Commented by VDM CDS Suite Plugin:@Analytics: { dataCategory: #TEXT, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEWAREHOUSET'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@Search.searchable: true

define view I_WarehouseText
  as select from t300t
  association [0..1] to I_Warehouse as _Warehouse on $projection.Warehouse = _Warehouse.Warehouse
  association [0..1] to I_Language  as _Language  on $projection.Language = _Language.Language
{
      //Key
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum as Warehouse,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      //Text
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Description'
      lnumt as WarehouseName,

      //Association
      _Warehouse,
      _Language
};
```
