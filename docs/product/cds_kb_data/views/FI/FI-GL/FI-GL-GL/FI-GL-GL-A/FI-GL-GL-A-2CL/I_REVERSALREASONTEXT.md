---
name: I_REVERSALREASONTEXT
description: "Reversalreasontext"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_REVERSALREASONTEXT

**Reversalreasontext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `ReversalReason` | ✓ | |  | `stgrd` |  |  |
| `ReversalReasonName` |  | |  | `cast ( t041ct.txt40 as fac_rvsl_rsn_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataExtraction.enabled: true }
@EndUserText.label: 'Reversal Reason - Text'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {dataCategory: #TEXT,
               representativeKey: 'ReversalReason',
               usageType: { dataClass: #CUSTOMIZING,
                            serviceQuality: #A,
                            sizeCategory: #S},
               supportedCapabilities: [#EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
               modelingPattern: #LANGUAGE_DEPENDENT_TEXT    
}
@Search.searchable: true

define view entity I_ReversalReasonText
  as select from t041ct
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key t041ct.spras as Language,
  key t041ct.stgrd as ReversalReason,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast ( t041ct.txt40 as fac_rvsl_rsn_name preserving type ) as ReversalReasonName,
      _Language
}
```
