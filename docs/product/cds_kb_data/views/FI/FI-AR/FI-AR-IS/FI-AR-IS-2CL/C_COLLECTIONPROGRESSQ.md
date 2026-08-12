---
name: C_COLLECTIONPROGRESSQ
description: "Collection Progress Query"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONPROGRESSQ')/$value
semantic_en: "Collection Progress Query"
semantic_vi: "Collection Progress Query — CDS view tiêu dùng dựa trên I_CollectionProgress."
keywords:
  - "collection"
  - "progress"
  - "query"
  - "group"
  - "segment"
  - "specialist"
  - "name"
tags:
  - FI
  - component:FI-AR-IS-2CL
  - consumption-view
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
---
# C_COLLECTIONPROGRESSQ

**Collection Progress Query**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONPROGRESSQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionGroup` |  | |  |  | `CHAR(10)` | Collection Group |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `CollectionSpecialist` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionSpecialistName` |  | | `_CollectionSpecialist` | `FullName` | `CHAR(80)` | Full Name of Person |
| `CollectionGroupName` |  | |  | `_CollectionGroup._Text[1:Language = :P_Language].CollectionGroupName` | `CHAR(60)` | Name of Collection Group |
| `CollectionSegmentName` |  | |  | `_CollectionSegment._Text[1:Language = :P_Language].CollectionSegmentName` | `CHAR(50)` | Name of Collection Segment |
| `CollectionPriority` |  | |  |  | `NUMC(1)` | Priority of Worklist Item |
| `CollectionPriorityName` |  | |  | `_CollectionPriority._Text[1:Language = :P_Language].CollectionPriorityName` | `CHAR(15)` | Name of Priority of Worklist Items |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `NumberOfWorklistItems` |  | |  |  | `INT4(10)` | Number of Worklist Items |
| `NumberOfCompletedItems` |  | |  |  | `INT4(10)` | Number of Completed Items |
| `NumberOfCustomerReachedItems` |  | |  |  | `INT4(10)` | Number of Customer Reached |
| `PromisedAmount` |  | |  |  | `CURR(23)` | Promised Amount |
| `CollectableAmount` |  | |  |  | `CURR(23)` | Collectable Amount |
| `CollectionProgressRatio` |  | |  | `cast( 1 as farp_collection_progress_ratio )` | `DEC(5)` | Collection Progress Ratio |
| `CollectionProgressRate` |  | |  | `0` | `FLTP(16)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONPROGRESSQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONPROGRESSQ')/$value)*

```abap
@EndUserText.label: 'Collection Progress Query'
@AbapCatalog.sqlViewName: 'CCOLLPROGRESSQ'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics.query: true
@OData.publish: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_CollectionProgressQ
  with parameters
    @Consumption.hidden: true
    //    @Consumption.hidden: false
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,

    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,

    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }
                                      }]
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language         : sylangu
  as select from I_CollectionProgress
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
{
  CollectionGroup,
  CollectionSegment,

  CollectionSpecialist,
  _CollectionSpecialist.FullName                                             as CollectionSpecialistName,

  _CollectionGroup._Text[1:Language = :P_Language].CollectionGroupName       as CollectionGroupName,
  _CollectionSegment._Text[1:Language = :P_Language].CollectionSegmentName   as CollectionSegmentName,

  CollectionPriority,
  _CollectionPriority._Text[1:Language = :P_Language].CollectionPriorityName as CollectionPriorityName,
  //    $parameters.P_DisplayCurrency as DisplayCurrency,
  ExchangeRateType,

  @DefaultAggregation: #SUM
  NumberOfWorklistItems,

  @DefaultAggregation: #SUM
  NumberOfCompletedItems,

  @DefaultAggregation: #SUM
  NumberOfCustomerReachedItems,

  @DefaultAggregation: #SUM
  //    @Semantics.amount.currencyCode: 'DisplayCurrency'
  PromisedAmount,

  @DefaultAggregation: #SUM
  //    @Semantics.amount.currencyCode: 'DisplayCurrency'
  CollectableAmount,

      @EndUserText.label: 'Collection Progress in %'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: '100 * NDIV0( PromisedAmount / CollectableAmount )'
  //    cast( cast( 1 as abap.dec(5,2) ) as farp_collection_progress_ratio ) as CollectionProgressRatio,
      cast( 1 as farp_collection_progress_ratio ) as CollectionProgressRatio,
  //    1.0 as CollectionProgressRatio,

  @EndUserText.label: 'Collection Progress (%)'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0( PromisedAmount / CollectableAmount )'
  //    cast( 1 as farp_collection_progress_rate ) as CollectionProgressRate
  1.0                                                                        as CollectionProgressRate
}
```
