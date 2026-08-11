---
name: I_CNDNCONTRSETTLMTTYPE
description: "This CDS view provides the prerequisites for answering questions about condition contracts settlement types. The condition contract settlement types define the rebate type for: Supplier Contract Settlement Customer Contract Settlement"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPE')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about condition contracts settlement types. The condition contract settlement types define the rebate type for: Supplier Contract Settlement Customer Contract Settlement"
semantic_vi: "Condition Contract Settlement Type — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contract"
  - "settlement"
  - "type"
  - "cndn"
  - "contr"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-GT-CHB
  - contract
  - customer
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
---
# I_CNDNCONTRSETTLMTTYPE

**This CDS view provides the prerequisites for answering questions about condition contracts settlement types. The condition contract settlement types define the rebate type for: Supplier Contract Settlement Customer Contract Settlement**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrSettlmtType` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_rebate_type )` | `CHAR(1)` | Condition Contract Settlement Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPE')/$value)*

```abap
@EndUserText.label: 'Condition Contract Settlement Type'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrSettlementType',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrSettlmtType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
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
  technicalName: 'IWCBCCSMTTYPE'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrSettlmtType
  as select from dd07l

  composition [0..*] of I_CndnContrSettlmtTypeText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_rebate_type ) as CndnContrSettlmtType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                            as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_REBATE_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
