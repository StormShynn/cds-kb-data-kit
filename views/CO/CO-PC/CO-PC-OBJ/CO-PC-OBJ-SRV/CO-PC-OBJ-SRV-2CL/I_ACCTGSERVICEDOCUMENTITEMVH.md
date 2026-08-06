---
name: I_ACCTGSERVICEDOCUMENTITEMVH
description: ACCTGService DocumentUMENTITEMVH
app_component: CO-PC-OBJ-SRV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - value-help
  - service
  - document
  - item-level
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSERVICEDOCUMENTITEMVH

**ACCTGService DocumentUMENTITEMVH**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-SRV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceDocumentType` | `ServiceDocumentType` |
| key `ServiceDocument` | `ServiceDocument` |
| key `ServiceDocumentItem` | `ServiceDocumentItem` |
| `CompanyCode` | `CompanyCode` |
| `ProfitCenter` | `ProfitCenter` |
| `ServiceDocumentTypeName` | `ServiceDocumentTypeName` |
| `ServiceDocumentDescription` | `ServiceDocumentDescription` |
| `ServiceDocItemCategory` | `ServiceDocItemCategory` |
| `ServiceDocItemCategoryName` | `cast( ServiceDocItemCategoryName as fco_srvdoc_item_type_desc preserving type )` |
| `ServiceDocumentItemDescription` | `ServiceDocumentItemDescription` |
| `OriginallyRequestedProduct` | `OriginallyRequestedProduct` |
| `ProductName` | `_ProductText[1: Language = $session.system_language].ProductName` |
| `PostingDate` | `PostingDate` |
| `SrvcOrderConfirmationRelevance` | `SrvcOrderConfirmationRelevance` |
| `_AcctgServiceDocumentTypeVH` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AcctgServiceDocumentTypeVH` | `I_AcctgServiceDocumentTypeVH` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIACSRVDOCITMVH'
@ObjectModel.representativeKey: 'ServiceDocumentItem'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.semanticKey: ['ServiceDocumentType', 'ServiceDocument', 'ServiceDocumentItem']
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked: true
@EndUserText.label: 'Service Document Item ID'

@Metadata.ignorePropagatedAnnotations: true

define view I_AcctgServiceDocumentItemVH 
  as select from P_AcctgServiceDocumentItem as _AcctgServiceDocumentItem
  association [1..1] to I_AcctgServiceDocumentTypeVH as _AcctgServiceDocumentTypeVH on $projection.ServiceDocumentType = _AcctgServiceDocumentTypeVH.ServiceDocumentType
 
{
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelp: '_AcctgServiceDocumentTypeVH'
      @UI.lineItem: [{importance: #HIGH}]
  key ServiceDocumentType,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
  key ServiceDocument,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
  key ServiceDocumentItem,
      //ControllingObject,
      @UI.lineItem: [{importance: #HIGH}]
      CompanyCode,
      //ControllingArea,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
      ProfitCenter,
      //FunctionalArea,
      //ResultAnalysisInternalID,
      //Currency
      
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
      ServiceDocumentTypeName,
      //ProfitCenterName,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
      ServiceDocumentDescription,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ServiceDocItemCategory,
      cast( ServiceDocItemCategoryName as fco_srvdoc_item_type_desc preserving type ) as ServiceDocItemCategoryName,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
      ServiceDocumentItemDescription,
      @UI.lineItem: [{importance: #HIGH}]
      OriginallyRequestedProduct,
      _ProductText[1: Language = $session.system_language].ProductName  as ProductName,
      PostingDate,
      
      @Consumption.hidden: true
      SrvcOrderConfirmationRelevance,
      @Consumption.hidden: true
      _AcctgServiceDocumentTypeVH     
}
```
