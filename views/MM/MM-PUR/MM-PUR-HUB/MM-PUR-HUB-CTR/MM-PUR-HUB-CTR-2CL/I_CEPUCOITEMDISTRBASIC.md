---
name: I_CEPUCOITEMDISTRBASIC
description: This CDS view provides access to item distribution data for central purchase contracts. It exposes distribution-related information including distribution keys, target quantities and amounts, delivery addresses, and distribution status for contract items. This CDS view provides the data to answer the following business questions: What is the distribution breakdown for a specific central purchase contract item? Which distribution keys are assigned to contract items and what are their target quantities and amounts? What is the current status of item distributions across central purchase contracts? Which item distributions are blocked or deleted? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOITEMDISTRBASIC')/$value
semantic_en: This CDS view provides access to item distribution data for central purchase contracts. It exposes distribution-related information including distribution keys, target quantities and amounts, delivery addresses, and distribution status for contract items. This CDS view provides the data to answer the following business questions: What is the distribution breakdown for a specific central purchase contract item? Which distribution keys are assigned to contract items and what are their target quantities and amounts? What is the current status of item distributions across central purchase contracts? Which item distributions are blocked or deleted? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-HUB-CTR-2CL
  - contract
  - delivery
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-HUB
  - MM-PUR-HUB-CTR
  - MM-PUR-HUB-CTR-2CL
  - metadata-only
---
# I_CEPUCOITEMDISTRBASIC

**This CDS view provides access to item distribution data for central purchase contracts. It exposes distribution-related information including distribution keys, target quantities and amounts, delivery addresses, and distribution status for contract items. This CDS view provides the data to answer the following business questions: What is the distribution breakdown for a specific central purchase contract item? Which distribution keys are assigned to contract items and what are their target quantities and amounts? What is the current status of item distributions across central purchase contracts? Which item distributions are blocked or deleted? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOITEMDISTRBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `CentralPurchaseContractItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `DistributionKey` |  | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurchasingDocumentType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `CntrlPurContrDistributionPct` |  | |  |  | `DEC(6)` | Distribution Percentage in Central Purchasing Document |
| `TargetQuantity` |  | |  |  | `QUAN(13)` | Target Quantity |
| `TargetAmount` |  | |  |  | `CURR(15)` | Target Value for Header Area per Distribution |
| `ExtContractForPurg` |  | |  |  | `CHAR(10)` | Contract of External System |
| `ExtContractItemForPurg` |  | |  |  | `NUMC(5)` | Contract Item of External System |
| `ExtContractItemDistrForPurg` |  | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `PurgDocItemDistributionStatus` |  | |  |  | `CHAR(2)` | Distribution Status |
| `TextIsDeleted` |  | |  |  | `CHAR(1)` | Boolean Variable (X = True, - = False, Space = Unknown) |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `DistributionType` |  | |  |  | `CHAR(2)` | Distribution Type for Central Purchase Contract Item |
| `ContractNetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Purchasing Document (in Document Currency) |
| `DistrResponseMessageUUID` |  | |  |  | `RAW(16)` | Generic Data Element for GUID Fields (X16) |
| `ItemDistributionIsRelevant` |  | |  |  | `CHAR(1)` | Boolean Variable (X = True, - = False, Space = Unknown) |
| `ReferenceHeaderDistributionKey` |  | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `CntrlPurContrItmDistrIsBlocked` |  | |  |  | `CHAR(1)` | Boolean Variable (X = True, - = False, Space = Unknown) |
| `CntrlPurContrDistributionLevel` |  | |  |  | `CHAR(2)` | Distribution Level in Central Purchasing Document |
| `ManualDeliveryAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `ProcmtHubDelivAddressTypeCode` |  | |  |  | `CHAR(2)` | Source of the Delivery Address |
| `ProcurementHubSourceSystem` |  | |  |  | `CHAR(10)` | Connected System ID |
| `ExternalReferenceDocument` |  | |  |  | `CHAR(10)` | Document Number of External Reference Document |
| `ExternalReferenceDocumentItem` |  | |  |  | `NUMC(5)` | Document Item Number of External Reference Document |
| `ExternalRefDocCategory` |  | |  |  | `CHAR(3)` | Category of an external transaction or element |
| `IsExtPurgScenario` |  | |  |  | `CHAR(1)` |  |
| `OutlineAgrmtItmIsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator for Outline Agreement |
| `OutlineAgrmtItmBlockedText` |  | |  |  | `CHAR(1)` | Boolean Variable (X = True, - = False, Space = Unknown) |
| `PurgDocItmBlkRsnCode` |  | |  |  | `CHAR(4)` | Block Reason Code |
| `PurchasingInfoRecordUpdateCode` |  | |  |  | `CHAR(1)` | Indicator: Update Info Record |
| `ProcmtHubPredecessorDocument` |  | |  |  | `CHAR(10)` | Predecessor Purchasing Document Number |
| `ProcmtHubPredecessorDocItem` |  | |  |  | `NUMC(5)` | Predecessor Purchasing Document Item Number |
| `ProcmtHubPredecessorDocCat` |  | |  |  | `CHAR(1)` | Predecessor Purchasing Document Category |
| `ProcmtHubPurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `ProcmtHubPurRequisitionItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Requisition |
| `SourceListIsUpdated` |  | |  |  | `CHAR(1)` | Sourcelist Updated |
| `SourceListRestriction` |  | |  |  | `CHAR(2)` | Source List Restriction Indicator |
| `MRPSourcingControl` |  | |  |  | `CHAR(1)` | Source List Usage in Materials Planning |
| `SourceListChangeConfStatus` |  | |  |  | `CHAR(2)` | Source List Change Status |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `ShippingInstruction` |  | |  |  | `CHAR(2)` | Shipping Instructions |
| `ProcmtHubSubcontractor` |  | |  |  | `CHAR(10)` | Supplier to be Supplied/Who is to Receive Delivery |
| `ProcmtHubSuplrIsSubcontractor` |  | |  |  | `CHAR(1)` | Subcontracting Supplier |
| `ReferenceDeliveryAddressID` |  | |  |  | `CHAR(10)` | Number of delivery address |
| `FormOfAddress` |  | |  |  | `CHAR(4)` | Form-of-Address Key |
| `ProcmtHubBusinessPartnerName1` |  | |  |  | `CHAR(40)` | Name 1 |
| `ProcmtHubBusinessPartnerName2` |  | |  |  | `CHAR(40)` | Name 2 |
| `ProcmtHubBusinessPartnerName3` |  | |  |  | `CHAR(40)` | Name 3 |
| `ProcmtHubBusinessPartnerName4` |  | |  |  | `CHAR(40)` | Name 4 |
| `ProcmtHubStreetName` |  | |  |  | `CHAR(60)` | Street |
| `ProcmtHubHouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `ProcmtHubPostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `ProcmtHubCityName` |  | |  |  | `CHAR(40)` | City |
| `ProcmtHubCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `ProcmtHubRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ProcmtHubPrdcssrDocUUID` |  | |  |  | `RAW(16)` | Predecessor document UUID |
| `ProcmtHubPrdcssrDocItemUUID` |  | |  |  | `RAW(16)` | Predecessor document item UUID |
| `ProcmtHubPrdcssrDocObjType` |  | |  |  | `CHAR(30)` | SAP Business Object Type |
| `ProcmtHubPrdcssrDocObjNodeType` |  | |  |  | `CHAR(30)` | SAP Business Object Node Type |
