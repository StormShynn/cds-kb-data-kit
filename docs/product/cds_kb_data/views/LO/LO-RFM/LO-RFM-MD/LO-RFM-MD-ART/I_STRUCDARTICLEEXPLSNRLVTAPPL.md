---
name: I_STRUCDARTICLEEXPLSNRLVTAPPL
description: "Strucdarticleexplsnrlvtappl"
app_component: LO-RFM-MD-ART
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
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - component:LO-RFM-MD-ART
  - lob:Logistics General
---
# I_STRUCDARTICLEEXPLSNRLVTAPPL

**Strucdarticleexplsnrlvtappl**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART` |
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
| `StrucdArticleExplsnRlvtAppl` | ✓ | |  | `cast( dd07l.domvalue_l as keytr)` |  |  |
| `_MatSplitTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MatSplitTypeText` | `I_StrucdArticleExplsnRlvtApplT` | [1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@Analytics.technicalName   : 'ISTRKEYTR'
@EndUserText.label: 'Transaction Key for structured materials'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'StrucdArticleExplsnRlvtAppl'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'StrucdArticleExplsnRlvtAppl'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_StrucdArticleExplsnRlvtAppl
  as select from dd07l
 //association [1] to I_StrucdArticlExplsnRlvApplTxt as _MatSplitTypeText on $projection.StrucdArticleExplsnRlvtAppl = _MatSplitTypeText.StrucdArticleExplsnRlvtAppl

association [1] to I_StrucdArticleExplsnRlvtApplT as _MatSplitTypeText on $projection.StrucdArticleExplsnRlvtAppl = _MatSplitTypeText.StrucdArticleExplsnRlvtAppl
{
 key cast( dd07l.domvalue_l as keytr) as StrucdArticleExplsnRlvtAppl,
   _MatSplitTypeText
}
where
      dd07l.domname  = 'KEYTR'
  and dd07l.as4local = 'A'
```
