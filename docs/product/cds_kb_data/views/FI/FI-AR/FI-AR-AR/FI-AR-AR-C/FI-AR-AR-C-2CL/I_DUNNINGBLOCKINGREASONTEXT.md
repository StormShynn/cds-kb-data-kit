---
name: I_DUNNINGBLOCKINGREASONTEXT
description: "Dunningblockingreasontext"
app_component: FI-AR-AR-C-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-AR
  - interface-view
  - text-view
  - text
  - component:FI-AR-AR-C-2CL
  - lob:Finance
---
# I_DUNNINGBLOCKINGREASONTEXT

**Dunningblockingreasontext**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DunningBlockingReason` | ✓ | |  | `cast( mansp as farp_mansp preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `DunningBlockingReasonDesc` |  | |  | `cast( text1 as farp_text1_040t preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Dunning Blocking Reason - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIDUNBLREASONT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DunningBlockingReason'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@Search.searchable: true

define view I_DunningBlockingReasonText
  as select from t040t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key cast( mansp as farp_mansp preserving type )      as DunningBlockingReason,
      @Semantics.language: true
  key spras                                            as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      cast( text1 as farp_text1_040t preserving type ) as DunningBlockingReasonDesc,
      _Language
};
```
