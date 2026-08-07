---
name: I_PRODNRSCETOOLSTANDARDTEXT
description: Prodnrscetoolstandardtext
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
# I_PRODNRSCETOOLSTANDARDTEXT

**Prodnrscetoolstandardtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdnRsceToolStandardTextCode` | ✓ | |  | `cast(t435.vlsch as cf_ktsch preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdnRsceToolStdTextText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTSTDTEXT'
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey: true 
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.representativeKey: 'ProdnRsceToolStandardTextCode'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Standard Text for Production Resource Tool'

define view I_ProdnRsceToolStandardText
  as select from t435
  association [0..*] to I_ProdnRsceToolStdTextText as _Text on $projection.ProdnRsceToolStandardTextCode = _Text.ProdnRsceToolStandardTextCode
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(t435.vlsch as cf_ktsch preserving type) as ProdnRsceToolStandardTextCode,

      // Associations
      _Text
};
```
