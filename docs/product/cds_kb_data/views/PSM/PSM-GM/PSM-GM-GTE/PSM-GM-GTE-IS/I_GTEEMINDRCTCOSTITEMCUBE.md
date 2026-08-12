---
name: I_GTEEMINDRCTCOSTITEMCUBE
description: "Grant Indirect Cost Item - Cube"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMINDRCTCOSTITEMCUBE')/$value
semantic_en: "Grant Indirect Cost Item - Cube"
semantic_vi: "Grant Indirect Cost Item - Cube — CDS view giao diện dựa trên P_GteeMIndrctCostPostedItem."
keywords:
  - "grant"
  - "indirect"
  - "cost"
  - "item"
  - "cube"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - bo:purchaseorder
---
# I_GTEEMINDRCTCOSTITEMCUBE

**Grant Indirect Cost Item - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMINDRCTCOSTITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | | `_GteeMIndrctCostPostedItem` | `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | | `_GteeMIndrctCostPostedItem` | `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | | `_GteeMIndrctCostPostedItem` | `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | | `_GteeMIndrctCostPostedItem` | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | | `_GteeMIndrctCostPostedItem` | `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | | `_GteeMIndrctCostPostedItem` | `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` |  | | `_GteeMIndrctCostPostedItem` | `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `GrantID` |  | | `_GteeMIndrctCostPostedItem` | `GrantID` | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | | `_GteeMIndrctCostPostedItem` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantType` |  | | `_GteeMIndrctCostPostedItem` | `GrantType` | `CHAR(2)` | Grant Type |
| `GteeMIndrctCostShrngRule` |  | | `_GteeMIndrctCostPostedItem` | `GteeMIndrctCostShrngRule` | `NUMC(4)` | Rule for Determining Indirect Costs |
| `GrantLifecycleStatus` |  | | `_GteeMIndrctCostPostedItem` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `ValidityStartDate` |  | | `_GteeMIndrctCostPostedItem` | `ValidityStartDate` | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` |  | | `_GteeMIndrctCostPostedItem` | `ValidityEndDate` | `DATS(8)` | Valid-to Date |
| `SponsoredClassType` |  | | `_GteeMIndrctCostPostedItem` | `SponsoredClassType` | `CHAR(1)` | Sponsored Class Type |
| `SponsoredProgram` |  | | `_GteeMIndrctCostPostedItem` | `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | | `_GteeMIndrctCostPostedItem` | `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `Fund` |  | | `_GteeMIndrctCostPostedItem` | `Fund` | `CHAR(10)` | Fund |
| `AccountingDocumentType` |  | | `_GteeMIndrctCostPostedItem` | `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | | `_GteeMIndrctCostPostedItem` | `FinancialAccountType` | `CHAR(1)` | Account Type |
| `ControllingArea` |  | | `_GteeMIndrctCostPostedItem` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FinancialManagementArea` |  | | `_GteeMIndrctCostPostedItem` | `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `GLAccount` |  | | `_GteeMIndrctCostPostedItem` | `GLAccount` | `CHAR(10)` | G/L Account |
| `CostCenter` |  | | `_GteeMIndrctCostPostedItem` | `CostCenter` | `CHAR(10)` | Cost Center |
| `Customer` |  | | `_GteeMIndrctCostPostedItem` | `Customer` | `CHAR(10)` | Customer Number |
| `Supplier` |  | | `_GteeMIndrctCostPostedItem` | `Supplier` | `CHAR(10)` | Supplier |
| `SalesOrganization` |  | | `_GteeMIndrctCostPostedItem` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | | `_GteeMIndrctCostPostedItem` | `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | | `_GteeMIndrctCostPostedItem` | `OrganizationDivision` | `CHAR(2)` | Division |
| `SalesDocument` |  | | `_GteeMIndrctCostPostedItem` | `SalesDocument` | `CHAR(10)` | Sales Document |
| `ServiceDocument` |  | | `_GteeMIndrctCostPostedItem` | `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | | `_GteeMIndrctCostPostedItem` | `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ProfitCenter` |  | | `_GteeMIndrctCostPostedItem` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `AssetClass` |  | | `_GteeMIndrctCostPostedItem` | `AssetClass` | `CHAR(8)` | Asset Class |
| `Plant` |  | | `_GteeMIndrctCostPostedItem` | `Plant` | `CHAR(4)` | Plant |
| `ValuationArea` |  | | `_GteeMIndrctCostPostedItem` | `ValuationArea` | `CHAR(4)` | Valuation Area |
| `BusinessArea` |  | | `_GteeMIndrctCostPostedItem` | `BusinessArea` | `CHAR(4)` | Business Area |
| `OrderID` |  | | `_GteeMIndrctCostPostedItem` | `OrderID` | `CHAR(12)` | Order ID |
| `Segment` |  | | `_GteeMIndrctCostPostedItem` | `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `IndirectCostAmtInCoCodeCrcy` |  | |  | `cast(_GteeMIndrctCostPostedItem.AmountInCompanyCodeCurrency as gm_idc_amt_in_co_code_crcy preserving type )` | `CURR(23)` | Indirect Cost Amount in Company Code Currency |
| `CompanyCodeCurrency` |  | | `_GteeMIndrctCostPostedItem` | `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | | `_GteeMIndrctCostPostedItem` | `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | | `_GteeMIndrctCostPostedItem` | `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `GrantIsNotRelevantGrant` |  | | `_Grant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantAuthznGrp` |  | | `_Grant` | `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `FunctionalArea` |  | | `_GteeMIndrctCostPostedItem` | `FunctionalArea` | `CHAR(16)` | Functional Area |
| `_Grant` | | ✓ | | | | |
| `_GrantStatus` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |
| `_Sponsor` | | ✓ | | | | |
| `_GrantType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Grant` | `I_Grant` | [1..1] |
| `_GrantStatus` | `I_GrantStatus` | [0..1] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMINDRCTCOSTITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMINDRCTCOSTITEMCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGRTIDCCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant Indirect Cost Item - Cube'


@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL 
     },
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}
//I_GteeMIndrctCostItemCube
define view I_GteeMIndrctCostItemCube as select from P_GteeMIndrctCostPostedItem    as _GteeMIndrctCostPostedItem
  association [1..1] to I_Grant                        as _Grant                     on  $projection.GrantID = _Grant.GrantID
  association [0..1] to I_GrantStatus                  as _GrantStatus                on  $projection.GrantLifecycleStatus = _GrantStatus.SystemStatus
  association [0..1] to I_SponsoredClassCore           as _SponsoredClass             on  $projection.SponsoredClass  = _SponsoredClass.SponsoredClass
  association [0..1] to I_SponsoredProgramCore         as _SponsoredProgram           on  $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram
{


key _GteeMIndrctCostPostedItem.Ledger,
key _GteeMIndrctCostPostedItem.SourceLedger,
key _GteeMIndrctCostPostedItem.CompanyCode,
key _GteeMIndrctCostPostedItem.FiscalYear,
key _GteeMIndrctCostPostedItem.AccountingDocument,
key _GteeMIndrctCostPostedItem.LedgerGLLineItem,
_GteeMIndrctCostPostedItem.AccountingDocumentItem,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
_GteeMIndrctCostPostedItem.GrantID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
_GteeMIndrctCostPostedItem.GranteeMgmtSponsor,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantType'
_GteeMIndrctCostPostedItem.GrantType,
_GteeMIndrctCostPostedItem.GteeMIndrctCostShrngRule,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantStatus'
_GteeMIndrctCostPostedItem.GrantLifecycleStatus,
_GteeMIndrctCostPostedItem.ValidityStartDate,
_GteeMIndrctCostPostedItem.ValidityEndDate,
_GteeMIndrctCostPostedItem.SponsoredClassType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredProgram'
_GteeMIndrctCostPostedItem.SponsoredProgram,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredClass'
_GteeMIndrctCostPostedItem.SponsoredClass,
_GteeMIndrctCostPostedItem.Fund,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.AccountingDocumentType,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.FinancialAccountType,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.ControllingArea,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.FinancialManagementArea,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.GLAccount,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.CostCenter,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.Customer,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.Supplier,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.SalesOrganization,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.DistributionChannel,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.OrganizationDivision,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.SalesDocument,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.ServiceDocument,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.ServiceDocumentType,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.ProfitCenter,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.AssetClass,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.Plant,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.ValuationArea,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.BusinessArea,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.OrderID,
    @Consumption.hidden: true
_GteeMIndrctCostPostedItem.Segment,
@DefaultAggregation: #SUM
 @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
cast(_GteeMIndrctCostPostedItem.AmountInCompanyCodeCurrency as gm_idc_amt_in_co_code_crcy preserving type ) as IndirectCostAmtInCoCodeCrcy,
_GteeMIndrctCostPostedItem.CompanyCodeCurrency,
@Semantics.currencyCode: true
_GteeMIndrctCostPostedItem.GlobalCurrency,
@DefaultAggregation: #SUM
 @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
_GteeMIndrctCostPostedItem.AmountInGlobalCurrency,

_Grant.GrantIsNotRelevantGrant,
/* Associations */
_Grant,
_SponsoredClass,
_SponsoredProgram,
_GrantStatus,
_Sponsor,
_GrantType,

     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._AccountingDocumentType,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._CurrentCostCenter,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._CurrentProfitCenter,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._Customer,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._Fund,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._GLAccountInCompanyCode,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._Order,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._SalesDocument,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._ServiceDocument,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem._Supplier,
_Grant.GrantAuthznGrp,
     @Consumption.hidden: true
_GteeMIndrctCostPostedItem.FunctionalArea

} where _Grant.GrantIsNotRelevantGrant <> 'X'
```
