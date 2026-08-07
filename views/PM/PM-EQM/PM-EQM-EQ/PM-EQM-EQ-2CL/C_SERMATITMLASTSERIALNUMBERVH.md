---
name: C_SERMATITMLASTSERIALNUMBERVH
description: SERMATITMLASTSerial NumberVH
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Material` | ✓ | |  |  |
| `EquipMaterialLastSerialNumber` |  | |  |  |
| `AuthorizationGroup` |  | |  |  |
| `MaterialGroup` |  | |  |  |
| `MaterialType` |  | |  |  |

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
