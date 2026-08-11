---
name: I_CHANGEMASTERFUNCTIONTEXT
description: "This CDS view provides the prerequisites for answering the following business question: Which are the possible functions that can be assigned to change numbers?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: Which are the possible functions that can be assigned to change numbers?"
semantic_vi: "Change Number Function - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "change"
  - "number"
  - "function"
  - "text"
  - "language"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTERFUNCTIONTEXT

**This CDS view provides the prerequisites for answering the following business question: Which are the possible functions that can be assigned to change numbers?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberFunction` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as cc_aefun )` | `CHAR(1)` | Change number function |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ChangeNumberFunctionText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNFUNCTIONTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ChangeNumberFunction'
@ObjectModel.semanticKey: [ 'ChangeNumberFunction' ]

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

@EndUserText.label: 'Change Number Function - Text'
define view I_ChangeMasterFunctionText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Search.ranking: #HIGH
  key cast ( substring( domvalue_l, 1, 1 ) as cc_aefun ) as ChangeNumberFunction,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( ddlanguage as spras )                        as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                       as ChangeNumberFunctionText,

      _Language
}
where
      domname  = 'CC_AEFUN'
  and as4local = 'A'
```
