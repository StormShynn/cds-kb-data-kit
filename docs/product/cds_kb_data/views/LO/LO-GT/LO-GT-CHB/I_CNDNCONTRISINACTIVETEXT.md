---
name: I_CNDNCONTRISINACTIVETEXT
description: "This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVETEXT')/$value
semantic_en: "This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?"
semantic_vi: "Condition Contract Inactive State - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contract"
  - "inactive"
  - "state"
  - "text"
  - "cndn"
  - "contr"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:plant
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRISINACTIVETEXT

**This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrIsInactive` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_cc_state )` | `CHAR(1)` | Condition Contract Activation Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrIsInactiveName` |  | |  | `cast( dd07t.ddtext as wcb_cc_state_name preserving type )` | `CHAR(60)` | Condition Contract Activation Status Name |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrIsInactive` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVETEXT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Inactive State - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrIsInactive',
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
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWCBCCSTATET'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrIsInactiveText
  as select from dd07t

  association        to parent I_CndnContrIsInactive as _CndnContrIsInactive on $projection.CndnContrIsInactive = _CndnContrIsInactive.CndnContrIsInactive
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CndnContrIsInactive'
      @ObjectModel.text.element: ['CndnContrIsInactiveName']
  key cast(dd07t.domvalue_l as wcb_cc_state )                                  as CndnContrIsInactive,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                         as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_cc_state_name preserving type )                as CndnContrIsInactiveName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                         as DomainValue,

      /* Associations */
      _CndnContrIsInactive,
      _Language
}
where
      dd07t.domname  = 'WCB_CC_STATE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
