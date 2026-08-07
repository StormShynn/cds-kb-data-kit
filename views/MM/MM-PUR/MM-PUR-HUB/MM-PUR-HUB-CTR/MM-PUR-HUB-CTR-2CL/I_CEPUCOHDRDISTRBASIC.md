---
name: I_CEPUCOHDRDISTRBASIC
description: This CDS view provides access to header-level distribution information for central purchase contracts. It exposes distribution keys, target quantities and amounts, organizational data, and partner information for contract distribution scenarios. This CDS view provides the data to answer the following business questions: What are the distribution keys and percentages defined for a central purchase contract? Which organizational units (purchasing organization, company code, plant) are assigned to each distribution? What are the target quantities and amounts allocated across different distribution keys? What is the current distribution status for each contract distribution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value
semantic_en: This CDS view provides access to header-level distribution information for central purchase contracts. It exposes distribution keys, target quantities and amounts, organizational data, and partner information for contract distribution scenarios. This CDS view provides the data to answer the following business questions: What are the distribution keys and percentages defined for a central purchase contract? Which organizational units (purchasing organization, company code, plant) are assigned to each distribution? What are the target quantities and amounts allocated across different distribution keys? What is the current distribution status for each contract distribution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-HUB-CTR-2CL
  - contract
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-HUB
  - MM-PUR-HUB-CTR
  - MM-PUR-HUB-CTR-2CL
  - plan
  - metadata-only
---
# I_CEPUCOHDRDISTRBASIC

**This CDS view provides access to header-level distribution information for central purchase contracts. It exposes distribution keys, target quantities and amounts, organizational data, and partner information for contract distribution scenarios. This CDS view provides the data to answer the following business questions: What are the distribution keys and percentages defined for a central purchase contract? Which organizational units (purchasing organization, company code, plant) are assigned to each distribution? What are the target quantities and amounts allocated across different distribution keys? What is the current distribution status for each contract distribution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `DistributionKey` |  | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `CentralPurchaseContractItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
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
| `CntrlPurContrDistributionPct` |  | |  |  | `DEC(6)` | Distribution Percentage in Central Purchasing Document |
| `TargetQuantity` |  | |  |  | `QUAN(13)` | Target Quantity |
| `TargetAmount` |  | |  |  | `CURR(15)` | Target Value for Header Area per Distribution |
| `ExtContractForPurg` |  | |  |  | `CHAR(10)` | Contract of External System |
| `ExtContractItemForPurg` |  | |  |  | `NUMC(5)` | Contract Item of External System |
| `PurgDocItemDistributionStatus` |  | |  |  | `CHAR(2)` | Distribution Status |
| `TextIsDeleted` |  | |  |  | `CHAR(1)` | Boolean Variable (X = True, - = False, Space = Unknown) |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `DistributionType` |  | |  |  | `CHAR(2)` | Distribution Type for Central Purchase Contract Item |
| `DistrResponseMessageUUID` |  | |  |  | `RAW(16)` | Generic Data Element for GUID Fields (X16) |
| `ProcurementHubSourceSystem` |  | |  |  | `CHAR(10)` | Connected System ID |
| `PurchasingInfoRecordUpdateCode` |  | |  |  | `CHAR(1)` | Indicator: Update Info Record |
| `ProcmtHubCompanyCodeGroupingID` |  | |  |  | `CHAR(3)` | Grouping ID for Company Codes |
| `ExtContractItemDistrForPurg` |  | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `SourceListIsUpdated` |  | |  |  | `CHAR(1)` | Checkbox |
| `SourceListRestriction` |  | |  |  | `CHAR(2)` | Source List Restriction Indicator |
| `MRPSourcingControl` |  | |  |  | `CHAR(1)` | Source List Usage in Materials Planning |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `ShippingInstruction` |  | |  |  | `CHAR(2)` | Shipping Instructions |
