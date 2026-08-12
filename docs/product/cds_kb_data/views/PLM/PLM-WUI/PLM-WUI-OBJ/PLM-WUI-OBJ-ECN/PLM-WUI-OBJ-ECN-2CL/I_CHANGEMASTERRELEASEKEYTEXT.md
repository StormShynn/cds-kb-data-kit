---
name: I_CHANGEMASTERRELEASEKEYTEXT
description: "These CDS views provide the prerequisites for answering the following business question: Is a change released globally within my company, or only for a specific operative area (for example costing, planning, or production)?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYTEXT')/$value
semantic_en: "These CDS views provide the prerequisites for answering the following business question: Is a change released globally within my company, or only for a specific operative area (for example costing, planning, or production)?"
semantic_vi: "Change Number Release Key - Text — CDS view giao diện dựa trên tcc10t."
keywords:
  - "change"
  - "number"
  - "release"
  - "key"
  - "text"
  - "language"
tags:
  - PLM
  - bo:companycode
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - plan
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - product
---
# I_CHANGEMASTERRELEASEKEYTEXT

**These CDS views provide the prerequisites for answering the following business question: Is a change released globally within my company, or only for a specific operative area (for example costing, planning, or production)?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberReleaseKey` | ✓ | |  | `rlkey` | `NUMC(2)` | ECM: Release Key |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ChangeNumberReleaseKeyText` |  | |  | `rltxt` | `CHAR(30)` | Description for release key |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNRELKEYTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ChangeNumberReleaseKey'
@ObjectModel.semanticKey: [ 'ChangeNumberReleaseKey' ]

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Search.searchable: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Release Key - Text'
define view I_ChangeMasterReleaseKeyText
  as select from tcc10t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Search.ranking: #HIGH
  key rlkey as ChangeNumberReleaseKey,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text
      rltxt as ChangeNumberReleaseKeyText,

      _Language
}
```
