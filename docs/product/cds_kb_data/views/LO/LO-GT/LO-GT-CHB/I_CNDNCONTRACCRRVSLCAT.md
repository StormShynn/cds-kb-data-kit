---
name: I_CNDNCONTRACCRRVSLCAT
description: "This CDS view exposes fixed values of the Condition Contract Purpose field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLCAT')/$value
semantic_en: "This CDS view exposes fixed values of the Condition Contract Purpose field."
semantic_vi: "Condition Contract Accrual Reversal Cat — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "accrual"
  - "reversal"
  - "cat"
  - "cndn"
  - "contr"
  - "accr"
  - "rvsl"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRACCRRVSLCAT

**This CDS view exposes fixed values of the Condition Contract Purpose field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrAccrRvslCat` | ✓ | |  | `cast(dd07l.domvalue_l as wb2_accruals_reversal_type )` | `CHAR(1)` | Accruals Reversal Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLCAT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Accrual Reversal Cat'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrAccrRvslCat',
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
  technicalName: 'IWCBACCRREVCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrAccrRvslCat
  as select from dd07l

  composition [0..*] of I_CndnContrAccrRvslCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wb2_accruals_reversal_type )                                  as CndnContrAccrRvslCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                       as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'WB2_ACCRUALS_REVERSAL_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
