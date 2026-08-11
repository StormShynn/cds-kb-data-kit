---
name: I_CNDNCONTRACCRRVSLSTS
description: "This CDS view exposes fixed values of the Condition Contract Accrual Reversal Status field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLSTS')/$value
semantic_en: "This CDS view exposes fixed values of the Condition Contract Accrual Reversal Status field."
semantic_vi: "Condition Contract Accrual Reversal Sts — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "accrual"
  - "reversal"
  - "sts"
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
# I_CNDNCONTRACCRRVSLSTS

**This CDS view exposes fixed values of the Condition Contract Accrual Reversal Status field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrAccrRvslSts` | ✓ | |  | `cast(dd07l.domvalue_l as wb2_accruals_reversal_status )` | `CHAR(1)` | Status of Accruals Reversal for a Condition Contract |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLSTS')/$value)*

```abap
@EndUserText.label: 'Condition Contract Accrual Reversal Sts'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrAccrRvslSts',
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
  technicalName: 'IWCBACCRREVSTS'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrAccrRvslSts
  as select from dd07l

  composition [0..*] of I_CndnContrAccrRvslStsText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wb2_accruals_reversal_status )                   as CndnContrAccrRvslSts,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                          as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_ACCRUALS_REVERSAL_STATUS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
