---
name: I_BR_NFVEHICLETYPE_2
description: "BR Nfvehicletype 2"
semantic_vi: "View I_BR_NFVEHICLETYPE_2 hiển thị các loại xe cho mục đích thuế Brazil, được sử dụng trong ứng dụng tài chính và logistics."
keywords:
  - "vehicle type"
  - "loại xe"
  - "brazilian tax"
  - "thuế brazil"
  - "financial application"
  - "ứng dụng tài chính"
  - "logistics"
  - "logistics application"
  - "ứng dụng logistics"
  - "fi-loc-lo-br"
  - "fi"
  - "fi-loc"
semantic_en: "The I_BR_NFVEHICLETYPE_2 CDS view exposes vehicle types for Brazilian tax purposes, used in financial and logistics applications."
app_component: FI-LOC-LO-BR
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
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFVEHICLETYPE_2

**BR Nfvehicletype 2**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `NFVehicleType` | ✓ | |  | `cast( tpveic as logbr_vehicletype preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFVehicleTypeText_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFVEHTYPE2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'NFVehicleType'
@ObjectModel.compositionRoot: true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Brazil Nota Fiscal Vehicle Type'

 
define view I_BR_NFVehicleType_2 as select from j_1bvehicletype   
  association [0..*] to I_BR_NFVehicleTypeText_2 as _Text on $projection.NFVehicleType = _Text.NFVehicleType 
{
    @ObjectModel.text.association: '_Text'
    key cast( tpveic as logbr_vehicletype preserving type ) as NFVehicleType, 
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
```
