---
name: I_CNDNCONTRITEMCATEGORY
description: "This CDS view is used to select the Condition Contract Item Category. This CDS view provides the parameters for the domain WCB_CONTRACT_ITEMS with the following values: \"\" None 1 Materials 2 Materials with Unit of Measure (as Key)"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORY')/$value
semantic_en: "This CDS view is used to select the Condition Contract Item Category. This CDS view provides the parameters for the domain WCB_CONTRACT_ITEMS with the following values: \"\" None 1 Materials 2 Materials with Unit of Measure (as Key)"
semantic_vi: "Condition Contract Item Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "item"
  - "category"
  - "cndn"
  - "contr"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - material
---
# I_CNDNCONTRITEMCATEGORY

**This CDS view is used to select the Condition Contract Item Category. This CDS view provides the parameters for the domain WCB_CONTRACT_ITEMS with the following values: "" None 1 Materials 2 Materials with Unit of Measure (as Key)**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrItemCategory` | ✓ | |  | `cast(dd07l.domvalue_l as wcb_contract_items )` | `CHAR(1)` | Condition Contract Items Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORY')/$value)*

```abap
@EndUserText.label: 'Condition Contract Item Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrItemCategory',
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
  technicalName: 'IWCBCOCOITEMCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrItemCategory
  as select from dd07l

  composition [0..*] of I_CndnContrItemCategoryTxt as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wcb_contract_items )                                  as CndnContrItemCategory,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                               as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WCB_CONTRACT_ITEMS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
