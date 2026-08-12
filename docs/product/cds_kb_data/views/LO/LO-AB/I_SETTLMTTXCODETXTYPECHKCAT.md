---
name: I_SETTLMTTXCODETXTYPECHKCAT
description: "This view displays parameter controls whether and how the tax type for the tax code should be checked. The following fixed values have been maintained: Input Tax (Supplier) / Output Tax (Customer) 1 No Check (All Tax Types Allowed)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCAT')/$value
semantic_en: "This view displays parameter controls whether and how the tax type for the tax code should be checked. The following fixed values have been maintained: Input Tax (Supplier) / Output Tax (Customer) 1 No Check (All Tax Types Allowed)"
semantic_vi: "Tax Code Tax Type Check Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "tax"
  - "code"
  - "type"
  - "check"
  - "category"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SETTLMTTXCODETXTYPECHKCAT

**This view displays parameter controls whether and how the tax type for the tax code should be checked. The following fixed values have been maintained: Input Tax (Supplier) / Output Tax (Customer) 1 No Check (All Tax Types Allowed)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtTxCodeTxTypeChkCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_taxcode_allowed )` | `CHAR(1)` | Control of Tax Type Check for Tax Codes |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCAT')/$value)*

```abap
@EndUserText.label: 'Tax Code Tax Type Check Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlmtTxCodeTxTypeChkCategory', 
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtTxCodeTxTypeChkCat',
  modelingPattern: #ANALYTICAL_DIMENSION,
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
  technicalName: 'ITAXCODEALLWDC'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_SettlmtTxCodeTxTypeChkCat
  as select from dd07l

  composition [0..*] of I_SettlmtTxCodeTxTypeChkCatT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_taxcode_allowed )                                  as SettlmtTxCodeTxTypeChkCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                 as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_TAXCODE_ALLOWED'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
