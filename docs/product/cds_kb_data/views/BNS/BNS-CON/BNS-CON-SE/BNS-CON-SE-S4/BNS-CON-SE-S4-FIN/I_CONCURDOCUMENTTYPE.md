---
name: I_CONCURDOCUMENTTYPE
description: "Fix values for Concur Document Type"
app_component: BNS-CON-SE-S4-FIN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCUMENTTYPE')/$value
semantic_en: "Fix values for Concur Document Type"
semantic_vi: "Fix values for Concur Document Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "fix"
  - "values"
  - "for"
  - "concur"
  - "document"
  - "type"
  - "domain"
  - "value"
tags:
  - BNS
  - BNS-CON
  - BNS-CON-SE
  - BNS-CON-SE-S4
  - BNS-CON-SE-S4-FIN
  - bo:companycode
  - component:BNS-CON-SE-S4-FIN
  - document
  - interface-view
---
# I_CONCURDOCUMENTTYPE

**Fix values for Concur Document Type**

| Property | Value |
|---|---|
| App Component | `BNS-CON-SE-S4-FIN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCUMENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConcurDocumentType` | ✓ | |  | `cast( dd07l.domvalue_l as cte_fnd_post_doc_type )` | `CHAR(2)` | Concur Document Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCUMENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCUMENTTYPE')/$value)*

```abap
@Analytics.technicalName: 'ICONCURDOCTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fix values for Concur Document Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ConcurDocumentType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true

define root view entity I_ConcurDocumentType
  as select from dd07l
    composition [0..*] of I_ConcurDocumentTypeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as cte_fnd_post_doc_type ) as ConcurDocumentType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                      as DomainValue,
      _Text
}
where
      dd07l.domname  = 'CTE_FND_POST_DOC_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
