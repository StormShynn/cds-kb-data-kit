---
name: I_BR_NFEVEHDENATRANCOLORTEXT
description: "BR Nfevehdenatrancolortext"
semantic_vi: "Chứa thông tin mô tả màu xe Brazil trong nhiều ngôn ngữ, được sử dụng để hiển thị tên màu trong ứng dụng."
keywords:
  - "vehicle color"
  - "màu xe"
  - "brazil"
  - "brazilian"
  - "language"
  - "ngôn ngữ"
  - "description"
  - "mô tả"
  - "sap"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo-br"
semantic_en: "Exposes Brazilian vehicle color descriptions in multiple languages, used to display color names in applications."
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
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEVEHDENATRANCOLORTEXT

**BR Nfevehdenatrancolortext**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BR_NFeVehicleDENATRANColor` | ✓ | |  | `cast( substring(domvalue_l, 1 , 2 ) as logbr_vehiclecolorcode preserving type )` |  |  |
| `BR_NFeVehDENATRANColorDesc` |  | |  | `cast(ddtext as logbr_vehiclecolordescription preserving type)` |  |  |
| `_BR_NFeVehicleDENATRANColor` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFeVehicleDENATRANColor` | `I_BR_NFeVehDENATRANColor` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Vehicle DENATRAN Color - Text'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFEVEHCOLT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFeVehicleDENATRANColor'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_NFeVehDENATRANColorText
  as select from dd07t
  association [1..1] to I_BR_NFeVehDENATRANColor as _BR_NFeVehicleDENATRANColor on $projection.BR_NFeVehicleDENATRANColor = _BR_NFeVehicleDENATRANColor.BR_NFeVehicleDENATRANColor
  association [0..1] to I_Language               as _Language                   on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFeVehicleDENATRANColor'
  key cast( substring(domvalue_l, 1 , 2 ) as logbr_vehiclecolorcode preserving type ) as BR_NFeVehicleDENATRANColor,
  @Semantics.text
  cast(ddtext as logbr_vehiclecolordescription preserving type) as BR_NFeVehDENATRANColorDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFeVehicleDENATRANColor,
  _Language
}
where domname  = 'J_1B_VEH_COLOR_CODE'
  and as4local = 'A'
```
