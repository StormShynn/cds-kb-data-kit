---
name: I_PARKEDOPLACCTGDOCITEM
description: "Parkedoplacctgdocitem"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_PARKEDOPLACCTGDOCITEM

**Parkedoplacctgdocitem**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceCompanyCode` | ✓ | |  |  |  |  |
| `SourceFiscalYear` | ✓ | |  |  |  |  |
| `SourceAccountingDocument` | ✓ | |  |  |  |  |
| `SourceAccountingDocumentItem` | ✓ | |  |  |  |  |
| `AccountAssignmentNumber` |  | |  |  |  |  |
| `AssetContract` |  | |  |  |  |  |
| `AssetTransactionType` |  | |  |  |  |  |
| `AssetValueDate` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `BPBankAccountInternalID` |  | |  |  |  |  |
| `BranchAccount` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `BusinessPlace` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount1DueDate` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `CashDiscount2DueDate` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `CashFlowType` |  | |  |  |  |  |
| `CommitmentItemShortID` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CompanyCodeCurrencyDetnMethod` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `CostOriginGroup` |  | |  |  |  |  |
| `CreditControlArea` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `DataExchangeInstruction1` |  | |  |  |  |  |
| `DataExchangeInstruction2` |  | |  |  |  |  |
| `DataExchangeInstruction3` |  | |  |  |  |  |
| `DataExchangeInstruction4` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `DocumentItemText` |  | |  |  |  |  |
| `DueCalculationBaseDate` |  | |  |  |  |  |
| `DunningArea` |  | |  |  |  |  |
| `DunningBlockingReason` |  | |  |  |  |  |
| `DunningKey` |  | |  |  |  |  |
| `DunningLevel` |  | |  |  |  |  |
| `FinancialAccountType` |  | |  |  |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `FixedCashDiscount` |  | |  |  |  |  |
| `FollowOnDocumentType` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `FundedProgram` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `HouseBank` |  | |  |  |  |  |
| `HouseBankAccount` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `InvoiceItemReference` |  | |  |  |  |  |
| `InvoiceList` |  | |  |  |  |  |
| `InvoiceReference` |  | |  |  |  |  |
| `InvoiceReferenceFiscalYear` |  | |  |  |  |  |
| `IsEUTriangularDeal` |  | |  |  |  |  |
| `IsNotCashDiscountLiable` |  | |  |  |  |  |
| `IsSalesRelated` |  | |  |  |  |  |
| `JointVenture` |  | |  |  |  |  |
| `JointVentureCostRecoveryCode` |  | |  |  |  |  |
| `JointVentureEquityGroup` |  | |  |  |  |  |
| `JointVentureEquityType` |  | |  |  |  |  |
| `LastDunningDate` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `MaterialPriceControl` |  | |  |  |  |  |
| `MaterialPriceUnitQty` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `NetDueDate` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderInternalBillOfOperations` |  | |  |  |  |  |
| `PartnerBudgetPeriod` |  | |  |  |  |  |
| `PartnerBusinessArea` |  | |  |  |  |  |
| `PartnerFund` |  | |  |  |  |  |
| `PartnerGrant` |  | |  |  |  |  |
| `PartnerSegment` |  | |  |  |  |  |
| `PaymentBlockingReason` |  | |  |  |  |  |
| `PaymentCardPaymentSettlement` |  | |  |  |  |  |
| `PaymentDifferenceReason` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `PaymentMethodSupplement` |  | |  |  |  |  |
| `PaymentReference` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `PlanningLevel` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `PostingKey` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `REInternalFinNumber` |  | |  |  |  |  |
| `Reference1IDByBusinessPartner` |  | |  |  |  |  |
| `Reference2IDByBusinessPartner` |  | |  |  |  |  |
| `Reference3IDByBusinessPartner` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `SpecialGLAccountAssignment` |  | |  |  |  |  |
| `SpecialGLCode` |  | |  |  |  |  |
| `SpecialGLTransactionType` |  | |  |  |  |  |
| `StateCentralBankPaymentReason` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplyingCountry` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `TaxSection` |  | |  |  |  |  |
| `TaxType` |  | |  |  |  |  |
| `TreasuryContractType` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `ValueDate` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WithholdingTaxCode` |  | |  |  |  |  |
| `AccountingDocumentCategory` |  | | `_ParkedOplAcctgDocument` | `AccountingDocumentCategory` |  |  |
| `AccountingDocumentType` |  | | `_ParkedOplAcctgDocument` | `AccountingDocumentType` |  |  |
| `PartnerCompany` |  | | `_ParkedOplAcctgDocument` | `PartnerCompany` |  |  |
| `FiscalPeriod` |  | | `_ParkedOplAcctgDocument` | `FiscalPeriod` |  |  |
| `DocumentDate` |  | | `_ParkedOplAcctgDocument` | `DocumentDate` |  |  |
| `PostingDate` |  | | `_ParkedOplAcctgDocument` | `PostingDate` |  |  |
| `LedgerGroup` |  | | `_ParkedOplAcctgDocument` | `LedgerGroup` |  |  |
| `ChartOfAccounts` |  | | `_CompanyCode` | `ChartOfAccounts` |  |  |
| `ControllingArea` |  | | `_CompanyCode` | `ControllingArea` |  |  |
| `FiscalYearVariant` |  | | `_CompanyCode` | `FiscalYearVariant` |  |  |
| `FinancialManagementArea` |  | | `_CompanyCode` | `FinancialManagementArea` |  |  |
| `AdditionalCurrency1` |  | | `_ParkedOplAcctgDocument` | `AdditionalCurrency1` |  |  |
| `AdditionalCurrency2` |  | | `_ParkedOplAcctgDocument` | `AdditionalCurrency2` |  |  |
| `CompanyCodeCurrency` |  | | `_ParkedOplAcctgDocument` | `CompanyCodeCurrency` |  |  |
| `PaymentCurrency` |  | |  |  |  |  |
| `TransactionCurrency` |  | | `_ParkedOplAcctgDocument` | `TransactionCurrency` |  |  |
| `AmountInAdditionalCurrency1` |  | |  |  |  |  |
| `AmountInAdditionalCurrency2` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInPaymentCurrency` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |
| `CashDiscountAmount` |  | |  |  |  |  |
| `CashDiscountAmtInCoCodeCrcy` |  | |  |  |  |  |
| `CashDiscountBaseAmount` |  | |  |  |  |  |
| `InvoiceAmountInFrgnCurrency` |  | |  |  |  |  |
| `InvoiceAmtInCoCodeCrcy` |  | |  |  |  |  |
| `PlannedAmtInTransactionCrcy` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  |  |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  |  |  |  |
| `TaxBaseAmountInTransCrcy` |  | |  |  |  |  |
| `WithholdingTaxAmount` |  | |  |  |  |  |
| `WithholdingTaxBaseAmount` |  | |  |  |  |  |
| `WithholdingTaxExemptionAmt` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_SourceCompanyCode` | | ✓ | | | | |
| `_SourceFiscalYear` | | ✓ | | | | |
| `_ParkedOplAcctgDocument` | | ✓ | | | | |
| `_SourceParkedOplAcctgDocument` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_TaxType` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_SupplyingCountry` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_PaymentDifferenceReason` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_AdditionalCurrency1` | | ✓ | | | | |
| `_AdditionalCurrency2` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_PaymentBlockingReason` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_SourceCompanyCode` | `I_CompanyCode` | [0..1] |
| `_SourceFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ParkedOplAcctgDocument` | `I_ParkedOplAcctgDocument` | [0..1] |
| `_SourceParkedOplAcctgDocument` | `I_ParkedOplAcctgDocument` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_TaxType` | `I_TaxType` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_SupplyingCountry` | `I_Country` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PaymentDifferenceReason` | `I_PaymentDifferenceReason` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_PaymentCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_PurchasingDocument` | `I_PurchasingDocument` | [0..1] |
| `_PurchasingDocumentItem` | `I_PurchasingDocumentItem` | [0..1] |
| `_ProjectNetwork` | `I_ProjectNetwork` | [0..1] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_BusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_PartnerBudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_FinancialTransactionType` | `I_FinancialTransactionType` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_PartnerFund` | `I_Fund` | [0..1] |
| `_FundsCenter` | `I_FundsCenter` | [0..*] |
| `_Grant` | `I_Grant` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_PaymentBlockingReason` | `I_PaymentBlockingReason` | [0..1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |

## Source Code

```abap
//@AbapCatalog.viewEnhancementCategory: [#NONE]

