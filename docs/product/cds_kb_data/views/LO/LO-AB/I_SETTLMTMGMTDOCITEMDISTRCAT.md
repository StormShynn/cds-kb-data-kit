---
name: I_SETTLMTMGMTDOCITEMDISTRCAT
description: "This CDS view exposes fixed values of the field Distribution Category for Document Items. The following fixed values have been maintained: \" No Distribution 2 Freight Cost Distribution (Transportation Management) 3 Distribution Based on Accruals (CCM) 4 Distribution Based on Settlement Document (CCM) 9 Customer-Specific Variant (BAdI)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMDISTRCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Distribution Category for Document Items. The following fixed values have been maintained: \" No Distribution 2 Freight Cost Distribution (Transportation Management) 3 Distribution Based on Accruals (CCM) 4 Distribution Based on Settlement Document (CCM) 9 Customer-Specific Variant (BAdI)"
semantic_vi: "Distribution Category for Document Items — CDS view cơ bản dựa trên dd07l."
keywords:
  - "distribution"
  - "category"
  - "for"
  - "document"
  - "items"
  - "settlmt"
  - "mgmt"
  - "item"
  - "distr"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTMGMTDOCITEMDISTRCAT

**This CDS view exposes fixed values of the field Distribution Category for Document Items. The following fixed values have been maintained: " No Distribution 2 Freight Cost Distribution (Transportation Management) 3 Distribution Based on Accruals (CCM) 4 Distribution Based on Settlement Document (CCM) 9 Customer-Specific Variant (BAdI)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMDISTRCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemDistrCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_distribution_active )` | `CHAR(1)` | Distribution Category for Document Items |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMDISTRCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMDISTRCAT')/$value)*

```abap
@EndUserText.label: 'Distribution Category for Document Items'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlmtMgmtDocItemDistrCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtDocItemDistrCat',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #EXTRACTION_DATA_SOURCE,
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
  dataExtraction.enabled: true,
  internalName: #LOCAL, 
  technicalName: 'ISETIDISCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtDocItemDistrCat
  as select from dd07l

  composition [0..*] of I_SettlmtMgmtDocItemDistrCatT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_distribution_active )                                  as SettlmtMgmtDocItemDistrCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                     as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_DISTRIBUTION_ACTIVE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
