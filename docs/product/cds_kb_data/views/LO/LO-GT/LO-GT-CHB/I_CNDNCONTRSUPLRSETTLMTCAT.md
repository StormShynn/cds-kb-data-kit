---
name: I_CNDNCONTRSUPLRSETTLMTCAT
description: "This CDS view exposes fixed values of the field condition contract supplier settlement category as follows: \" \" As Accounts Payable 1 As Accounts Receivable 2 No Automatic Settlement 3 Only Accruals Reversal 4 Proforma as Accounts Payable 5 Proforma as Accounts Receivable"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRSETTLMTCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field condition contract supplier settlement category as follows: \" \" As Accounts Payable 1 As Accounts Receivable 2 No Automatic Settlement 3 Only Accruals Reversal 4 Proforma as Accounts Payable 5 Proforma as Accounts Receivable"
semantic_vi: "Condition Contract Supplier Settlmt Cat — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "supplier"
  - "settlmt"
  - "cat"
  - "cndn"
  - "contr"
  - "suplr"
  - "domain"
  - "value"
tags:
  - LO
  - account
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
---
# I_CNDNCONTRSUPLRSETTLMTCAT

**This CDS view exposes fixed values of the field condition contract supplier settlement category as follows: " " As Accounts Payable 1 As Accounts Receivable 2 No Automatic Settlement 3 Only Accruals Reversal 4 Proforma as Accounts Payable 5 Proforma as Accounts Receivable**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRSETTLMTCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrSuplrSettlmtCat` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_settlement_type_vendor )` | `CHAR(1)` | Settlement Type Supplier |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRSETTLMTCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRSETTLMTCAT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Supplier Settlmt Cat'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrSuplrSettlmtCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrSuplrSettlmtCat',
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
  technicalName: 'IWCBSUPLSMTCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrSuplrSettlmtCat
  as select from dd07l

  composition [0..*] of I_CndnContrSuplrSettlmtCatTxt as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_settlement_type_vendor )                                   as CndnContrSuplrSettlmtCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                         as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_SETTLEMENT_TYPE_VENDOR'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
