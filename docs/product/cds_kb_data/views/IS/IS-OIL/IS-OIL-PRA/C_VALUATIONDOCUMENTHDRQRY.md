---
name: C_VALUATIONDOCUMENTHDRQRY
description: "Valuation Document Header Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_VALUATIONDOCUMENTHDRQRY')/$value
semantic_en: "Valuation Document Header Query"
semantic_vi: "Valuation Document Header Query — CDS view tiêu dùng dựa trên I_ValuationDocumentHdr."
keywords:
  - "valuation"
  - "document"
  - "header"
  - "query"
  - "number"
  - "year"
  - "status"
  - "primary"
  - "geogrl"
  - "location"
  - "delivery"
  - "network"
  - "hier"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - document
  - IS-OIL
  - IS-OIL-PRA
---
# C_VALUATIONDOCUMENTHDRQRY

**Valuation Document Header Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_VALUATIONDOCUMENTHDRQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationDocumentNumber` | ✓ | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` | ✓ | |  |  | `NUMC(4)` | Document year |
| `ValuationDocumentStatus` |  | |  |  | `CHAR(2)` | Valuation Document Status |
| `PrimaryGeogrlLocation` |  | | `_DeliveryNetwork` | `PrimaryGeogrlLocation` | `CHAR(2)` | Primary Geographical Location |
| `DeliveryNetworkHier` |  | | `_DeliveryNetwork` | `DeliveryNetworkHier` | `CHAR(15)` | Delivery Network Hierarchy Group |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `AllocationFrequency` |  | |  |  | `CHAR(1)` | Frequency |
| `ValuationDocumentType` |  | |  |  | `CHAR(4)` | Valuation Document Type |
| `ProcessingStatus` |  | |  |  | `CHAR(1)` | Valuation Document Processing Status |
| `LastExecutionDate` |  | |  |  | `DATS(8)` | Run Date |
| `LastExecutionTime` |  | |  |  | `TIMS(6)` | Run time |
| `NumberOfDocuments` |  | |  |  | `INT4(10)` | Number of Documents |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_VALUATIONDOCUMENTHDRQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_VALUATIONDOCUMENTHDRQRY')/$value)*

```abap
@EndUserText.label: 'Valuation Document Header Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVVALNDOCHDRQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_ValuationDocumentHdrQry
//  with parameters
//    @Consumption.hidden: true
//    @Environment.systemField: #SYSTEM_LANGUAGE
//    P_Language : sylangu
  as select from I_ValuationDocumentHdr
{
  key ValuationDocumentNumber,
  key ValuationDocumentYear,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #TEXT
      ValuationDocumentStatus,
//      _ValnDocStatus._Text[1: Language=$parameters.P_Language].ValuationDocumentStatusName,
      
//      _DeliveryNetwork._PrimaryGeogrlLocation._Text[1: Language=$parameters.P_Language].PrimaryGeogrlLocationName,
      @AnalyticsDetails.query.display: #TEXT
      _DeliveryNetwork.PrimaryGeogrlLocation,

//      _DeliveryNetwork._DeliveryNetworkHier._Text[1: Language=$parameters.P_Language].DeliveryNetworkHierName,
      @AnalyticsDetails.query.display: #TEXT
//      _DeliveryNetwork._DeliveryNetworkHier.DeliveryNetworkHier,
      _DeliveryNetwork.DeliveryNetworkHier,

      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 1
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryNetwork,
//      _DeliveryNetwork.DeliveryNetworkName,

      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 2
      SalesDate,

//      _AllocationFrequencyCode._Text[1: Language=$parameters.P_Language].AllocationFrequencyName,
      AllocationFrequency,

//      _ValnDocType._Text[1: Language=$parameters.P_Language].ValuationDocumentTypeName,
      @AnalyticsDetails.query.display: #TEXT
      ValuationDocumentType,

      @AnalyticsDetails.query.axis: #COLUMNS
//      _ValnDocProcessingStatus._Text[1: Language=$parameters.P_Language].ProcessingStatusName,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 3
      @AnalyticsDetails.query.display: #TEXT
      ProcessingStatus,

      @Semantics.businessDate.lastChangedAt
      LastExecutionDate,
      LastExecutionTime,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      NumberOfDocuments

};
```
