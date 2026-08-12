---
name: I_CNDNCONTRCUSTSETTLMTCATTXT
description: "Cndn Contract Cust Settlmt Cat - Text"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTSETTLMTCATTXT')/$value
semantic_en: "Cndn Contract Cust Settlmt Cat - Text"
semantic_vi: "Cndn Contract Cust Settlmt Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "contract"
  - "cust"
  - "settlmt"
  - "cat"
  - "text"
  - "contr"
  - "language"
  - "name"
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
# I_CNDNCONTRCUSTSETTLMTCATTXT

**Cndn Contract Cust Settlmt Cat - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTSETTLMTCATTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrCustSettlmtCat` | ✓ | |  | `cast(dd07t.domvalue_l as wb2_settlement_type_customer )` | `CHAR(1)` | Settlement Type Customer |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrCustSettlmtCatName` |  | |  | `cast( dd07t.ddtext as wb2_settlement_type_customer_t preserving type )` | `CHAR(60)` | Description of Settlement Type Customer |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrCustSettlmtCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTSETTLMTCATTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTSETTLMTCATTXT')/$value)*

```abap
@EndUserText.label: 'Cndn Contract Cust Settlmt Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrCustSettlmtCat',
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
  technicalName: 'IWCBCUSTSMTCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrCustSettlmtCatTxt
  as select from dd07t

  association        to parent I_CndnContrCustSettlmtCat as _CndnContrCustSettlmtCat on $projection.CndnContrCustSettlmtCat = _CndnContrCustSettlmtCat.CndnContrCustSettlmtCat
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrCustSettlmtCat'
      @ObjectModel.text.element: ['CndnContrCustSettlmtCatName']
  key cast(dd07t.domvalue_l as wb2_settlement_type_customer )                as CndnContrCustSettlmtCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                       as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_settlement_type_customer_t preserving type ) as CndnContrCustSettlmtCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,

      /* Associations */
      _CndnContrCustSettlmtCat,
      _Language
}

where
      dd07t.domname  = 'WB2_SETTLEMENT_TYPE_CUSTOMER'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
