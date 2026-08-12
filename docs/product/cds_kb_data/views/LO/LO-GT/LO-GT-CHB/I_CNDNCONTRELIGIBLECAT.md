---
name: I_CNDNCONTRELIGIBLECAT
description: "This CDS view is used to select the type of eligible partner for a condition contract. The following fixed values have been maintained: Values: C - Customer V - Supplier N - No Eligible Partner P - Plant R - Reference Condition Contracts This CDS view provides the prerequisites for answering the following business questions: What is the type of eligible partner for a condition contract?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECAT')/$value
semantic_en: "This CDS view is used to select the type of eligible partner for a condition contract. The following fixed values have been maintained: Values: C - Customer V - Supplier N - No Eligible Partner P - Plant R - Reference Condition Contracts This CDS view provides the prerequisites for answering the following business questions: What is the type of eligible partner for a condition contract?"
semantic_vi: "Condition Contract Eligible Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "eligible"
  - "category"
  - "cndn"
  - "contr"
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
# I_CNDNCONTRELIGIBLECAT

**This CDS view is used to select the type of eligible partner for a condition contract. The following fixed values have been maintained: Values: C - Customer V - Supplier N - No Eligible Partner P - Plant R - Reference Condition Contracts This CDS view provides the prerequisites for answering the following business questions: What is the type of eligible partner for a condition contract?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrEligibleCat` | ✓ | |  | `cast(dd07l.domvalue_l as wcb_eligible_type )` | `CHAR(2)` | Type of Eligible Partner for a Condition Contract |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECAT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Eligible Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrEligibleCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrEligibleCat',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL, 
  technicalName: 'IWCBCCELIGCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrEligibleCat
  as select from dd07l

  composition [0..*] of I_CndnContrEligibleCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wcb_eligible_type )                                  as CndnContrEligibleCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                              as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'WCB_ELIGIBLE_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
