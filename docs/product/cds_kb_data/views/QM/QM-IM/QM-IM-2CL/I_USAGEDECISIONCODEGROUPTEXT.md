---
name: I_USAGEDECISIONCODEGROUPTEXT
description: "Usagedecisioncodegrouptext"
app_component: QM-IM-2CL
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
  - QM
  - QM-IM
  - interface-view
  - text-view
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_USAGEDECISIONCODEGROUPTEXT

**Usagedecisioncodegrouptext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
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
| `UsageDecisionCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `UsageDecisionCodeGroupText` |  | |  | `cast( kurztext as vdm_qktextgr preserving type )` |  |  |
| `_UsageDecisionCodeGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UsageDecisionCodeGroup` | `I_UsageDecisionCodeGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSGDECCDGRPT'
//@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Usage Decision Code Group - Text'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        sizeCategory: #M,
        serviceQuality: #A 
    },
    representativeKey: 'UsageDecisionCodeGroup',
    dataCategory: #TEXT
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view I_UsageDecisionCodeGroupText as select from qpgt
    association [0..1] to I_UsageDecisionCodeGroup as _UsageDecisionCodeGroup
      on $projection.UsageDecisionCodeGroup = _UsageDecisionCodeGroup.UsageDecisionCodeGroup
{
   key qpgt.codegruppe as UsageDecisionCodeGroup,
   @Semantics.language: true
   key sprache as Language,
   @Semantics.text: true
   @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
   cast( kurztext as vdm_qktextgr preserving type ) as UsageDecisionCodeGroupText,
   
   _UsageDecisionCodeGroup   
}
where katalogart = '3' // Usage Decision
```
