---
name: C_CNDNCONTRBUSVOLSELCRITERIADP
description: Business Volume Selection Criteria
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRBUSVOLSELCRITERIADP')/$value
semantic_en: Business Volume Selection Criteria
semantic_vi: Business Volume Selection Criteria — CDS view tiêu dùng dựa trên R_CndnContrBusVolSelCriteria.
keywords:
  - business
  - volume
  - selection
  - criteria
  - condition
  - contract
  - cndn
  - contr
  - field
  - combn
  - type
  - group
  - sign
tags:
  - LO
  - component:LO-GT-CHB
  - consumption-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# C_CNDNCONTRBUSVOLSELCRITERIADP

**Business Volume Selection Criteria**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRBUSVOLSELCRITERIADP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  | `CHAR(10)` | Condition Contract |
| `CndnContrBusVolUUID` | ✓ | |  |  | `RAW(16)` | Business Volume Selection UUID |
| `BusVolFieldCombnType` |  | |  |  | `CHAR(4)` | Field Combination for Business Volume Selection |
| `BusVolFldCombnGroup` |  | |  |  | `CHAR(2)` | Field Combination Group for Business Volume Selection in BVB |
| `CndnContrBusVolSign` |  | |  |  | `CHAR(1)` | Status Including / Excluding |
| `BusVolSelectionGroup` |  | |  |  | `CHAR(4)` | Selection Group |
| `CndnContrSupplier` |  | |  |  | `CHAR(10)` | Supplier for Business Volume Selection |
| `CndnContrCustomer` |  | |  |  | `CHAR(10)` | Customer for Business Volume Selection |
| `CndnContrBusVolValidFrom` |  | |  |  | `DATS(8)` | Valid from |
| `CndnContrBusVolValidTo` |  | |  |  | `DATS(8)` | Valid to |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SupplierSubrange` |  | |  |  | `CHAR(6)` | Supplier Subrange |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductType` |  | |  |  | `CHAR(4)` | Product Type |
| `ProdUnivHierarchyNode` |  | |  |  | `CHAR(24)` | Product Hierarchy Node |
| `SalesOrderReason` |  | |  |  | `CHAR(3)` | Sales Document Reason |
| `Manufacturer` |  | |  |  | `CHAR(10)` | Number of a Manufacturer |
| `RoyaltyRecipient` |  | |  |  | `CHAR(10)` | Royalties Recipient |
| `CommissionRecipient` |  | |  |  | `CHAR(10)` | Commission Recipient |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ProductCommissionGroup` |  | |  |  | `CHAR(2)` | Commission Group |
| `PricingReferenceProduct` |  | |  |  | `CHAR(40)` | Pricing Reference Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Sales Billing: Product Sold |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ProductPricingGroup` |  | |  |  | `CHAR(2)` | Product Price Group |
| `SalesVolumeRebateGroup` |  | |  |  | `CHAR(2)` | Sales Volume Rebate Group |
| `BizVolSelCndnContrProcVar` |  | |  |  | `CHAR(4)` | Cndn Contr Process Variant of Business Volume Selection |
| `BizVolSelConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract of Business Volume Selection |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `CndnContrSuplrInvcDlvCostCat` |  | |  |  | `CHAR(1)` | Item Category of Supplier Invoice |
| `CndnContrSemanticCode` |  | |  |  | `NUMC(4)` | Semantic Type |
| `CndnContrSourceBusVolUUID` |  | |  |  | `RAW(16)` | Source Business Volume Selection UUID |
| `CustomerHierarchyRootNode` |  | |  |  | `CHAR(20)` | Customer Hierarchy Root Node ID (Hier ID) |
| `CustomerHierarchyNodeID` |  | |  |  | `CHAR(40)` | Customer Hierarchy Node ID |
| `CustomerHierarchyNodeType` |  | |  |  | `CHAR(30)` | Customer Hierarchy Node Type |
| `_ConditionContract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionContract` | `C_ConditionContractDP` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRBUSVOLSELCRITERIADP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRBUSVOLSELCRITERIADP')/$value)*

```abap
@EndUserText.label: 'Business Volume Selection Criteria'

@VDM.viewType: #CONSUMPTION
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [
    '_ConditionContract'
  ]
}
@Analytics: {
  technicalName: 'CBVSCDP',
  dataExtraction.enabled: true
}
@ObjectModel: {
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'BusVolSelectionCriteria',
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
  usageType: {
    serviceQuality: #A,
    dataClass: #TRANSACTIONAL,
    sizeCategory: #XXL
  }
}
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: false
}

define view entity C_CndnContrBusVolSelCriteriaDP
  as select from R_CndnContrBusVolSelCriteria as BusVolSelectionCriteria
  
  association [1..1] to C_ConditionContractDP as _ConditionContract 
                     on $projection.ConditionContract = _ConditionContract.ConditionContract
  
{
  key ConditionContract,
  key CndnContrBusVolUUID,
      BusVolFieldCombnType,
      BusVolFldCombnGroup,
      CndnContrBusVolSign,
      BusVolSelectionGroup,
      CndnContrSupplier,
      CndnContrCustomer,
      CndnContrBusVolValidFrom,
      CndnContrBusVolValidTo,
      Supplier,
      Customer,
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,
      SalesOrganization,
      DistributionChannel,
      Division,
      SalesOffice,
      SalesGroup,
      Plant,
      SupplierSubrange,
      ProductGroup,
      Product,
      ProductType,
      //      CustomerHierarchy,
      //      ProductHierarchy,
      ProdUnivHierarchyNode,
      //      SalesSpcfcProductGroup1,
      //      SalesSpcfcProductGroup2,
      //      SalesSpcfcProductGroup3,
      //      SalesSpcfcProductGroup4,
      //      SalesSpcfcProductGroup5,
      SalesOrderReason,
      Manufacturer,
      RoyaltyRecipient,
      CommissionRecipient,
//      @Consumption.hidden: true
//      WorkerCommissionRecipient,
      ShipToParty,
      PayerParty,
      //      CndnContrCustomerList,
      //      CndnContrSupplierList,
      //      CndnContrPlantList,
      //      CndnContrBusVolList,
      ServiceDocumentType,
      ServiceDocument,
      ServiceDocumentItem,
      CustomerGroup,
      //      AdditionalCustomerGroup1,
      //      AdditionalCustomerGroup2,
      //      AdditionalCustomerGroup3,
      //      AdditionalCustomerGroup4,
      //      AdditionalCustomerGroup5,
      //      CustomerConditionGroup1,
      //      CustomerConditionGroup2,
      //      CustomerConditionGroup3,
      //      CustomerConditionGroup4,
      //      CustomerConditionGroup5,
      Country,
      Region,
      ProductCommissionGroup,
      PricingReferenceProduct,
      SoldProduct,
      SalesDistrict,
      ProductPricingGroup,
      SalesVolumeRebateGroup,
      BizVolSelCndnContrProcVar,
      BizVolSelConditionContract,
      WBSElementInternalID,
      CndnContrSuplrInvcDlvCostCat,
      CndnContrSemanticCode,
      CndnContrSourceBusVolUUID,

      /* New CustomerHierachy is only valid for Cloud Edition */
      CustomerHierarchyRootNode,
      CustomerHierarchyNodeID,
      CustomerHierarchyNodeType,

      /* Associations */
      _ConditionContract

      //      _CustomerHierarchy,
      //      _Manufacturer,
      //      _RoyaltyRecipient,
      //      _CommissionRecipient,
      //      _Supplier,
      //      _Customer,
      //      @Consumption.hidden: true
      //      _WorkerCommissionRecipient
}
```
