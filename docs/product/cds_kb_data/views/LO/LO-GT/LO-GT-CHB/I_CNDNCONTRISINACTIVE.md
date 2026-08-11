---
name: I_CNDNCONTRISINACTIVE
description: "This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value
semantic_en: "This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?"
semantic_vi: "Condition Contract Inactive State — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "inactive"
  - "state"
  - "cndn"
  - "contr"
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
---
# I_CNDNCONTRISINACTIVE

**This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrIsInactive` | ✓ | |  | `cast(dd07l.domvalue_l as wcb_cc_state )` | `CHAR(1)` | Condition Contract Activation Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value)*

```abap
@EndUserText.label: 'Condition Contract Inactive State'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrIsInactive',
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
  technicalName: 'IWCBCCSTATE'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrIsInactive
  as select from dd07l
  
  composition [0..*] of I_CndnContrIsInactiveText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wcb_cc_state )                                  as CndnContrIsInactive,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                         as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'WCB_CC_STATE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
