---
name: I_CNDNDOCWORKERSETTLMTCAT
description: "Cndn Document Worker Settlement Category"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCWORKERSETTLMTCAT')/$value
semantic_en: "Cndn Document Worker Settlement Category"
semantic_vi: "Cndn Document Worker Settlement Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "cndn"
  - "document"
  - "worker"
  - "settlement"
  - "category"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-GT-CHB
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNDOCWORKERSETTLMTCAT

**Cndn Document Worker Settlement Category**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCWORKERSETTLMTCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnDocWorkerSettlmtCat` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_settlement_type_person )` | `CHAR(1)` | Settlement Type Worker |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCWORKERSETTLMTCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCWORKERSETTLMTCAT')/$value)*

```abap
@EndUserText.label: 'Cndn Document Worker Settlement Category'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    sapObjectNodeType.name: 'CndnDocWorkerSettlementCat',
    dataCategory: #VALUE_HELP,
    representativeKey: 'CndnDocWorkerSettlmtCat',
    resultSet.sizeCategory: #XS,
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities:   [ #ANALYTICAL_DIMENSION ,
                               #CDS_MODELING_ASSOCIATION_TARGET,
                               #CDS_MODELING_DATA_SOURCE,
                               #EXTRACTION_DATA_SOURCE,
                               #SEARCHABLE_ENTITY,
                               #SQL_DATA_SOURCE,
                               #VALUE_HELP_PROVIDER ],
    usageType: {
      serviceQuality: #A,
      dataClass:      #META,
      sizeCategory:   #S
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Search.searchable: true
@Consumption.ranked: true
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@Metadata: {
    ignorePropagatedAnnotations: true
    }
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */    
define root view entity I_CndnDocWorkerSettlmtCat 
  as select from dd07l

  composition [0..*] of I_CndnDocWorkerSettlmtCatTxt as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_settlement_type_person ) as CndnDocWorkerSettlmtCat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                       as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_SETTLEMENT_TYPE_PERSON'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
