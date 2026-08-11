---
name: I_CNDNCONTRELIGIBLECATTEXT
description: "This CDS view is used to select the type of eligible partner for a condition contract. The following fixed values have been maintained: Values: C - Customer V - Supplier N - No Eligible Partner P - Plant R - Reference Condition Contracts This CDS view provides the prerequisites for answering the following business questions: What is the type of eligible partner for a condition contract?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECATTEXT')/$value
semantic_en: "This CDS view is used to select the type of eligible partner for a condition contract. The following fixed values have been maintained: Values: C - Customer V - Supplier N - No Eligible Partner P - Plant R - Reference Condition Contracts This CDS view provides the prerequisites for answering the following business questions: What is the type of eligible partner for a condition contract?"
semantic_vi: "Cndn Contract Eligible Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "contract"
  - "eligible"
  - "category"
  - "text"
  - "contr"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-GT-CHB
  - contract
  - customer
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - plan
  - supplier
---
# I_CNDNCONTRELIGIBLECATTEXT

**This CDS view is used to select the type of eligible partner for a condition contract. The following fixed values have been maintained: Values: C - Customer V - Supplier N - No Eligible Partner P - Plant R - Reference Condition Contracts This CDS view provides the prerequisites for answering the following business questions: What is the type of eligible partner for a condition contract?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrEligibleCat` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_eligible_type )` | `CHAR(2)` | Type of Eligible Partner for a Condition Contract |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrEligibleCatName` |  | |  | `cast( dd07t.ddtext as wcb_eligible_type_name preserving type )` | `CHAR(60)` | Decription of Eligible Partner Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrEligibleCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECATTEXT')/$value)*

```abap
@EndUserText.label: 'Cndn Contract Eligible Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrEligibleCat',
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE],
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
  technicalName: 'IWCBCCELIGCATTXT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrEligibleCatText
  as select from dd07t

  association        to parent I_CndnContrEligibleCat as _CndnContrEligibleCat on $projection.CndnContrEligibleCat = _CndnContrEligibleCat.CndnContrEligibleCat
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CndnContrEligibleCat'
      @ObjectModel.text.element: ['CndnContrEligibleCatName']
  key cast(dd07t.domvalue_l as wcb_eligible_type )                                  as CndnContrEligibleCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                              as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_eligible_type_name preserving type )                as CndnContrEligibleCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                              as DomainValue,

      /* Associations */
      _CndnContrEligibleCat,
      _Language
}

where
      dd07t.domname  = 'WCB_ELIGIBLE_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
