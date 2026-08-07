---
name: I_PRODNRSCETOOLCONTROLPRFLTEXT
description: Prodnrscetoolcontrolprfltext
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
# I_PRODNRSCETOOLCONTROLPRFLTEXT

**Prodnrscetoolcontrolprfltext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProdnRsceToolControlProfile` | ✓ | |  | `steuf` |
| `Language` | ✓ | |  | `spras` |
| `ProdnRsceToolControlPrflName` |  | |  | `stftxt` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTCONTPRFLTX'
@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001 }
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProdnRsceToolControlProfile'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Production Resource Tool Control Profile - Text'
@ObjectModel.sapObjectNodeType.name: 'PRTControlProfileText'
@Analytics.dataExtraction.enabled: true

define view I_ProdnRsceToolControlPrflText
  as select from tcf11 as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'ProdnRsceToolControlPrflName'
  key txt.steuf  as ProdnRsceToolControlProfile,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras  as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}   
      @Semantics.text: true
      txt.stftxt as ProdnRsceToolControlPrflName,

      // Associations
      _Language
};
```
