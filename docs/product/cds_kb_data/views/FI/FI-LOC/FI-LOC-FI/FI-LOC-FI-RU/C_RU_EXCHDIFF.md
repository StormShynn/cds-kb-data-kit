---
name: C_RU_EXCHDIFF
description: "RU Exchdiff"
semantic_vi: "View RU Exchdiff hiển thị sự khác biệt về tỷ giá hối đoái cho các tài liệu kế toán, cung cấp chi tiết về các khoản dư ban đầu và cuối cùng trong các đơn vị tiền tệ của công ty và các đơn vị tiền tệ nước ngoài. Nó được sử dụng để phân tích sự khác biệt về tỷ giá hối đoái trong kế toán tài chính."
keywords:
  - "exchange difference"
  - "tỷ giá hối đoái"
  - "sự khác biệt về tỷ giá hối đoái"
  - "accounting document"
  - "tài liệu kế toán"
  - "financial accounting"
  - "kế toán tài chính"
  - "fi"
  - "fi-loc"
  - "fi-loc-fi-ru"
  - "consumption-view"
  - "component:fi-loc-fi-ru"
semantic_en: "The RU Exchdiff view exposes exchange differences for accounting documents, providing details on the starting and ending balances in company code currencies and foreign currencies. It is used to analyze exchange differences in financial accounting."
app_component: FI-LOC-FI-RU
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
  - FI-LOC
  - FI-LOC-FI
  - consumption-view
  - component:FI-LOC-FI-RU
  - lob:Finance
---
# C_RU_EXCHDIFF

