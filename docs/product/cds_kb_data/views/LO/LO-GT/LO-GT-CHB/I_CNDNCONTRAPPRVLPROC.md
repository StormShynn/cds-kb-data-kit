---
name: I_CNDNCONTRAPPRVLPROC
description: "his CDS view exposes fixed values of the Condition Contract Approval Process field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRAPPRVLPROC')/$value
semantic_en: "his CDS view exposes fixed values of the Condition Contract Approval Process field."
semantic_vi: "Condition Contract Approval Process — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "approval"
  - "process"
  - "cndn"
  - "contr"
  - "apprvl"
  - "proc"
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
# I_CNDNCONTRAPPRVLPROC

**his CDS view exposes fixed values of the Condition Contract Approval Process field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRAPPRVLPROC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrApprvlProc` | ✓ | |  | `cast(dd07l.domvalue_l as wcb_approval_process )` | `CHAR(1)` | Approval Process |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRAPPRVLPROC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRAPPRVLPROC')/$value)*

```abap
@EndUserText.label: 'Condition Contract Approval Process'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,  
  representativeKey: 'CndnContrApprvlProc',
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
  technicalName: 'IWCBCCAPPRPROC'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrApprvlProc
  as select from dd07l

  composition [0..*] of I_CndnContrApprvlProcText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wcb_approval_process )         as CndnContrApprvlProc,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                        as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WCB_APPROVAL_PROCESS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
