---
name: I_STRUCDARTICLEEXPLSNRLVTAPPL
description: Strucdarticleexplsnrlvtappl
app_component: LO-RFM-MD-ART
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `StrucdArticleExplsnRlvtAppl` | `cast( dd07l.domvalue_l as keytr)` |
| `_MatSplitTypeText` | *Association* |

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
