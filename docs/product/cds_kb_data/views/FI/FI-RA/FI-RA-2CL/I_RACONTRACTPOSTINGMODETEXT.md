---
name: I_RACONTRACTPOSTINGMODETEXT
description: "Contract Posting Mode - Text"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODETEXT')/$value
semantic_en: "Contract Posting Mode - Text"
semantic_vi: "Contract Posting Mode - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "contract"
  - "posting"
  - "mode"
  - "text"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - FI
  - bo:purchaseorder
  - component:FI-RA-2CL
  - contract
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
---
# I_RACONTRACTPOSTINGMODETEXT

**Contract Posting Mode - Text**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` | `LANG(1)` | Language Key |
| `RAContractPostingMode` | ✓ | |  | `cast(dd07t.domvalue_l as farr_posting_mode)` | `CHAR(1)` | Posting Mode |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `RAContractPostingModeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_RAContractPostingMode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Contract Posting Mode - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'RAContractPostingMode'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_RAContractPostingModeText
  as select from dd07t

  association to parent I_RAContractPostingMode as _RAContractPostingMode
    on $projection.RAContractPostingMode = _RAContractPostingMode.RAContractPostingMode

  association [0..1] to I_Language as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type) as Language,

      @ObjectModel.foreignKey.association: '_RAContractPostingMode'
      @ObjectModel.text.element: [ 'RAContractPostingModeName' ]
  key cast(dd07t.domvalue_l as farr_posting_mode)     as RAContractPostingMode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                as DomainValue,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      dd07t.ddtext                                    as RAContractPostingModeName,

      _RAContractPostingMode,
      _Language

}
where dd07t.domname  = 'FARR_POSTING_MODE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
