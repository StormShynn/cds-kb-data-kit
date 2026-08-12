---
name: I_GLACCOUNTLINEITEMSTDVH
description: "General Ledger Account Line Item"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMSTDVH')/$value
semantic_en: "General Ledger Account Line Item"
semantic_vi: "G/L Account Line Item — CDS view giao diện dựa trên I_GLAccountLineItem."
keywords:
  - "g/l"
  - "account"
  - "line"
  - "item"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - FI
  - account
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_GLACCOUNTLINEITEMSTDVH

**General Ledger Account Line Item**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMSTDVH')/$value)*

```abap
@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IFIGLALI__VH'
@EndUserText.label: 'G/L Account Line Item'
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'LedgerGLLineItem',
                usageType: { sizeCategory: #XXL,
                             dataClass: #MIXED,
                             serviceQuality: #C },
                supportedCapabilities: [#VALUE_HELP_PROVIDER],
                modelingPattern: #VALUE_HELP_PROVIDER }                             
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view entity I_GLAccountLineItemStdVH as select from I_GLAccountLineItem as I_GLAccountLineItem {
  @ObjectModel.foreignKey.association: '_SourceLedger'
  key I_GLAccountLineItem.SourceLedger,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_GLAccountLineItem.CompanyCode,
  @ObjectModel.foreignKey.association: '_FiscalYear'
  key I_GLAccountLineItem.FiscalYear,
  @ObjectModel.foreignKey.association: '_JournalEntry'
  key I_GLAccountLineItem.AccountingDocument,
  key I_GLAccountLineItem.LedgerGLLineItem,
  @ObjectModel.foreignKey.association: '_Ledger'
  key I_GLAccountLineItem.Ledger,

  @Consumption.hidden: true
  I_GLAccountLineItem.AccountingDocumentType,
  @Consumption.hidden: true
  @ObjectModel.foreignKey.association: '_ControllingArea'
  I_GLAccountLineItem.ControllingArea,
  @Consumption.hidden: true
  @ObjectModel.foreignKey.association: '_CostCenter'
  I_GLAccountLineItem.CostCenter,
  @Consumption.hidden: true
  @ObjectModel.foreignKey.association: '_ProfitCenter'
  I_GLAccountLineItem.ProfitCenter,
  @Consumption.hidden: true
  I_GLAccountLineItem.Customer,
  @Consumption.hidden: true
  I_GLAccountLineItem.MasterFixedAsset,
  @Consumption.hidden: true
  I_GLAccountLineItem.FixedAsset,
  @Consumption.hidden: true
  I_GLAccountLineItem.GLAccount,
  @Consumption.hidden: true
  I_GLAccountLineItem.Supplier,
  @Consumption.hidden: true
  I_GLAccountLineItem.BusinessArea,
  @Consumption.hidden: true
  I_GLAccountLineItem.DistributionChannel,
  @Consumption.hidden: true
  I_GLAccountLineItem.FinancialAccountType,
  @Consumption.hidden: true
  I_GLAccountLineItem.OrderType,
  @Consumption.hidden: true
  I_GLAccountLineItem.OrganizationDivision,
  @Consumption.hidden: true
  I_GLAccountLineItem.Plant,
  @Consumption.hidden: true
  I_GLAccountLineItem.SalesOrderType,
  @Consumption.hidden: true
  I_GLAccountLineItem.SalesOrganization,
  @Consumption.hidden: true
  I_GLAccountLineItem.Segment,
  @Consumption.hidden: true
  I_GLAccountLineItem.ValuationArea,
  @Consumption.hidden: true
  I_GLAccountLineItem.SalesDocument,
  @Consumption.hidden: true
  I_GLAccountLineItem.OrderID,
  @Consumption.hidden: true
  I_GLAccountLineItem.ServiceDocumentType,  
  @Consumption.hidden: true
  I_GLAccountLineItem.ServiceDocument,  
  @Consumption.hidden: true
  I_GLAccountLineItem.AssetClass,    
  @Consumption.hidden: true
  I_GLAccountLineItem.PostingDate,  
  @Consumption.hidden: true
  I_GLAccountLineItem.FunctionalArea,
  @Consumption.hidden: true
  I_GLAccountLineItem.OrderCategory,  
  
  @Consumption.hidden: true
  I_GLAccountLineItem._CostCenter,
  @Consumption.hidden: true
  I_GLAccountLineItem._ProfitCenter,
  
  @Consumption.hidden: true
  I_GLAccountLineItem._SourceLedger,
  @Consumption.hidden: true
  I_GLAccountLineItem._CompanyCode,
  @Consumption.hidden: true
  I_GLAccountLineItem._FiscalYear,
  @Consumption.hidden: true
  I_GLAccountLineItem._JournalEntry,
  @Consumption.hidden: true
  I_GLAccountLineItem._Ledger,
  @Consumption.hidden: true
  I_GLAccountLineItem._AccountingDocumentType,
  @Consumption.hidden: true
  I_GLAccountLineItem._ControllingArea,  
  @Consumption.hidden: true
  I_GLAccountLineItem._CurrentCostCenter,
  @Consumption.hidden: true
  I_GLAccountLineItem._CurrentProfitCenter,
  @Consumption.hidden: true
  I_GLAccountLineItem._Customer,
  @Consumption.hidden: true
  I_GLAccountLineItem._FixedAsset,
  @Consumption.hidden: true
  I_GLAccountLineItem._GLAccountInCompanyCode,
  @Consumption.hidden: true
  I_GLAccountLineItem._Supplier,
  @Consumption.hidden: true
  I_GLAccountLineItem._SalesDocument,
  @Consumption.hidden: true
  I_GLAccountLineItem._ServiceDocument,
  @Consumption.hidden: true
  I_GLAccountLineItem._Order
}
```