**RU Exchdiff**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-RU` |
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
| `CompanyCode` | ✓ | | `_Sum` | `CompanyCode` |  |  |
| `AccountingDocument` | ✓ | | `_Sum` | `AccountingDocument` |  |  |
| `FiscalYear` | ✓ | | `_Sum` | `FiscalYear` |  |  |
| `AccountingDocumentItem` | ✓ | | `_Sum` | `AccountingDocumentItem` |  |  |
| `ControllingAreaCurrencyRole` | ✓ | | `_Sum` | `ControllingAreaCurrencyRole` |  |  |
| `ActiveValuationArea` | ✓ | | `_Sum` | `ActiveValuationArea` |  |  |
| `StartingBalanceAmtInCoCodeCrcy` |  | |  | `case when _Sum.FrgnCrcyValnDeltaLogicIsActive = '' then case when _Sum.EvaluationKeyDate = $parameters.P_FromPostingDate then _Sum.ValuationDiffAmtInCoCodeCrcy else 0.0 end else sum(_Sum.ValuationDiffAmtInCoCodeCrcy) end` |  |  |
| `EndingBalanceAmtInCoCodeCrcy` |  | |  | `0` |  |  |
| `CompanyCodeCurrency` |  | | `_Sum` | `CompanyCodeCurrency` |  |  |
| `FrgnCrcyValnDeltaLogicIsActive` |  | | `_Sum` | `FrgnCrcyValnDeltaLogicIsActive` |  |  |
| `AssignmentReference` |  | | `_Sum` | `AssignmentReference` |  |  |
| `Creditor` |  | | `_Sum` | `Creditor` |  |  |
| `Debtor` |  | | `_Sum` | `Debtor` |  |  |
| `BusinessPartner` |  | | `_Sum` | `BusinessPartner` |  |  |
| `PostingDate` |  | | `_Sum` | `PostingDate` |  |  |
| `CndnContrType` |  | | `_Sum` | `CndnContrType` |  |  |
| `AuthorizationGroup` |  | | `_Sum` | `AuthorizationGroup` |  |  |
| `SupplierFinsAuthorizationGrp` |  | | `_Sum` | `SupplierFinsAuthorizationGrp` |  |  |
| `CustomerFinsAuthorizationGrp` |  | | `_Sum` | `CustomerFinsAuthorizationGrp` |  |  |
| `SupplierCompanyAuthznGroup` |  | |  | `AuthorizationGroup` |  |  |
| `CustomerCompanyAuthznGroup` |  | |  | `AuthorizationGroup` |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CRUEXCHDIFF'
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #REQUIRED 
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@EndUserText.label: 'FI RU Unrealized exchanged differences'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE  ]
@Consumption.dbHints: ['NO_CYCLIC_JOIN', 'USE_HEX_PLAN']
define view C_RU_ExchDiff
  with parameters
    P_FromPostingDate : firu_posting_date_from,
    P_ToPostingDate   : firu_posting_date_to
  as select from P_RU_ExchDiff1 as _Sum
  left outer to one join I_SupplierCompany as SupplierCompany on  _Sum.Creditor    = SupplierCompany.Supplier
                                                                and _Sum.CompanyCode = SupplierCompany.CompanyCode

  left outer to one join I_CustomerCompany as CustomerCompany on  _Sum.Debtor    = CustomerCompany.Customer
                                                                and _Sum.CompanyCode = CustomerCompany.CompanyCode
  left outer to one join I_BusinessPartner as BusinessPartner on  _Sum.BusinessPartner = BusinessPartner.BusinessPartner
{
  key _Sum.CompanyCode,
  key _Sum.AccountingDocument,
  key _Sum.FiscalYear,
  key _Sum.AccountingDocumentItem,
  key _Sum.ControllingAreaCurrencyRole,
  key _Sum.ActiveValuationArea,
  case
  when _Sum.FrgnCrcyValnDeltaLogicIsActive = ''
    then
    case
      when _Sum.EvaluationKeyDate = $parameters.P_FromPostingDate then _Sum.ValuationDiffAmtInCoCodeCrcy
      else 0.0
    end
  else
    sum(_Sum.ValuationDiffAmtInCoCodeCrcy)
  end as StartingBalanceAmtInCoCodeCrcy,
  0.0             as EndingBalanceAmtInCoCodeCrcy,
  _Sum.CompanyCodeCurrency,
  _Sum.FrgnCrcyValnDeltaLogicIsActive,
  _Sum.AssignmentReference,
  _Sum.Creditor,
  _Sum.Debtor,
  _Sum.BusinessPartner,
  _Sum.PostingDate,
  _Sum.CndnContrType,
  _Sum.AuthorizationGroup,
  _Sum.SupplierFinsAuthorizationGrp,
  _Sum.CustomerFinsAuthorizationGrp,
  SupplierCompany.AuthorizationGroup as SupplierCompanyAuthznGroup,
  CustomerCompany.AuthorizationGroup as CustomerCompanyAuthznGroup,

  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataControllerSet,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController1,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController2,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController3,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController4,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController5,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController6,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController7,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController8,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController9,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController10
}
where
  _Sum.PostingDate <= $parameters.P_ToPostingDate
  and _Sum.EvaluationKeyDate       <= $parameters.P_FromPostingDate
group by
  _Sum.CompanyCode,
  _Sum.AccountingDocument,
  _Sum.FiscalYear,
  _Sum.AccountingDocumentItem,
  _Sum.ControllingAreaCurrencyRole,
  _Sum.ActiveValuationArea,
  _Sum.FrgnCrcyValnDeltaLogicIsActive,
  _Sum.CompanyCodeCurrency,
  _Sum.AssignmentReference,
  _Sum.Creditor,
  _Sum.Debtor,
  _Sum.PostingDate,
  _Sum.EvaluationKeyDate,
  _Sum.ValuationDiffAmtInCoCodeCrcy,
  _Sum.BusinessPartner,
  _Sum.CndnContrType,
  _Sum.AuthorizationGroup,
  _Sum.SupplierFinsAuthorizationGrp,
  _Sum.CustomerFinsAuthorizationGrp,
  SupplierCompany.AuthorizationGroup,
  CustomerCompany.AuthorizationGroup,
  BusinessPartner.DataControllerSet,
  BusinessPartner.DataController1,
  BusinessPartner.DataController2,
  BusinessPartner.DataController3,
  BusinessPartner.DataController4,
  BusinessPartner.DataController5,
  BusinessPartner.DataController6,
  BusinessPartner.DataController7,
  BusinessPartner.DataController8,
  BusinessPartner.DataController9,
  BusinessPartner.DataController10
union select from P_RU_ExchDiff1 as _Sum
  left outer to one join I_SupplierCompany as SupplierCompany on  _Sum.Creditor    = SupplierCompany.Supplier
                                                                and _Sum.CompanyCode = SupplierCompany.CompanyCode

  left outer to one join I_CustomerCompany as CustomerCompany on  _Sum.Debtor    = CustomerCompany.Customer
                                                                and _Sum.CompanyCode = CustomerCompany.CompanyCode
  left outer to one join I_BusinessPartnerTP  as BusinessPartner on  _Sum.BusinessPartner = BusinessPartner.BusinessPartner
{
  key _Sum.CompanyCode,
  key _Sum.AccountingDocument,
  key _Sum.FiscalYear,
  key _Sum.AccountingDocumentItem,
  key _Sum.ControllingAreaCurrencyRole,
  key _Sum.ActiveValuationArea,
  0.0             as StartingBalanceAmtInCoCodeCrcy,
  case
  when _Sum.FrgnCrcyValnDeltaLogicIsActive = ''
    then
    case
      when _Sum.EvaluationKeyDate = $parameters.P_ToPostingDate then _Sum.ValuationDiffAmtInCoCodeCrcy
      else 0.0
    end
  else
    sum(_Sum.ValuationDiffAmtInCoCodeCrcy)
  end as EndingBalanceAmtInCoCodeCrcy,
  _Sum.CompanyCodeCurrency,
  _Sum.FrgnCrcyValnDeltaLogicIsActive,
  _Sum.AssignmentReference,
  _Sum.Creditor,
  _Sum.Debtor,
  _Sum.BusinessPartner,
  _Sum.PostingDate,
  _Sum.CndnContrType,
  _Sum.AuthorizationGroup,
  _Sum.SupplierFinsAuthorizationGrp,
  _Sum.CustomerFinsAuthorizationGrp,
  SupplierCompany.AuthorizationGroup as SupplierCompanyAuthznGroup,
  CustomerCompany.AuthorizationGroup as CustomerCompanyAuthznGroup,

  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataControllerSet,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController1,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController2,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController3,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController4,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController5,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController6,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController7,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController8,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController9,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController10
}
where
  _Sum.PostingDate <= $parameters.P_ToPostingDate
  and _Sum.EvaluationKeyDate       between $parameters.P_FromPostingDate and $parameters.P_ToPostingDate
group by
  _Sum.CompanyCode,
  _Sum.AccountingDocument,
  _Sum.FiscalYear,
  _Sum.AccountingDocumentItem,
  _Sum.ControllingAreaCurrencyRole,
  _Sum.ActiveValuationArea,
  _Sum.FrgnCrcyValnDeltaLogicIsActive,
  _Sum.CompanyCodeCurrency,
  _Sum.AssignmentReference,
  _Sum.Creditor,
  _Sum.Debtor,
  _Sum.PostingDate,
  _Sum.EvaluationKeyDate,
  _Sum.ValuationDiffAmtInCoCodeCrcy,
  _Sum.BusinessPartner,
  _Sum.CndnContrType,
  _Sum.AuthorizationGroup,
  _Sum.SupplierFinsAuthorizationGrp,
  _Sum.CustomerFinsAuthorizationGrp,
  SupplierCompany.AuthorizationGroup,
  CustomerCompany.AuthorizationGroup,
  BusinessPartner.DataControllerSet,
  BusinessPartner.DataController1,
  BusinessPartner.DataController2,
  BusinessPartner.DataController3,
  BusinessPartner.DataController4,
  BusinessPartner.DataController5,
  BusinessPartner.DataController6,
  BusinessPartner.DataController7,
  BusinessPartner.DataController8,
  BusinessPartner.DataController9,
  BusinessPartner.DataController10
```
