---
name: I_PRODNRSCETOOLGROUPTEXT
description: "Prodnrscetoolgrouptext"
app_component: PP-VDM-MD-2CL
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
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRSCETOOLGROUPTEXT

**Prodnrscetoolgrouptext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
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
| `ProductionResourceToolGroup` | ✓ | |  | `cast(fgrua as vdm_prtgroup preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProductionRsceToolGroupDesc` |  | |  | `fgrtxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProdnRsceToolGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProdnRsceToolGroup` | `I_ProdnRsceToolGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTGRPTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductionResourceToolGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Resource Tool Group - Text'

define view I_ProdnRsceToolGroupText
  as select from tcf13

  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
  association [0..1] to I_ProdnRsceToolGroup as _ProdnRsceToolGroup on $projection.ProductionResourceToolGroup = _ProdnRsceToolGroup.ProductionResourceToolGroup
{
      @ObjectModel.foreignKey.association: '_ProdnRsceToolGroup'
  key cast(fgrua as vdm_prtgroup preserving type) as ProductionResourceToolGroup,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      fgrtxt as ProductionRsceToolGroupDesc,

      // Associations
      _Language,
      _ProdnRsceToolGroup
};
```
