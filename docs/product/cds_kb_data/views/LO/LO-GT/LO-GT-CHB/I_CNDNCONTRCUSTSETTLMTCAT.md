---
name: I_CNDNCONTRCUSTSETTLMTCAT
description: "Condition Contract Cust Settlmt Cat"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTSETTLMTCAT')/$value
semantic_en: "Condition Contract Cust Settlmt Cat"
semantic_vi: "Condition Contract Cust Settlmt Cat — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "cust"
  - "settlmt"
  - "cat"
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
---
# I_CNDNCONTRCUSTSETTLMTCAT

**Condition Contract Cust Settlmt Cat**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTSETTLMTCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrCustSettlmtCat` | ✓ | |  | `cast(dd07l.domvalue_l as wb2_settlement_type_customer )` | `CHAR(1)` | Settlement Type Customer |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTSETTLMTCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTSETTLMTCAT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Cust Settlmt Cat'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrCustSettlmtCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrCustSettlmtCat',
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
  technicalName: 'IWCBCUSTSMTCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrCustSettlmtCat
  as select from dd07l

  composition [0..*] of I_CndnContrCustSettlmtCatTxt as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wb2_settlement_type_customer )                                  as CndnContrCustSettlmtCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                         as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_SETTLEMENT_TYPE_CUSTOMER'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
