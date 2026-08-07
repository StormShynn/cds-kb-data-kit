---
name: I_POCHANNELOUTPUTTYPETXT
description: "Pochanneloutputtypetxt"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_POCHANNELOUTPUTTYPETXT

**Pochanneloutputtypetxt**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `PurchaseOrderOutputIsAutomated` | ✓ | |  | `cast( substring(dd07t.domvalue_l, 1, 2 ) as mm_a_output_channel_type )` |  |  |
| `POOutputChannelAutomnText` |  | |  | `ddtext` |  |  |
| `_OutputType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OutputType` | `I_POChannelOutputType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPOCOPTYPTXT'
@ObjectModel.representativeKey: 'PurchaseOrderOutputIsAutomated'
@EndUserText.label: 'PO of Output Type Manual - Text'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_POChannelOutputTypeTxt

  as select from dd07t

  association [0..1] to I_POChannelOutputType as _OutputType on _OutputType.PurchaseOrderOutputIsAutomated = $projection.PurchaseOrderOutputIsAutomated
  association [0..1] to I_Language            as _Language   on _Language.Language = $projection.Language
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                                       as Language,
      @ObjectModel.foreignKey.association: '_OutputType'
      @ObjectModel.text.element: ['POOutputChannelAutomnText']
      @Semantics.booleanIndicator
  key cast( substring(dd07t.domvalue_l, 1, 2 ) as mm_a_output_channel_type ) as PurchaseOrderOutputIsAutomated,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      @EndUserText.label: 'Output Channel Type'
      dd07t.ddtext                                                           as POOutputChannelAutomnText,

      _OutputType,
      _Language

}
where
      dd07t.domname  = 'OUTPUT_CHANNEL_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
