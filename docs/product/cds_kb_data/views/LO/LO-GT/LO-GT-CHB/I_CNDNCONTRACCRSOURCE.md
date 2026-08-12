---
name: I_CNDNCONTRACCRSOURCE
description: "This CDS view provides the prerequisites for answering questions about condition contract accrual source. The following values are maintained: 1 Business Volume 2 Delta Accruals 3 Settlement"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCE')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about condition contract accrual source. The following values are maintained: 1 Business Volume 2 Delta Accruals 3 Settlement"
semantic_vi: "Condition Contract Accrual Source — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "accrual"
  - "source"
  - "cndn"
  - "contr"
  - "accr"
  - "domain"
  - "value"
tags:
  - LO
  - bo:plant
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - bo:salesorder
---
# I_CNDNCONTRACCRSOURCE

**This CDS view provides the prerequisites for answering questions about condition contract accrual source. The following values are maintained: 1 Business Volume 2 Delta Accruals 3 Settlement**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrAccrSource` | ✓ | |  | `cast(dd07l.domvalue_l as wb2_accruals_source )` | `CHAR(1)` | Source of Accruals |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCE')/$value)*

```abap
@EndUserText.label: 'Condition Contract Accrual Source'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrAccrSource',
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
  technicalName: 'IWCBACCRSOURCE'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrAccrSource
  as select from dd07l

  composition [0..*] of I_CndnContrAccrSourceText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wb2_accruals_source )                                  as CndnContrAccrSource,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_ACCRUALS_SOURCE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
