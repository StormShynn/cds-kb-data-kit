---
name: I_BUSTRANSACTIONTYPETEXT
description: Bustransactiontypetext
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BUSTRANSACTIONTYPETEXT

**Bustransactiontypetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |
| `BusinessTransactionType` | ✓ | |  | `cast(cbttype as fis_custbttype preserving type )` |
| `BusinessTransactionTypeName` |  | |  | `cast(txt as fins_custbttype_text preserving type)` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'BusinessTransactionType'
@EndUserText.label: 'Business Transaction Type - Text'
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIBUSTXTYPET'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BusTransactionTypeText
as
select from finsc_custbttypt
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
  key langu as Language,
  key cast(cbttype as fis_custbttype preserving type )  as BusinessTransactionType,
  @Semantics.text
  @Search.defaultSearchElement:true
  @Search.fuzzinessThreshold:0.8
  @Search.ranking:#LOW  
  cast(txt as fins_custbttype_text preserving type) as BusinessTransactionTypeName,
  _Language
}
```
