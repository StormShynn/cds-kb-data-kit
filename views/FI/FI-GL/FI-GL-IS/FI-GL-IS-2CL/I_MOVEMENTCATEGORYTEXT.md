---
name: I_MOVEMENTCATEGORYTEXT
description: Movementcategorytext
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
# I_MOVEMENTCATEGORYTEXT

**Movementcategorytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AssetAcctTransClassfctn` | ✓ | |  | `movcat` |
| `Language` | ✓ | |  | `langu` |
| `AssetAcctTransClassfctnName` |  | |  | `cast (description as faa_movcat_text)` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIMOVCATT'
@EndUserText.label: 'Movement Category - Text'

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AssetAcctTransClassfctn'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_MovementCategoryText
  as select from faai_movcatt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{

  key movcat                                as AssetAcctTransClassfctn,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                 as Language,

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      cast (description as faa_movcat_text) as AssetAcctTransClassfctnName,

      _Language


}
```
