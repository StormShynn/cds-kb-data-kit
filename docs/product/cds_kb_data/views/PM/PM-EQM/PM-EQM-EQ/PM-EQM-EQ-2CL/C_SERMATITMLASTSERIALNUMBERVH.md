---
name: C_SERMATITMLASTSERIALNUMBERVH
description: "SERMATITMLASTSerial NumberVH"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - consumption-view
  - value-help
  - serial-number
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# C_SERMATITMLASTSERIALNUMBERVH

**SERMATITMLASTSerial NumberVH**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `EquipMaterialLastSerialNumber` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `MaterialType` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.dataCategory:#VALUE_HELP
@ObjectModel.representativeKey: 'Material'
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@EndUserText.label: 'Last Material Serial Number'
define view entity C_SerMatItmLastSerialNumberVH
  as select from    I_Material                  as Material
    left outer to one join I_EquipMatlLastSerialNumber as LastSerialNumber on Material.Material = LastSerialNumber.Material
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key Material.Material,
      @EndUserText.label: 'Last Serial Number'
      LastSerialNumber.EquipMaterialLastSerialNumber, 
      @UI.hidden: true
      Material.AuthorizationGroup,
      @UI.hidden: true
      Material.MaterialGroup,
      @UI.hidden: true
      Material.MaterialType,
      @UI.hidden: true
      Material._MaterialType,
      @UI.hidden: true
      Material._MaterialGroup,
      @UI.hidden: true
      Material._Text

}
```
