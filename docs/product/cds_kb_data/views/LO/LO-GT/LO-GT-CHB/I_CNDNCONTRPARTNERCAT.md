---
name: I_CNDNCONTRPARTNERCAT
description: "This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCAT')/$value
semantic_en: "This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?"
semantic_vi: "Condition Contract Partner Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "partner"
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
# I_CNDNCONTRPARTNERCAT

**This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrPartnerCat` | ✓ | |  | `cast(dd07l.domvalue_l as wcb_owner_type )` | `CHAR(2)` | Type of Business Partner for Condition Contract |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCAT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Partner Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrPartnerCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrPartnerCat',
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
    technicalName: 'IWCBCOCOPARTCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrPartnerCat
  as select from dd07l

  composition [0..*] of I_CndnContrPartnerCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wcb_owner_type )                                  as CndnContrPartnerCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                           as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WCB_OWNER_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
