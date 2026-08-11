---
name: I_CNDNCONTRSUPLRSETTLMTCATTXT
description: "This CDS view exposes fixed values of the field condition contract supplier settlement category as follows: \" \" As Accounts Payable 1 As Accounts Receivable 2 No Automatic Settlement 3 Only Accruals Reversal 4 Proforma as Accounts Payable 5 Proforma as Accounts Receivable"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRSETTLMTCATTXT')/$value
semantic_en: "This CDS view exposes fixed values of the field condition contract supplier settlement category as follows: \" \" As Accounts Payable 1 As Accounts Receivable 2 No Automatic Settlement 3 Only Accruals Reversal 4 Proforma as Accounts Payable 5 Proforma as Accounts Receivable"
semantic_vi: "Condition Contr Suplr Settlmt Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contr"
  - "suplr"
  - "settlmt"
  - "cat"
  - "text"
  - "cndn"
  - "language"
  - "name"
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
# I_CNDNCONTRSUPLRSETTLMTCATTXT

**This CDS view exposes fixed values of the field condition contract supplier settlement category as follows: " " As Accounts Payable 1 As Accounts Receivable 2 No Automatic Settlement 3 Only Accruals Reversal 4 Proforma as Accounts Payable 5 Proforma as Accounts Receivable**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRSETTLMTCATTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrSuplrSettlmtCat` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_settlement_type_vendor )` | `CHAR(1)` | Settlement Type Supplier |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrSuplrSettlmtCatName` |  | |  | `cast( dd07t.ddtext as wb2_settlement_type_vendor_t preserving type )` | `CHAR(60)` | Description of Settlement Type Supplier |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrSuplrSettlmtCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRSETTLMTCATTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSUPLRSETTLMTCATTXT')/$value)*

```abap
@EndUserText.label: 'Condition Contr Suplr Settlmt Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrSuplrSettlmtCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE],
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
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IWCBSUPLSMTCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrSuplrSettlmtCatTxt
  as select from dd07t

  association        to parent I_CndnContrSuplrSettlmtCat as _CndnContrSuplrSettlmtCat on $projection.CndnContrSuplrSettlmtCat = _CndnContrSuplrSettlmtCat.CndnContrSuplrSettlmtCat
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrSuplrSettlmtCat'
      @ObjectModel.text.element: ['CndnContrSuplrSettlmtCatName']
  key cast( dd07t.domvalue_l as wb2_settlement_type_vendor )               as CndnContrSuplrSettlmtCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                     as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_settlement_type_vendor_t preserving type ) as CndnContrSuplrSettlmtCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                     as DomainValue,

      /* Associations */
      _CndnContrSuplrSettlmtCat,
      _Language
}

where
      dd07t.domname  = 'WB2_SETTLEMENT_TYPE_VENDOR'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
