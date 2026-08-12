---
name: I_SUPPLIERSETTLMTDOCCAT
description: "This CDS view exposes fixed values of the field Settlement Document Type - Supplier."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTDOCCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Document Type - Supplier."
semantic_vi: "Supplier Settlement Document Cat — CDS view cơ bản dựa trên dd07l."
keywords:
  - "supplier"
  - "settlement"
  - "document"
  - "cat"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPPLIERSETTLMTDOCCAT

**This CDS view exposes fixed values of the field Settlement Document Type - Supplier.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierSettlmtDocCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_settlement_doctype_v )` | `CHAR(1)` | Settlement Document Type - Supplier |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTDOCCAT')/$value)*

```abap
@EndUserText.label: 'Supplier Settlement Document Cat'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SupplierSettlmtDocCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
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
  technicalName: 'IWLFSSMTDOCCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SupplierSettlmtDocCat
  as select from dd07l
  
  composition [0..*] of I_SupplierSettlmtDocCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_settlement_doctype_v )                                  as SupplierSettlmtDocCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                      as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_SETTLEMENT_DOCTYPE_V'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
