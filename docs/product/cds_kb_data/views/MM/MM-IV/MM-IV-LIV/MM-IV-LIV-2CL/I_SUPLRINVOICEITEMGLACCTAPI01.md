---
name: I_SUPLRINVOICEITEMGLACCTAPI01
description: "Suplrinvoiceitemglacctapi 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVOICEITEMGLACCTAPI01

**Suplrinvoiceitemglacctapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoice` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `SupplierInvoiceItem` | ✓ | |  | `OrdinalNumber` |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `ProjectNetworkInternalID` |  | |  |  |  |  |
| `NetworkActivityInternalID` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `NetworkActivity` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementInternalID_2` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `SupplierInvoiceItemAmount` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `SupplierInvoiceItemText` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `IsNotCashDiscountLiable` |  | |  |  |  |  |
| `InternalOrder` |  | |  |  |  |  |
| `CommitmentItem` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `PartnerBusinessArea` |  | |  |  |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `ServiceDocument` |  | |  |  |  |  |
| `ServiceDocumentItem` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |
| `_ItemGLAcctExtension` | `E_SupplierInvoiceItemGLAcct` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISINITGLACCAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'G/L Account Item of Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true

define view I_SuplrInvoiceItemGLAcctAPI01
  as select from I_SupplierInvoiceItemGLAcct
    inner join   I_SupplierInvoiceAPI01 on  I_SupplierInvoiceItemGLAcct.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                        and I_SupplierInvoiceItemGLAcct.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear
  association [1..1] to I_SupplierInvoiceAPI01 as _SupplierInvoiceAPI01 on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                        and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear
  association [0..1] to E_SupplierInvoiceItemGLAcct as _ItemGLAcctExtension on  $projection.SupplierInvoice     = _ItemGLAcctExtension.SupplierInvoice
                                                                            and $projection.FiscalYear          = _ItemGLAcctExtension.FiscalYear
                                                                            and $projection.SupplierInvoiceItem = _ItemGLAcctExtension.OrdinalNumber
                                                                            and _ItemGLAcctExtension.SupplierInvoiceItem is initial
{
  key I_SupplierInvoiceItemGLAcct.SupplierInvoice,
  key I_SupplierInvoiceItemGLAcct.FiscalYear,
  key OrdinalNumber as SupplierInvoiceItem,
      CostCenter,
      ControllingArea,
      BusinessArea,
      ProfitCenter,
      FunctionalArea,
      GLAccount,
      SalesOrder,
      SalesOrderItem,
      ProjectNetworkInternalID,
      NetworkActivityInternalID,
      ProjectNetwork,
      NetworkActivity,
      CostObject,
      CostCtrActivityType,
      BusinessProcess,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID_2'
      WBSElementInternalID,
      WBSElementInternalID_2,
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      I_SupplierInvoiceItemGLAcct.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      SupplierInvoiceItemAmount,
      TaxCode,
      PersonnelNumber,
      WorkItem,
      DebitCreditCode,
      TaxJurisdiction,
      SupplierInvoiceItemText,
      I_SupplierInvoiceItemGLAcct.AssignmentReference,
      IsNotCashDiscountLiable,
      InternalOrder,
      CommitmentItem,
      FundsCenter,
      Fund,
      GrantID,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      QuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      Quantity,
      PartnerBusinessArea,
      FinancialTransactionType,
      ServiceDocument,
      ServiceDocumentItem,
      ServiceDocumentType,

      I_SupplierInvoiceItemGLAcct.CompanyCode,
      I_SupplierInvoiceItemGLAcct.TaxCountry,

      /* Associations */
      _SupplierInvoiceAPI01,
      I_SupplierInvoiceItemGLAcct._Currency,
      _UnitOfMeasure,
      _WBSElementBasicData

}
```
