---
name: I_CNDNCONTRPRTLSETTLMTCAT
description: "This CDS view exposes fixed values of the field Rebates: Partial Settlement Type The following fixed values have been maintained: ' ' No Partial Settlement 1 Cumulative 2 Separate"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRTLSETTLMTCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Rebates: Partial Settlement Type The following fixed values have been maintained: ' ' No Partial Settlement 1 Cumulative 2 Separate"
semantic_vi: "Cndn Contr Partial Settlement Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "cndn"
  - "contr"
  - "partial"
  - "settlement"
  - "category"
  - "prtl"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRPRTLSETTLMTCAT

**This CDS view exposes fixed values of the field Rebates: Partial Settlement Type The following fixed values have been maintained: ' ' No Partial Settlement 1 Cumulative 2 Separate**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRTLSETTLMTCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrPrtlSettlmtCat` | ✓ | |  | `cast(dd07l.domvalue_l as wb2_partial_settlement_type )` | `CHAR(1)` | Condition Contract Settlement: Partial Settlement Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRTLSETTLMTCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRTLSETTLMTCAT')/$value)*

```abap
@EndUserText.label: 'Cndn Contr Partial Settlement Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrPrtlSettlmtCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrPrtlSettlmtCat',
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
  technicalName: 'IWCBCCPTLSMTCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrPrtlSettlmtCat
  as select from dd07l

  composition [0..*] of I_CndnContrPrtlSettlmtCatTxt as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wb2_partial_settlement_type )                                  as CndnContrPrtlSettlmtCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                        as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'WB2_PARTIAL_SETTLEMENT_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
