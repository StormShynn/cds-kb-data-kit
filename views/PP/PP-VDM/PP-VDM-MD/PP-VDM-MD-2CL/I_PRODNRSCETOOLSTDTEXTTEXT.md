---
name: I_PRODNRSCETOOLSTDTEXTTEXT
description: Prodnrscetoolstdtexttext
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
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRSCETOOLSTDTEXTTEXT

**Prodnrscetoolstdtexttext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdnRsceToolStandardTextCode` | ✓ | |  | `cast(txt.vlsch as cf_ktsch preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProdnRsceToolStdTextCodeName` |  | |  | `txt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTSTDTXTTEXT'
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey: true 
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProdnRsceToolStandardTextCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Standard Text for Production Resource Tool - Text'

define view I_ProdnRsceToolStdTextText
  as select from t435t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'ProdnRsceToolStdTextCodeName'
  key cast(txt.vlsch as cf_ktsch preserving type) as ProdnRsceToolStandardTextCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras                                   as Language,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.txt                                     as ProdnRsceToolStdTextCodeName,

      // Associations
      _Language
};
```
