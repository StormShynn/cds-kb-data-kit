---
name: I_PRODUCTIONSUPPLYAREATEXT
description: "Productionsupplyareatext"
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
  - text-view
  - product
  - text
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONSUPPLYAREATEXT

**Productionsupplyareatext**

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
| `ProductionSupplyArea` | ✓ | |  | `prvbe` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProductionSupplyAreaName` |  | |  | `cast(pvkt.pvbtx as vdm_pvbtx preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRODNSUPAREAT'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Production Supply Area - Text'

@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ProductionSupplyArea'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #MASTER }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_ProductionSupplyAreaText
  as select from pvkt as pvkt

  association [1..1] to I_Plant    as _Plant    on $projection.Plant = _Plant.Plant
  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'ProductionSupplyAreaName'
  key pvkt.prvbe                                    as ProductionSupplyArea,
      @ObjectModel.foreignKey.association: '_Plant'
  key pvkt.werks                                    as Plant,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key pvkt.spras                                    as Language,

      // Text
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(pvkt.pvbtx as vdm_pvbtx preserving type) as ProductionSupplyAreaName,

      // Associations
      _Plant,
      _Language
};
```
