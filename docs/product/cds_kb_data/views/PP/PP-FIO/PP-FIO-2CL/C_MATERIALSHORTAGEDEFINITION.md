---
name: C_MATERIALSHORTAGEDEFINITION
description: "Materialshortagedefinition"
app_component: PP-FIO-2CL
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
  - consumption-view
  - material
  - component:PP-FIO-2CL
  - lob:Manufacturing
  - bo:Material
---
# C_MATERIALSHORTAGEDEFINITION

**Materialshortagedefinition**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
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
| `MaterialShortageProfile` | ✓ | |  |  |  |  |
| `MaterialShortageProfileCount` | ✓ | |  |  |  |  |
| `MaterialShortageDefinition` |  | |  | `concat(MaterialShortageProfile, MaterialShortageProfileCount)` |  |  |
| `DemandCategoryGroup` |  | |  |  |  |  |
| `ReceiptCategoryGroup` |  | |  |  |  |  |
| `EvaluationHorizonInDays` |  | |  |  |  |  |
| `MaterialShortageDefinitionName` |  | |  |  |  |  |
| `UncoveredDemandIsCalculated` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProfileUser` | `P_MaterialShortageProfileUser` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMATSHORTDEF'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'MRP Material Shortage Definition'

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
    usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #CUSTOMIZING },
    semanticKey:  [ 'MaterialShortageDefinition' ]
}
@ObjectModel.alternativeKey:[{ uniqueness: #UNIQUE, element:  [ 'MaterialShortageDefinition' ] }]
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION

@Search.searchable: true
define view C_MaterialShortageDefinition
  as select from I_MaterialShortageDefinition
  association [0..1] to P_MaterialShortageProfileUser as _ProfileUser on  _ProfileUser.UserID                  = $session.user
                                                                      and _ProfileUser.MaterialShortageProfile = $projection.MaterialShortageProfile

{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
  key MaterialShortageProfile,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
  key MaterialShortageProfileCount,

      @ObjectModel.text.element:  [ 'MaterialShortageDefinitionName' ]
      @EndUserText.label: 'Shortage Definition'
      @EndUserText.quickInfo: 'Material Shortage Definition'
      concat(MaterialShortageProfile, MaterialShortageProfileCount) as MaterialShortageDefinition,

      DemandCategoryGroup,

      ReceiptCategoryGroup,

      EvaluationHorizonInDays,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      MaterialShortageDefinitionName,

      @UI.hidden: true
      UncoveredDemandIsCalculated
}
where
  _ProfileUser.MaterialShortageProfile = MaterialShortageProfile
```
