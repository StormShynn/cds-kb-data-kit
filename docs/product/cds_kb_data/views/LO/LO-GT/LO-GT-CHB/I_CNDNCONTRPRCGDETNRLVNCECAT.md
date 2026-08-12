---
name: I_CNDNCONTRPRCGDETNRLVNCECAT
description: "This CDS view exposes the values for the Royalty Condition Contracts. The following fixed values have been maintained: '' From Customizing 1 Only if Partner is Business Volume Selection Criterion 2 Always 3 Not Relevant"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRCGDETNRLVNCECAT')/$value
semantic_en: "This CDS view exposes the values for the Royalty Condition Contracts. The following fixed values have been maintained: '' From Customizing 1 Only if Partner is Business Volume Selection Criterion 2 Always 3 Not Relevant"
semantic_vi: "Pricing Determination Relevance Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "pricing"
  - "determination"
  - "relevance"
  - "category"
  - "cndn"
  - "contr"
  - "prcg"
  - "detn"
  - "rlvnce"
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
  - bo:pricingcondition
  - pricing
---
# I_CNDNCONTRPRCGDETNRLVNCECAT

**This CDS view exposes the values for the Royalty Condition Contracts. The following fixed values have been maintained: '' From Customizing 1 Only if Partner is Business Volume Selection Criterion 2 Always 3 Not Relevant**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRCGDETNRLVNCECAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrPrcgDetnRlvnceCat` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_coco_determ_rel_contract )` | `CHAR(1)` | CC Determination Relevance in Pricing (Condition Contract) |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRCGDETNRLVNCECAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRCGDETNRLVNCECAT')/$value)*

```abap
@EndUserText.label: 'Pricing Determination Relevance Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrPrcgDetnRelevanceCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrPrcgDetnRlvnceCat',
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #SQL_DATA_SOURCE,
                           #VALUE_HELP_PROVIDER,
                           #EXTRACTION_DATA_SOURCE ],
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
  technicalName: 'ICCPRCDETRELC'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrPrcgDetnRlvnceCat
  as select from dd07l

  composition [0..*] of I_CndnContrPrcgDetnRlvnceCatT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_coco_determ_rel_contract ) as CndnContrPrcgDetnRlvnceCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                         as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_COCO_DETERM_REL_CONTRACT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
