---
name: I_CNDNCONTRPROCESSCATEGORY
description: "This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value
semantic_en: "This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties"
semantic_vi: "Condition Contract Process Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "process"
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
  - supplier
---
# I_CNDNCONTRPROCESSCATEGORY

**This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrProcessCategory` | ✓ | |  | `cast ( dd07l.domvalue_l as wcb_process_category )` | `CHAR(2)` | Process Category of a Condition Contract |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value)*

```abap
@EndUserText.label: 'Condition Contract Process Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrProcessCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrProcessCategory',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION, 
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY, 
                           #VALUE_HELP_PROVIDER,
                           #EXTRACTION_DATA_SOURCE],                           
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
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IWCBPROCESSCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrProcessCategory
  as select from dd07l

  composition [0..*] of I_CndnContrProcessCategoryText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as wcb_process_category )                                  as CndnContrProcessCategory,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                   as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WCB_PROCESS_CATEGORY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
