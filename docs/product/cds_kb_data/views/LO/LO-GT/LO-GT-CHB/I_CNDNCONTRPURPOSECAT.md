---
name: I_CNDNCONTRPURPOSECAT
description: "This CDS view exposes fixed values of the field Condition Contract Purpose. The following fixed values have been maintained: '' Nothing P PMR-Integration C CRM-Integration"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPURPOSECAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Condition Contract Purpose. The following fixed values have been maintained: '' Nothing P PMR-Integration C CRM-Integration"
semantic_vi: "Condition Contract Purpose Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "purpose"
  - "category"
  - "cndn"
  - "contr"
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
  - bo:purchaseorder
---
# I_CNDNCONTRPURPOSECAT

**This CDS view exposes fixed values of the field Condition Contract Purpose. The following fixed values have been maintained: '' Nothing P PMR-Integration C CRM-Integration**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPURPOSECAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrPurposeCat` | ✓ | |  | `cast(dd07l.domvalue_l as wcb_cc_purpose )` | `CHAR(2)` | Condition Contract Purpose Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPURPOSECAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPURPOSECAT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Purpose Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrPurposeCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrPurposeCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER,
                           #EXTRACTION_DATA_SOURCE],
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
  technicalName: 'IWCBCCPURPCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrPurposeCat
  as select from dd07l

  composition [0..*] of I_CndnContrPurposeCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wcb_cc_purpose )                                  as CndnContrPurposeCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                           as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WCB_CC_PURPOSE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
