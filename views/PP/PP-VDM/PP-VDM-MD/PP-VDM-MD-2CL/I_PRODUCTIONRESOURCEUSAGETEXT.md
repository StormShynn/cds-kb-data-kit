---
name: I_PRODUCTIONRESOURCEUSAGETEXT
description: Productionresourceusagetext
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - product
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONRESOURCEUSAGETEXT

**Productionresourceusagetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `ProductionResourceUsage` | ✓ | |  | `planv` |  |  |
| `ProductionResourceUsageDesc` |  | |  | `txt` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProductionResourceUsage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProductionResourceUsage` | `I_ProductionResourceUsage` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRODNRESUSGTX'
@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001 }
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProductionResourceUsage'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Resource Usage - Text'
@ObjectModel.sapObjectNodeType.name: 'ProductionResourceUsageText'
@Analytics.dataExtraction.enabled: true

define view I_ProductionResourceUsageText
  as select from tc23t as txt

  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_ProductionResourceUsage as _ProductionResourceUsage on $projection.ProductionResourceUsage = _ProductionResourceUsage.ProductionResourceUsage

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras as Language,
      @ObjectModel.foreignKey.association: '_ProductionResourceUsage'
  key txt.planv as ProductionResourceUsage,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.txt   as ProductionResourceUsageDesc,

      _Language,
      _ProductionResourceUsage
};
```
