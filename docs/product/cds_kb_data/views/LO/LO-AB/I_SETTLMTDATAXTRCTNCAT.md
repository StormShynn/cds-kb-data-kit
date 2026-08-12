---
name: I_SETTLMTDATAXTRCTNCAT
description: "This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: \" \" Inactive X Active"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCAT')/$value
semantic_en: "This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: \" \" Inactive X Active"
semantic_vi: "Settlement Data Extraction Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "data"
  - "extraction"
  - "category"
  - "settlmt"
  - "xtrctn"
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
---
# I_SETTLMTDATAXTRCTNCAT

**This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: " " Inactive X Active**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDataXtrctnCat` | ✓ | |  | `cast( dd07l.domvalue_l as bw_4hana )` | `CHAR(1)` | Settlement Document Type is Relevant for BW/4HANA Extraction |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCAT')/$value)*

```abap
@EndUserText.label: 'Settlement Data Extraction Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtDataXtrctnCat',
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
  technicalName: 'ISETDATEXTRCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtDataXtrctnCat
  as select from dd07l

  composition [0..*] of I_SettlmtDataXtrctnCatTxt as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as bw_4hana )              as SettlmtDataXtrctnCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                  as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'BW_4HANA_FLAG'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