@EndUserText.label: 'Parked Operational Acctg Document Item'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics.internalName: #LOCAL
@Analytics: { dataCategory: #CUBE }
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions:true
//@ObjectModel.representativeKey: 'SourceAccountingDocumentItem'
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #D

@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

define view entity I_ParkedOplAcctgDocItem as select from P_ParkedOplAcctgDocItem 

association [1..1] to I_CompanyCode                as _CompanyCode                    on $projection.CompanyCode                = _CompanyCode.CompanyCode
association [0..1] to I_CompanyCode                as _SourceCompanyCode              on $projection.SourceCompanyCode          = _SourceCompanyCode.CompanyCode
association [0..1] to I_FiscalYearForCompanyCode   as _SourceFiscalYear               on $projection.SourceFiscalYear           = _SourceFiscalYear.FiscalYear
                                                                                     and $projection.SourceCompanyCode          = _SourceFiscalYear.CompanyCode
association [0..1] to I_ParkedOplAcctgDocument     as _ParkedOplAcctgDocument         on $projection.SourceCompanyCode          = _ParkedOplAcctgDocument.SourceCompanyCode
                                                                                     and $projection.CompanyCode                = _ParkedOplAcctgDocument.CompanyCode
                                                                                     and $projection.SourceAccountingDocument   = _ParkedOplAcctgDocument.SourceAccountingDocument
                                                                                     and $projection.SourceFiscalYear           = _ParkedOplAcctgDocument.SourceFiscalYear
association [0..1] to I_ParkedOplAcctgDocument     as _SourceParkedOplAcctgDocument   on $projection.SourceCompanyCode          = _SourceParkedOplAcctgDocument.SourceCompanyCode
                                                                                     and $projection.SourceCompanyCode          = _SourceParkedOplAcctgDocument.CompanyCode
                                                                                     and $projection.SourceAccountingDocument   = _SourceParkedOplAcctgDocument.SourceAccountingDocument
                                                                                     and $projection.SourceFiscalYear           = _SourceParkedOplAcctgDocument.SourceFiscalYear

association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts     on $projection.ChartOfAccounts            = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                     and $projection.GLAccount                  = _GLAccountInChartOfAccounts.GLAccount
association [0..1] to I_GLAccountInCompanyCode     as _GLAccountInCompanyCode         on $projection.CompanyCode                = _GLAccountInCompanyCode.CompanyCode
                                                                                     and $projection.GLAccount                  = _GLAccountInCompanyCode.GLAccount
association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts                on $projection.ChartOfAccounts            = _ChartOfAccounts.ChartOfAccounts
association [0..1] to I_Customer                   as _Customer                       on $projection.Customer                   = _Customer.Customer
association [0..1] to I_CustomerCompany            as _CustomerCompany                on $projection.Customer                   = _CustomerCompany.Customer
                                                                                     and $projection.CompanyCode                = _CustomerCompany.CompanyCode   
association [0..1] to I_Supplier                   as _Supplier                       on $projection.Supplier                   = _Supplier.Supplier
association [0..1] to I_SupplierCompany            as _SupplierCompany                on $projection.Supplier                   = _SupplierCompany.Supplier
                                                                                     and $projection.CompanyCode                = _SupplierCompany.CompanyCode 
association [0..1] to I_PostingKey                 as _PostingKey                     on $projection.PostingKey                 = _PostingKey.PostingKey
association [0..1] to I_FinancialAccountType       as _FinancialAccountType           on $projection.FinancialAccountType       = _FinancialAccountType.FinancialAccountType
association [0..1] to I_DebitCreditCode            as _DebitCreditCode                on $projection.DebitCreditCode            = _DebitCreditCode.DebitCreditCode
association [0..1] to I_BusinessArea               as _BusinessArea                   on $projection.BusinessArea               = _BusinessArea.BusinessArea
association [0..1] to I_BusinessArea               as _PartnerBusinessArea            on $projection.PartnerBusinessArea        = _PartnerBusinessArea.BusinessArea
association [0..1] to I_TaxType                    as _TaxType                        on $projection.TaxType                    = _TaxType.TaxType
association [0..1] to I_Partnercompany             as _PartnerCompany                 on $projection.PartnerCompany             = _PartnerCompany.PartnerCompany
association [0..1] to I_ControllingArea            as _ControllingArea                on $projection.ControllingArea            = _ControllingArea.ControllingArea
association [0..*] to I_ProfitCenter               as _ProfitCenter                   on $projection.ControllingArea            = _ProfitCenter.ControllingArea  
                                                                                     and $projection.ProfitCenter               = _ProfitCenter.ProfitCenter
association [0..1] to I_ProfitCenter               as _CurrentProfitCenter            on $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                     and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                     and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                     and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date                                                                             
association [0..*] to I_CostCenter                 as _CostCenter                     on $projection.ControllingArea            = _CostCenter.ControllingArea  
                                                                                     and $projection.CostCenter                 = _CostCenter.CostCenter
association [0..1] to I_CostCenter                 as _CurrentCostCenter              on $projection.ControllingArea            = _CurrentCostCenter.ControllingArea
                                                                                     and $projection.CostCenter                 = _CurrentCostCenter.CostCenter
                                                                                     and _CurrentCostCenter.ValidityStartDate   <= $session.system_date
                                                                                     and _CurrentCostCenter.ValidityEndDate     >= $session.system_date                                                                             
association [0..1] to I_Country                    as _SupplyingCountry               on $projection.SupplyingCountry           = _SupplyingCountry.Country                                        
association [0..1] to I_Product                    as _Product                        on $projection.Product                    = _Product.Product
association [0..1] to I_Plant                      as _Plant                          on $projection.Plant                      = _Plant.Plant  
association [0..1] to I_UnitOfMeasure              as _BaseUnit                       on $projection.BaseUnit                   = _BaseUnit.UnitOfMeasure
association [0..1] to I_PaymentDifferenceReason    as _PaymentDifferenceReason        on $projection.PaymentDifferenceReason    = _PaymentDifferenceReason.PaymentDifferenceReason 
                                                                                     and $projection.CompanyCode                = _PaymentDifferenceReason.CompanyCode
association [0..1] to I_Segment                    as _Segment                        on $projection.Segment                    = _Segment.Segment                                                                                                                          
association [0..1] to I_Segment                    as _PartnerSegment                 on $projection.PartnerSegment             = _PartnerSegment.Segment 

association [0..1] to I_AccountingDocumentType     as _AccountingDocumentType         on $projection.AccountingDocumentType     = _AccountingDocumentType.AccountingDocumentType

association [0..1] to I_Currency                   as _PaymentCurrency                on $projection.PaymentCurrency            = _PaymentCurrency.Currency 
association [0..1] to I_Currency                   as _TransactionCurrency            on $projection.transactioncurrency        = _TransactionCurrency.Currency 
association [0..1] to I_Currency                   as _CompanyCodeCurrency            on $projection.companycodecurrency        = _CompanyCodeCurrency.Currency
association [0..1] to I_Currency                   as _AdditionalCurrency1            on $projection.additionalcurrency1        = _AdditionalCurrency1.Currency 
association [0..1] to I_Currency                   as _AdditionalCurrency2            on $projection.additionalcurrency2        = _AdditionalCurrency2.Currency

association [0..1] to I_AccountingDocumentCategory as _AccountingDocumentCategory     on $projection.AccountingDocumentCategory = _AccountingDocumentCategory.AccountingDocumentCategory

//association [0..*] to I_TaxCode                  as _TaxCode                        on $projection.TaxCode                    = _TaxCode.TaxCode
//above solution for association to I_TaxCode not supported. TaxCalculationProcedure required as additional key field to make TaxCode unique
//association[0..1] to I_TaxCode                   as _TaxCode                        on $projection.TaxCode = _TaxCode.TaxCode and
//                                                                                       $projection._CompanyCode._Country.TaxCalculationProcedure = _TaxCode.TaxCalculationProcedure   
association [0..1] to I_Order                      as _Order                          on $projection.OrderID                    = _Order.OrderID
association [0..1] to I_MasterFixedAsset           as _MasterFixedAsset               on $projection.CompanyCode                = _MasterFixedAsset.CompanyCode 
                                                                                     and $projection.MasterFixedAsset           = _MasterFixedAsset.MasterFixedAsset
association [0..1] to I_FixedAsset                 as _FixedAsset                     on $projection.CompanyCode                = _FixedAsset.CompanyCode 
                                                                                     and $projection.MasterFixedAsset           = _FixedAsset.MasterFixedAsset 
                                                                                     and $projection.FixedAsset                 = _FixedAsset.FixedAsset
association [0..1] to I_AssetTransactionType       as _AssetTransactionType           on $projection.AssetTransactionType       = _AssetTransactionType.AssetTransactionType                                                                                                                                                                                                                                                            
association [0..1] to I_PurchasingDocument         as _PurchasingDocument             on $projection.PurchasingDocument         = _PurchasingDocument.PurchasingDocument 
association [0..1] to I_PurchasingDocumentItem     as _PurchasingDocumentItem         on $projection.PurchasingDocument         = _PurchasingDocumentItem.PurchasingDocument   
                                                                                     and $projection.PurchasingDocumentItem     = _PurchasingDocumentItem.PurchasingDocumentItem
//association [0..1] to I_Purreqvaluationarea        as _ValuationArea                  on $projection.ValuationArea              = _ValuationArea.ValuationArea
association [0..1] to I_ProjectNetwork             as _ProjectNetwork                 on $projection.ProjectNetwork             = _ProjectNetwork.ProjectNetwork
//association [0..*] to I_CostOriginGroup          as _CostOriginGroup                on $projection.ControllingArea            = _CostOriginGroup.ControllingArea                                                                                                                                                                                                                                                             
// not contained in view                                                                 $projection.CostOriginType             = _CostOriginGroup.CostOriginType and                                                                                                                                                                                                                                                           
//                                                                                   and $projection.CostOriginGroup            = _CostOriginGroup.CostOriginGroup                                                                                                                                                                                                                                                            
association [0..*] to I_CostCenterActivityType     as _CostCtrActivityType            on $projection.ControllingArea            = _CostCtrActivityType.ControllingArea      
                                                                                     and $projection.CostCtrActivityType        = _CostCtrActivityType.CostCtrActivityType
association [0..1] to I_BusinessProcess            as _BusinessProcess                on $projection.ControllingArea            = _BusinessProcess.ControllingArea                                                                                         
                                                                                     and $projection.BusinessProcess            = _BusinessProcess.BusinessProcess
association [0..1] to I_BudgetPeriod               as _BudgetPeriod                   on $projection.BudgetPeriod               = _BudgetPeriod.BudgetPeriod  
association [0..1] to I_BudgetPeriod               as _PartnerBudgetPeriod            on $projection.PartnerBudgetPeriod        = _PartnerBudgetPeriod.BudgetPeriod  
//association [0..1] to I_FiscalCalendarDate         as _FiscalCalendarDate             on $projection.FiscalYearVariant          = _FiscalCalendarDate.FiscalYearVariant 
//                                                                                     and $projection.postingdate                = _FiscalCalendarDate.CalendarDate
association [0..1] to I_FinancialTransactionType   as _FinancialTransactionType       on $projection.FinancialTransactionType   = _FinancialTransactionType.FinancialTransactionType
association [0..1] to I_FinancialManagementArea    as _FinancialManagementArea        on $projection.FinancialManagementArea    = _FinancialManagementArea.FinancialManagementArea
association [0..1] to I_Fund                       as _Fund                           on $projection.FinancialManagementArea    = _Fund.FinancialManagementArea
                                                                                     and $projection.Fund                       = _Fund.Fund
association [0..1] to I_Fund                       as _PartnerFund                    on $projection.FinancialManagementArea    = _PartnerFund.FinancialManagementArea
                                                                                     and $projection.PartnerFund                = _PartnerFund.Fund                                                                                    
association [0..*] to I_FundsCenter                as _FundsCenter                    on $projection.FinancialManagementArea    = _FundsCenter.FinancialManagementArea
                                                                                     and $projection.FundsCenter                = _FundsCenter.FundsCenter     
association [0..1] to I_Grant                      as _Grant                          on $projection.GrantID                    = _Grant.GrantID   
association [0..1] to I_Grant                      as _PartnerGrant                   on $projection.PartnerGrant               = _PartnerGrant.GrantID                                                                                    
association [0..1] to I_Housebank                  as _HouseBank                      on $projection.CompanyCode                = _HouseBank.CompanyCode
                                                                                     and $projection.HouseBank                  = _HouseBank.HouseBank
//association [0..1] to I_HouseBankAccount           as _HouseBankAccount               on $projection.CompanyCode                = _HouseBankAccount.CompanyCode
//                                                                                     and $projection.HouseBank                  = _HouseBankAccount.HouseBank
//                                                                                     and $projection.HouseBankAccount           = _HouseBankAccount.HouseBankAccount                                                                                    
association [0..1] to I_InventoryValuationType     as _InventoryValuationType         on $projection.InventoryValuationType     = _InventoryValuationType.InventoryValuationType 
association [0..1] to I_PaymentBlockingReason      as _PaymentBlockingReason          on $projection.PaymentBlockingReason      = _PaymentBlockingReason.PaymentBlockingReason 

association [0..1] to I_PersonWorkAgreement_1      as _PersonWorkAgreement_1          on $projection.PersonnelNumber            = _PersonWorkAgreement_1.PersonWorkAgreement

association [0..1] to I_SpecialGLCode              as _SpecialGLCode                  on $projection.SpecialGLCode              = _SpecialGLCode.SpecialGLCode
                                                                                     and $projection.FinancialAccountType       = _SpecialGLCode.FinancialAccountType                                                                                                                                                                                                                                                                                                                                 
association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData            on $projection.WBSElementInternalID       = _WBSElementBasicData.WBSElementInternalID  

association [0..1] to I_FunctionalArea             as _FunctionalArea                 on $projection.FunctionalArea             = _FunctionalArea.FunctionalArea

//association [0..1] to I_REObjectByIntFinNumber   as _REObjectByIntFinNumber         on $projection.REInternalFinNumber        = _REObjectByIntFinNumber.REInternalFinNumber

{ 

@ObjectModel.foreignKey.association: '_SourceCompanyCode'
key P_ParkedOplAcctgDocItem.SourceCompanyCode,     
@ObjectModel.foreignKey.association: '_SourceFiscalYear'
key P_ParkedOplAcctgDocItem.SourceFiscalYear,
@ObjectModel.foreignKey.association: '_ParkedOplAcctgDocument'
key P_ParkedOplAcctgDocItem.SourceAccountingDocument, 
key P_ParkedOplAcctgDocItem.SourceAccountingDocumentItem, 

P_ParkedOplAcctgDocItem.AccountAssignmentNumber, 
P_ParkedOplAcctgDocItem.AssetContract, 
@ObjectModel.foreignKey.association: '_AssetTransactionType'
P_ParkedOplAcctgDocItem.AssetTransactionType, 
P_ParkedOplAcctgDocItem.AssetValueDate, 
P_ParkedOplAcctgDocItem.AssignmentReference, 
@ObjectModel.foreignKey.association: '_BaseUnit'
P_ParkedOplAcctgDocItem.BaseUnit, 
P_ParkedOplAcctgDocItem.BPBankAccountInternalID, 
P_ParkedOplAcctgDocItem.BranchAccount, 
@ObjectModel.foreignKey.association: '_BudgetPeriod'
P_ParkedOplAcctgDocItem.BudgetPeriod, 
@ObjectModel.foreignKey.association: '_BusinessArea'
P_ParkedOplAcctgDocItem.BusinessArea, 
P_ParkedOplAcctgDocItem.BusinessPlace, 
@ObjectModel.foreignKey.association: '_BusinessProcess'
P_ParkedOplAcctgDocItem.BusinessProcess, 
P_ParkedOplAcctgDocItem.CashDiscount1Days, 
P_ParkedOplAcctgDocItem.CashDiscount1DueDate, 
P_ParkedOplAcctgDocItem.CashDiscount1Percent, 
P_ParkedOplAcctgDocItem.CashDiscount2Days, 
P_ParkedOplAcctgDocItem.CashDiscount2DueDate, 
P_ParkedOplAcctgDocItem.CashDiscount2Percent, 
P_ParkedOplAcctgDocItem.CashFlowType, 
P_ParkedOplAcctgDocItem.CommitmentItemShortID,
@ObjectModel.foreignKey.association: '_CompanyCode'
P_ParkedOplAcctgDocItem.CompanyCode,     
P_ParkedOplAcctgDocItem.CompanyCodeCurrencyDetnMethod,     
@ObjectModel.foreignKey.association: '_CostCenter'
P_ParkedOplAcctgDocItem.CostCenter, 
@ObjectModel.foreignKey.association: '_CostCtrActivityType'
P_ParkedOplAcctgDocItem.CostCtrActivityType, 
P_ParkedOplAcctgDocItem.CostObject, 
//@ObjectModel.foreignKey.association: '_CostOriginGroup'
P_ParkedOplAcctgDocItem.CostOriginGroup, 
P_ParkedOplAcctgDocItem.CreditControlArea, 
@ObjectModel.foreignKey.association: '_Customer'
P_ParkedOplAcctgDocItem.Customer, 
P_ParkedOplAcctgDocItem.DataExchangeInstruction1, 
P_ParkedOplAcctgDocItem.DataExchangeInstruction2, 
P_ParkedOplAcctgDocItem.DataExchangeInstruction3, 
P_ParkedOplAcctgDocItem.DataExchangeInstruction4, 
@ObjectModel.foreignKey.association: '_DebitCreditCode'
P_ParkedOplAcctgDocItem.DebitCreditCode, 
P_ParkedOplAcctgDocItem.DocumentItemText, 
P_ParkedOplAcctgDocItem.DueCalculationBaseDate, 
P_ParkedOplAcctgDocItem.DunningArea, 
P_ParkedOplAcctgDocItem.DunningBlockingReason, 
P_ParkedOplAcctgDocItem.DunningKey, 
P_ParkedOplAcctgDocItem.DunningLevel, 
@ObjectModel.foreignKey.association: '_FinancialAccountType'
P_ParkedOplAcctgDocItem.FinancialAccountType, 
@ObjectModel.foreignKey.association: '_FinancialTransactionType'
P_ParkedOplAcctgDocItem.FinancialTransactionType, 
@ObjectModel.foreignKey.association: '_FixedAsset' 
P_ParkedOplAcctgDocItem.FixedAsset, 
P_ParkedOplAcctgDocItem.FixedCashDiscount, 
P_ParkedOplAcctgDocItem.FollowOnDocumentType, 
@ObjectModel.foreignKey.association: '_Fund' 
P_ParkedOplAcctgDocItem.Fund, 
@ObjectModel.foreignKey.association: '_FunctionalArea'
P_ParkedOplAcctgDocItem.FunctionalArea, 
P_ParkedOplAcctgDocItem.FundedProgram, 
@ObjectModel.foreignKey.association: '_FundsCenter' 
P_ParkedOplAcctgDocItem.FundsCenter, 
@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts' 
P_ParkedOplAcctgDocItem.GLAccount, 
@ObjectModel.foreignKey.association: '_Grant' 
P_ParkedOplAcctgDocItem.GrantID, 
@ObjectModel.foreignKey.association: '_HouseBank' 
P_ParkedOplAcctgDocItem.HouseBank, 
//@ObjectModel.foreignKey.association: '_HouseBankAccount' 
P_ParkedOplAcctgDocItem.HouseBankAccount, 
@ObjectModel.foreignKey.association: '_InventoryValuationType' 
P_ParkedOplAcctgDocItem.InventoryValuationType, 
P_ParkedOplAcctgDocItem.InvoiceItemReference, 
P_ParkedOplAcctgDocItem.InvoiceList, 
P_ParkedOplAcctgDocItem.InvoiceReference, 
P_ParkedOplAcctgDocItem.InvoiceReferenceFiscalYear, 
P_ParkedOplAcctgDocItem.IsEUTriangularDeal, 
P_ParkedOplAcctgDocItem.IsNotCashDiscountLiable, 
P_ParkedOplAcctgDocItem.IsSalesRelated, 
P_ParkedOplAcctgDocItem.JointVenture, 
P_ParkedOplAcctgDocItem.JointVentureCostRecoveryCode, 
P_ParkedOplAcctgDocItem.JointVentureEquityGroup, 
P_ParkedOplAcctgDocItem.JointVentureEquityType, 
P_ParkedOplAcctgDocItem.LastDunningDate, 
@ObjectModel.foreignKey.association: '_MasterFixedAsset' 
P_ParkedOplAcctgDocItem.MasterFixedAsset, 
P_ParkedOplAcctgDocItem.MaterialPriceControl, 
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
P_ParkedOplAcctgDocItem.MaterialPriceUnitQty, 
@ObjectModel.foreignKey.association: '_Product' 
P_ParkedOplAcctgDocItem.Product, 
P_ParkedOplAcctgDocItem.NetDueDate, 
P_ParkedOplAcctgDocItem.NetPaymentDays, 
@ObjectModel.foreignKey.association: '_Order' 
P_ParkedOplAcctgDocItem.OrderID, 
P_ParkedOplAcctgDocItem.OrderInternalBillOfOperations, 
@ObjectModel.foreignKey.association: '_PartnerBudgetPeriod' 
P_ParkedOplAcctgDocItem.PartnerBudgetPeriod, 
@ObjectModel.foreignKey.association: '_PartnerBusinessArea' 
P_ParkedOplAcctgDocItem.PartnerBusinessArea, 
@ObjectModel.foreignKey.association: '_PartnerFund' 
P_ParkedOplAcctgDocItem.PartnerFund, 
@ObjectModel.foreignKey.association: '_PartnerGrant' 
P_ParkedOplAcctgDocItem.PartnerGrant, 
@ObjectModel.foreignKey.association: '_PartnerSegment' 
P_ParkedOplAcctgDocItem.PartnerSegment, 
@ObjectModel.foreignKey.association: '_PaymentBlockingReason' 
P_ParkedOplAcctgDocItem.PaymentBlockingReason, 
P_ParkedOplAcctgDocItem.PaymentCardPaymentSettlement, 
@ObjectModel.foreignKey.association: '_PaymentDifferenceReason'
P_ParkedOplAcctgDocItem.PaymentDifferenceReason, 
P_ParkedOplAcctgDocItem.PaymentMethod, 
P_ParkedOplAcctgDocItem.PaymentMethodSupplement, 
P_ParkedOplAcctgDocItem.PaymentReference, 
P_ParkedOplAcctgDocItem.PaymentTerms, 
@ObjectModel.foreignKey.association: '_PersonWorkAgreement_1' 
P_ParkedOplAcctgDocItem.PersonnelNumber, 
P_ParkedOplAcctgDocItem.PlanningLevel, 
@ObjectModel.foreignKey.association: '_Plant' 
P_ParkedOplAcctgDocItem.Plant, 
@ObjectModel.foreignKey.association: '_PostingKey'
P_ParkedOplAcctgDocItem.PostingKey, 
@ObjectModel.foreignKey.association: '_ProfitCenter'
P_ParkedOplAcctgDocItem.ProfitCenter, 

ProfitabilitySegment,

@ObjectModel.foreignKey.association: '_ProjectNetwork'
P_ParkedOplAcctgDocItem.ProjectNetwork, 
@ObjectModel.foreignKey.association: '_PurchasingDocument'
P_ParkedOplAcctgDocItem.PurchasingDocument, 
@ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
P_ParkedOplAcctgDocItem.PurchasingDocumentItem, 
//@ObjectModel.foreignKey.association: '_REObjectByIntFinNumber'
P_ParkedOplAcctgDocItem.REInternalFinNumber,
P_ParkedOplAcctgDocItem.Reference1IDByBusinessPartner, 
P_ParkedOplAcctgDocItem.Reference2IDByBusinessPartner, 
P_ParkedOplAcctgDocItem.Reference3IDByBusinessPartner, 
P_ParkedOplAcctgDocItem.Region, 
@ObjectModel.foreignKey.association: '_Segment'
P_ParkedOplAcctgDocItem.Segment, 
P_ParkedOplAcctgDocItem.SettlementReferenceDate, 
P_ParkedOplAcctgDocItem.SpecialGLAccountAssignment, 
@ObjectModel.foreignKey.association: '_SpecialGLCode'
P_ParkedOplAcctgDocItem.SpecialGLCode, 
P_ParkedOplAcctgDocItem.SpecialGLTransactionType, 
P_ParkedOplAcctgDocItem.StateCentralBankPaymentReason, 
@ObjectModel.foreignKey.association: '_Supplier'
P_ParkedOplAcctgDocItem.Supplier, 
@ObjectModel.foreignKey.association: '_SupplyingCountry'
P_ParkedOplAcctgDocItem.SupplyingCountry, 
//@ObjectModel.foreignKey.association: '_TaxCode'
//Foreign key association only possible with full key which would require TaxCalculationProcedure
P_ParkedOplAcctgDocItem.TaxCode, 
P_ParkedOplAcctgDocItem.TaxJurisdiction, 
P_ParkedOplAcctgDocItem.TaxSection, 
@ObjectModel.foreignKey.association: '_TaxType'
P_ParkedOplAcctgDocItem.TaxType, 
P_ParkedOplAcctgDocItem.TreasuryContractType, 
P_ParkedOplAcctgDocItem.VATRegistration, 
//@ObjectModel.foreignKey.association: '_ValuationArea'
P_ParkedOplAcctgDocItem.ValuationArea, 
P_ParkedOplAcctgDocItem.ValueDate, 
@ObjectModel.foreignKey.association: '_WBSElementBasicData'
P_ParkedOplAcctgDocItem.WBSElementInternalID, 
P_ParkedOplAcctgDocItem.WithholdingTaxCode,

@ObjectModel.foreignKey.association: '_AccountingDocumentCategory'   
_ParkedOplAcctgDocument.AccountingDocumentCategory as AccountingDocumentCategory,
@ObjectModel.foreignKey.association: '_AccountingDocumentType'  
_ParkedOplAcctgDocument.AccountingDocumentType as AccountingDocumentType,
//_ParkedOplAcctgDocument.PostingDate as PostingDate,
@ObjectModel.foreignKey.association: '_PartnerCompany' 
_ParkedOplAcctgDocument.PartnerCompany as PartnerCompany, 
_ParkedOplAcctgDocument.FiscalPeriod as FiscalPeriod, 
_ParkedOplAcctgDocument.DocumentDate as DocumentDate, 
_ParkedOplAcctgDocument.PostingDate as PostingDate, 
_ParkedOplAcctgDocument.LedgerGroup as LedgerGroup, 

@ObjectModel.foreignKey.association: '_ChartOfAccounts'    
_CompanyCode.ChartOfAccounts as ChartOfAccounts,
@ObjectModel.foreignKey.association: '_ControllingArea'  
_CompanyCode.ControllingArea as ControllingArea,
_CompanyCode.FiscalYearVariant as FiscalYearVariant,
@ObjectModel.foreignKey.association: '_FinancialManagementArea'  
_CompanyCode.FinancialManagementArea as FinancialManagementArea,

@ObjectModel.foreignKey.association: '_AdditionalCurrency1'
_ParkedOplAcctgDocument.AdditionalCurrency1, 
@ObjectModel.foreignKey.association: '_AdditionalCurrency2'
_ParkedOplAcctgDocument.AdditionalCurrency2,
@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
_ParkedOplAcctgDocument.CompanyCodeCurrency,
@ObjectModel.foreignKey.association: '_PaymentCurrency'
P_ParkedOplAcctgDocItem.PaymentCurrency,
@ObjectModel.foreignKey.association: '_TransactionCurrency'
_ParkedOplAcctgDocument.TransactionCurrency, 

@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'AdditionalCurrency1'  
P_ParkedOplAcctgDocItem.AmountInAdditionalCurrency1, 
@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'AdditionalCurrency2'  
P_ParkedOplAcctgDocItem.AmountInAdditionalCurrency2, 
@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'  
P_ParkedOplAcctgDocItem.AmountInCompanyCodeCurrency, 
@Aggregation.default: #SUM
@Semantics.amount.currencyCode: 'PaymentCurrency'
P_ParkedOplAcctgDocItem.AmountInPaymentCurrency,
@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'TransactionCurrency'  
P_ParkedOplAcctgDocItem.AmountInTransactionCurrency, 
@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'TransactionCurrency'  
P_ParkedOplAcctgDocItem.CashDiscountAmount, 
@Aggregation.default:#SUM                               
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'  
P_ParkedOplAcctgDocItem.CashDiscountAmtInCoCodeCrcy, 
@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'TransactionCurrency'  
P_ParkedOplAcctgDocItem.CashDiscountBaseAmount, 
@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'TransactionCurrency'  
P_ParkedOplAcctgDocItem.InvoiceAmountInFrgnCurrency, 
@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'  
P_ParkedOplAcctgDocItem.InvoiceAmtInCoCodeCrcy, 
@Aggregation.default: #SUM
@Semantics.amount.currencyCode: 'TransactionCurrency' 
P_ParkedOplAcctgDocItem.PlannedAmtInTransactionCrcy,
@Aggregation.default: #SUM
@Semantics.amount.currencyCode: 'TransactionCurrency' 
P_ParkedOplAcctgDocItem.TaxAmount,
@Aggregation.default: #SUM
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
P_ParkedOplAcctgDocItem.TaxAmountInCoCodeCrcy,
@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'  
P_ParkedOplAcctgDocItem.TaxBaseAmountInCoCodeCrcy, 
@Aggregation.default: #SUM                               
@Semantics.amount.currencyCode: 'TransactionCurrency'  
P_ParkedOplAcctgDocItem.TaxBaseAmountInTransCrcy, 
@Aggregation.default: #SUM
@Semantics.amount.currencyCode: 'TransactionCurrency' 
P_ParkedOplAcctgDocItem.WithholdingTaxAmount,
@Aggregation.default: #SUM
@Semantics.amount.currencyCode: 'TransactionCurrency' 
P_ParkedOplAcctgDocItem.WithholdingTaxBaseAmount,
@Aggregation.default: #SUM
@Semantics.amount.currencyCode: 'TransactionCurrency' 
P_ParkedOplAcctgDocItem.WithholdingTaxExemptionAmt,
@Aggregation.default: #SUM  
@Semantics.quantity.unitOfMeasure: 'BaseUnit'
P_ParkedOplAcctgDocItem.Quantity,     
    
    /* Associations */
_CompanyCode,
_SourceCompanyCode,
_ControllingArea,
_SourceFiscalYear,
_SourceParkedOplAcctgDocument,
_ParkedOplAcctgDocument,
//_FiscalCalendarDate,
_PostingKey,
_FinancialAccountType,
_DebitCreditCode,
_Customer,
_CustomerCompany,
_Supplier,
_SupplierCompany,
_BusinessArea,
_PartnerBusinessArea,
_TaxType,
_PartnerCompany,
_ProfitCenter,
_CurrentProfitCenter,
_CostCenter,
_CurrentCostCenter,
_SupplyingCountry,
_Product,
_BaseUnit,
_PaymentDifferenceReason,
_Segment,
_PartnerSegment,
_AccountingDocumentType,
_TransactionCurrency,
_PaymentCurrency,
_CompanyCodeCurrency,
_AdditionalCurrency1,
_AdditionalCurrency2,
_AccountingDocumentCategory,
//_TaxCode,
_Order,
_MasterFixedAsset,
_FixedAsset,
_AssetTransactionType,
_PurchasingDocument,
_PurchasingDocumentItem,
_ProjectNetwork,
_WBSElementBasicData,
//_CostOriginGroup,
_CostCtrActivityType,
_ChartOfAccounts,
_PersonWorkAgreement_1,
_FinancialManagementArea,
_FinancialTransactionType,
_Fund,
_FundsCenter,
_Grant,
_GLAccountInChartOfAccounts,
_GLAccountInCompanyCode,
_HouseBank,
//_HouseBankAccount,
_InventoryValuationType,
_PartnerFund,
_PartnerGrant,
_PaymentBlockingReason,
_Plant,
//_ValuationArea,
_SpecialGLCode,
_BusinessProcess,
_BudgetPeriod,
_PartnerBudgetPeriod,
_FunctionalArea
//_REObjectByIntFinNumber    
}
```
