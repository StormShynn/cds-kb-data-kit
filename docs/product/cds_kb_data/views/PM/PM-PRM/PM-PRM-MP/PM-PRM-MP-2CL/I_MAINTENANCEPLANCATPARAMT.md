---
name: I_MAINTENANCEPLANCATPARAMT
description: "Maintenance PlanCATPARAMT"
app_component: PM-PRM-MP-2CL
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
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - maintenance-plan
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEPLANCATPARAMT

**Maintenance PlanCATPARAMT**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
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
| `MaintenancePlanCategory` | ✓ | |  | `mptyp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaintenancePlanCategoryDesc` |  | |  | `txt` |  |  |
| `_MaintenancePlanCatParam` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenancePlanCatParam` | `I_MaintenancePlanCatParam` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Plan Category - Text'
@ObjectModel: {
   usageType.serviceQuality: #A,
   usageType.sizeCategory: #M,
   usageType.dataClass: #ORGANIZATIONAL
}

@ObjectModel.dataCategory:#TEXT
@Analytics.technicalName: 'IMAINTPLNCATT'
@ObjectModel.representativeKey: 'MaintenancePlanCategory'
@ObjectModel.semanticKey: [ 'MaintenancePlanCategory']

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]

@VDM.viewType: #BASIC
@Analytics: {
    dataExtraction: { 
        enabled: true,
        delta.changeDataCapture: {
              automatic: true
        }
    }
}

define view entity I_MaintenancePlanCatParamT
  as select from t399w_t

  association [0..1] to I_MaintenancePlanCatParam as _MaintenancePlanCatParam on _MaintenancePlanCatParam.MaintenancePlanCategory = $projection.MaintenancePlanCategory

  association [0..1] to I_Language                as _Language                on _Language.Language = $projection.Language

{
      @ObjectModel.foreignKey.association: '_MaintenancePlanCatParam'
  key t399w_t.mptyp as MaintenancePlanCategory,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t399w_t.spras as Language,

      @Semantics.text: true
      t399w_t.txt   as MaintenancePlanCategoryDesc,

      // Propagate association(s)
      _MaintenancePlanCatParam,
      _Language
}
```
