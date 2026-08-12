---
name: I_CNDNCONTRTYPEBLOCKUSAGETEXT
description: "This CDS view exposes fixed values that indicate If the condition contract type is blocked."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRTYPEBLOCKUSAGETEXT')/$value
semantic_en: "This CDS view exposes fixed values that indicate If the condition contract type is blocked."
semantic_vi: "Condition Contr Type Usage Block - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contr"
  - "type"
  - "usage"
  - "block"
  - "text"
  - "cndn"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRTYPEBLOCKUSAGETEXT

**This CDS view exposes fixed values that indicate If the condition contract type is blocked.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRTYPEBLOCKUSAGETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrTypeBlockUsage` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_cc_type_block )` | `CHAR(1)` | Condition Contract Type Block |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrTypeBlockUsageName` |  | |  | `cast( dd07t.ddtext as wcb_cc_type_block_txt preserving type )` | `CHAR(60)` | Description of Condition Contract Type Block Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrTypeBlockUsage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRTYPEBLOCKUSAGETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRTYPEBLOCKUSAGETEXT')/$value)*

```abap
@EndUserText.label: 'Condition Contr Type Usage Block - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory:           #TEXT,
  representativeKey:      'CndnContrTypeBlockUsage',
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWCBCOCOTYPEBLKT'
}
@Search.searchable: true
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrTypeBlockUsageText
  as select from dd07t

  association        to parent I_CndnContrTypeBlockUsage as _CndnContrTypeBlockUsage on $projection.CndnContrTypeBlockUsage = _CndnContrTypeBlockUsage.CndnContrTypeBlockUsage
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrTypeBlockUsage'
      @ObjectModel.text.element: ['CndnContrTypeBlockUsageName']
  key cast(dd07t.domvalue_l as wcb_cc_type_block )                                  as CndnContrTypeBlockUsage,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                              as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_cc_type_block_txt preserving type )                 as CndnContrTypeBlockUsageName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                              as DomainValue,

      /* Associations */
      _CndnContrTypeBlockUsage,
      _Language
}

where
      dd07t.domname  = 'WCB_CC_TYPE_BLOCK'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
