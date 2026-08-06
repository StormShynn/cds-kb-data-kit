---
name: I_SALESDOCBLOCKINGREASONT
description: Salesdocblockingreasont
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCBLOCKINGREASONT

**Salesdocblockingreasont**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesDocumentBlockingReason` | `aufsp` |
| key `Language` | `spras` |
| `SalesDocBlockingReasonName` | `vtext` |
| `_SalesDocumentBlockingReason` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentBlockingReason` | `I_SalesDocBlockingReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:#NOT_REQUIRED
@EndUserText.label: 'Blocking Reason for Sales Doc - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SalesDocumentBlockingReason'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Search.searchable: true

define view entity I_SalesDocBlockingReasonT
  as select from tvast
  association [0..1] to I_SalesDocBlockingReason as _SalesDocumentBlockingReason on $projection.SalesDocumentBlockingReason = _SalesDocumentBlockingReason.SalesDocumentBlockingReason
  association [0..1] to I_Language               as _Language                    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SalesDocumentBlockingReason'
  key aufsp as SalesDocumentBlockingReason,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      vtext as SalesDocBlockingReasonName,

      _SalesDocumentBlockingReason,
      _Language
}
```
