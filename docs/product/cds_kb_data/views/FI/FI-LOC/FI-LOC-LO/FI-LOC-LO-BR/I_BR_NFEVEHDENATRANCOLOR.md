---
name: I_BR_NFEVEHDENATRANCOLOR
description: "BR Nfevehdenatrancolor"
semantic_vi: "View I_BR_NFEVEHDENATRANCOLOR hiển thị thông tin màu sắc xe ô tô theo DENATRAN Brazil, có thể được sử dụng khi làm việc với dữ liệu đăng ký xe trong ứng dụng component FI-LOC-LO-BR."
keywords:
  - "vehicle registration"
  - "denatran"
  - "color"
  - "fi-loc-lo-br"
  - "brazil"
  - "finance"
  - "interface view"
  - "component fi-loc-lo-br"
  - "lob finance"
  - "denatran color"
semantic_en: "The I_BR_NFEVEHDENATRANCOLOR view exposes Brazilian vehicle DENATRAN color information, which can be used when working with vehicle registration data in the FI-LOC-LO-BR application component."
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
# I_BR_NFEVEHDENATRANCOLOR

**BR Nfevehdenatrancolor**

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
| `BR_NFeVehicleDENATRANColor` | ✓ | |  | `cast( substring(domvalue_l, 1 , 2 ) as logbr_vehiclecolorcode preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFeVehDENATRANColorText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil NFe Vehicle DENATRAN Color'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFEVEHCOL'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFeVehicleDENATRANColor'
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_NFeVehDENATRANColor
  as select from dd07l
  association [0..*] to I_BR_NFeVehDENATRANColorText as _Text on $projection.BR_NFeVehicleDENATRANColor = _Text.BR_NFeVehicleDENATRANColor
{
  @ObjectModel.text.association: '_Text'
  key cast( substring(domvalue_l, 1 , 2 ) as logbr_vehiclecolorcode preserving type ) as BR_NFeVehicleDENATRANColor,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname  = 'J_1B_VEH_COLOR_CODE'
  and as4local = 'A'
```
