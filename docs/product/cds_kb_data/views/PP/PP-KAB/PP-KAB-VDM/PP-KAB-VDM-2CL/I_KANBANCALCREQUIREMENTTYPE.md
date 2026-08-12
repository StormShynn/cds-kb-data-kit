---
name: I_KANBANCALCREQUIREMENTTYPE
description: "Kanbancalcrequirementtype"
app_component: PP-KAB-VDM-2CL
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
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCALCREQUIREMENTTYPE

**Kanbancalcrequirementtype**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
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
| `Product` | ✓ | |  | `matnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `StorageLocation` | ✓ | |  | `lgort` |  |  |
| `PlndIndepRqmtsAreConsdrd` |  | |  | `flg_indreq` |  |  |
| `CustRqmtsAreConsdrd` |  | |  | `flg_cusreq` |  |  |
| `StkTransfRqmtsAreConsdrd` |  | |  | `flg_strreq` |  |  |
| `NonAssgdDepdntRqmtsAreConsdrd` |  | |  | `flg_depreq` |  |  |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBNCALCREQTP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Calculation Requirement Type'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MIXED}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalcRequirementType 
  as select from tpkrq
  association [1..1] to I_Product              as _Product              on  $projection.Product = _Product.Product
  association [1..1] to I_Plant                as _Plant                on  $projection.Plant = _Plant.Plant
  association [0..1] to I_StorageLocation      as _StorageLocation      on  $projection.Plant           = _StorageLocation.Plant
                                                                        and $projection.StorageLocation = _StorageLocation.StorageLocation
{
  key matnr as Product,
  key werks as Plant,
  key lgort as StorageLocation,
  
      @Semantics.booleanIndicator
      flg_indreq as PlndIndepRqmtsAreConsdrd,
      @Semantics.booleanIndicator
      flg_cusreq as CustRqmtsAreConsdrd,
      @Semantics.booleanIndicator
      flg_strreq as StkTransfRqmtsAreConsdrd,
      @Semantics.booleanIndicator
      flg_depreq as NonAssgdDepdntRqmtsAreConsdrd,
      
      _Product,
      _Plant,
      _StorageLocation
  
}
```
