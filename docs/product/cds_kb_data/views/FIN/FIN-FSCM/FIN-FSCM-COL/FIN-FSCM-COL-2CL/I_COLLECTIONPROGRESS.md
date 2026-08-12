---
name: I_COLLECTIONPROGRESS
description: "This CDS view provides information about the progress in collection activities within an organization that uses SAP Collections Management. It aggregates and presents data related to collection segments, specialists, groups, and priorities, along with financial metrics such as promised and collected amounts. The view is structured to support analytical processing and reporting, enabling users to assess the effectiveness and efficiency of collection efforts. This CDS view provides the data to answer the following business questions: What is the current status of collection activities across different segments and priorities? How many worklist items have been completed, and how many customers have been reached? What are the promised and collected amounts in the specified display currency? Who are the collection specialists involved, and what are their respective contributions? How do collection efforts vary across different groups and priorities? What is the impact of exchange rate types on the financial metrics of collection activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONPROGRESS')/$value
semantic_en: "This CDS view provides information about the progress in collection activities within an organization that uses SAP Collections Management. It aggregates and presents data related to collection segments, specialists, groups, and priorities, along with financial metrics such as promised and collected amounts. The view is structured to support analytical processing and reporting, enabling users to assess the effectiveness and efficiency of collection efforts. This CDS view provides the data to answer the following business questions: What is the current status of collection activities across different segments and priorities? How many worklist items have been completed, and how many customers have been reached? What are the promised and collected amounts in the specified display currency? Who are the collection specialists involved, and what are their respective contributions? How do collection efforts vary across different groups and priorities? What is the impact of exchange rate types on the financial metrics of collection activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Collection Progress - Cube — CDS view giao diện dựa trên P_Collprogress4."
keywords:
  - "collection"
  - "progress"
  - "cube"
  - "segment"
  - "specialist"
  - "group"
  - "priority"
  - "name"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
---
# I_COLLECTIONPROGRESS

**This CDS view provides information about the progress in collection activities within an organization that uses SAP Collections Management. It aggregates and presents data related to collection segments, specialists, groups, and priorities, along with financial metrics such as promised and collected amounts. The view is structured to support analytical processing and reporting, enabling users to assess the effectiveness and efficiency of collection efforts. This CDS view provides the data to answer the following business questions: What is the current status of collection activities across different segments and priorities? How many worklist items have been completed, and how many customers have been reached? What are the promised and collected amounts in the specified display currency? Who are the collection specialists involved, and what are their respective contributions? How do collection efforts vary across different groups and priorities? What is the impact of exchange rate types on the financial metrics of collection activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONPROGRESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionSegment` | ✓ | |  |  | `CHAR(10)` | Collection Segment |
| `CollectionSpecialist` | ✓ | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionGroup` | ✓ | |  |  | `CHAR(10)` | Collection Group |
| `CollectionPriority` | ✓ | |  |  | `NUMC(1)` | Priority of Worklist Item |
| `CollectionSpecialistName` |  | |  |  | `CHAR(80)` | User Description |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `NumberOfWorklistItems` |  | |  | `cast( NumberOfWorklistItems as farp_numberofworklistitems preserving type )` | `INT4(10)` | Number of Worklist Items |
| `NumberOfCompletedItems` |  | |  | `cast( NumberOfCompletedItems as farp_number_of_completed_items preserving type )` | `INT4(10)` | Number of Completed Items |
| `NumberOfCustomerReachedItems` |  | |  | `cast( NumberOfCustomerReachedItems as farp_number_customer_reached preserving type )` | `INT4(10)` | Number of Customer Reached |
| `PromisedAmount` |  | |  | `cast( PromisedAmount as farp_promisedamt preserving type )` | `CURR(23)` | Promised Amount |
| `CollectableAmount` |  | |  | `cast( Amt_Collected as farp_collectableamt preserving type )` | `CURR(23)` | Collectable Amount |
| `_CollectionPriority` | | ✓ | | | | |
| `_CollectionGroup` | | ✓ | | | | |
| `_CollectionSegment` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CollectionSpecialist` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollectionPriority` | `I_CollectionPriority` | [0..1] |
| `_CollectionGroup` | `I_CollectionGroup` | [0..1] |
| `_CollectionSegment` | `I_CollectionSegment` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CollectionSpecialist` | `I_DisputeCaseContact` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONPROGRESS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONPROGRESS')/$value)*

```abap
@EndUserText.label: 'Collection Progress - Cube'
@AbapCatalog.sqlViewName: 'ICOLLPROGRESS'
@AbapCatalog.preserveKey:true
//@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory : #CUBE
//@VDM.private:false
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
define view I_CollectionProgress
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,

    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,

    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr
  as select from P_Collprogress4
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
  association [0..1] to I_CollectionPriority as _CollectionPriority   on $projection.CollectionPriority = _CollectionPriority.CollectionPriority
  association [0..1] to I_CollectionGroup    as _CollectionGroup      on $projection.CollectionGroup = _CollectionGroup.CollectionGroup
  association [0..1] to I_CollectionSegment  as _CollectionSegment    on $projection.CollectionSegment = _CollectionSegment.CollectionSegment
  association [0..1] to I_Currency           as _Currency             on $projection.DisplayCurrency = _Currency.Currency
  association [0..1] to I_DisputeCaseContact as _CollectionSpecialist on $projection.CollectionSpecialist = _CollectionSpecialist.UserID
{
      @ObjectModel.foreignKey.association: '_CollectionSegment'
  key CollectionSegment,

      @ObjectModel.foreignKey.association: '_CollectionSpecialist'
  key CollectionSpecialist,

      @ObjectModel.foreignKey.association: '_CollectionGroup'
  key CollectionGroup,

      @ObjectModel.foreignKey.association: '_CollectionPriority'
  key CollectionPriority,

      CollectionSpecialistName,

      //    @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode:true
      DisplayCurrency,

      ExchangeRateType,

      @DefaultAggregation: #SUM
      cast( NumberOfWorklistItems as farp_numberofworklistitems preserving type )          as NumberOfWorklistItems,

      @DefaultAggregation: #SUM
      cast( NumberOfCompletedItems as farp_number_of_completed_items preserving type )     as NumberOfCompletedItems,

      @DefaultAggregation: #SUM
      cast( NumberOfCustomerReachedItems as farp_number_customer_reached preserving type ) as NumberOfCustomerReachedItems,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( PromisedAmount as farp_promisedamt preserving type )                           as PromisedAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Amt_Collected as farp_collectableamt preserving type )                         as CollectableAmount,

      _CollectionPriority,
      _CollectionGroup,
      _CollectionSegment,
      _Currency,
      _CollectionSpecialist
}
```
