---
name: I_INCOTERMSVERSIONTEXT
description: "Incotermsversiontext"
app_component: SD-BF-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-MD
  - interface-view
  - text-view
  - text
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_INCOTERMSVERSIONTEXT

**Incotermsversiontext**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncotermsVersion` | ✓ | |  | `incov` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `IncotermsVersionName` |  | |  | `bezei` |  |  |
| `_IncotermsVersion` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncotermsVersion` | `I_IncotermsVersion` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel:{dataCategory: #TEXT,
              representativeKey: 'IncotermsVersion',
              usageType.dataClass: #CUSTOMIZING ,
              usageType.serviceQuality: #A,
              usageType.sizeCategory: #S }
@EndUserText.label: 'Incoterms Version - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IINCOTERMSVT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_IncotermsVersionText
  as select from tincvt
  association [0..1] to I_IncotermsVersion as _IncotermsVersion on $projection.IncotermsVersion = _IncotermsVersion.IncotermsVersion
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
  key incov as IncotermsVersion,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
      bezei as IncotermsVersionName,

      _IncotermsVersion,
      _Language
};
```
