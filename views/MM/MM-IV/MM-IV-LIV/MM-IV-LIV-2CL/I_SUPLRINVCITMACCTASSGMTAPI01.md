---
name: I_SUPLRINVCITMACCTASSGMTAPI01
description: Suplrinvcitmacctassgmtapi 01
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCITMACCTASSGMTAPI01

**Suplrinvcitmacctassgmtapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SupplierInvoice` | ✓ | |  |  |
| `FiscalYear` | ✓ | |  |  |
| `SupplierInvoiceItem` | ✓ | |  |  |
| `OrdinalNumber` | ✓ | |  |  |
| `CostCenter` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `FunctionalArea` |  | |  |  |
| `GLAccount` |  | |  |  |
| `SalesOrder` |  | |  |  |
| `SalesOrderItem` |  | |  |  |
| `CostObject` |  | |  |  |
| `CostCtrActivityType` |  | |  |  |
| `BusinessProcess` |  | |  |  |
| `WBSElementInternalID` |  | |  |  |
| `WBSElementInternalID_2` |  | |  |  |
| `DocumentCurrency` |  | |  |  |
| `SupplierInvoiceItemAmount` |  | |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |
| `Quantity` |  | |  |  |
| `TaxCode` |  | |  |  |
| `AccountAssignmentNumber` |  | |  |  |
| `AccountAssignmentIsUnplanned` |  | |  |  |
| `PersonnelNumber` |  | |  |  |
| `WorkItem` |  | |  |  |
| `MasterFixedAsset` |  | |  |  |
| `FixedAsset` |  | |  |  |
| `DebitCreditCode` |  | |  |  |
| `TaxJurisdiction` |  | |  |  |
| `InternalOrder` |  | |  |  |
| `ProjectNetworkInternalID` |  | |  |  |
| `NetworkActivityInternalID` |  | |  |  |
| `ProjectNetwork` |  | |  |  |
| `NetworkActivity` |  | |  |  |
| `CommitmentItem` |  | |  |  |
| `FundsCenter` |  | |  |  |
| `Fund` |  | |  |  |
| `GrantID` |  | |  |  |
| `PartnerBusinessArea` |  | |  |  |
| `TaxCountry` |  | |  |  |
| `ServiceDocument` |  | |  |  |
| `ServiceDocumentItem` |  | |  |  |
| `ServiceDocumentType` |  | |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | |
| `_SuplrInvcItemPurOrdRefAPI01` | | ✓ | | |
| `_UnitOfMeasure` | | ✓ | | |
| `_WBSElementBasicData` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |
| `_SuplrInvcItemPurOrdRefAPI01` | `I_SuplrInvcItemPurOrdRefAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISUINITACASAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Account Assignment for Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true

define view I_SuplrInvcItmAcctAssgmtAPI01
  as select from I_SupplierInvoiceItmAcctAssgmt
    inner join   I_SupplierInvoiceAPI01 on  I_SupplierInvoiceItmAcctAssgmt.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                        and I_SupplierInvoiceItmAcctAssgmt.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear
  association [1..1] to I_SupplierInvoiceAPI01        as _SupplierInvoiceAPI01        on  _SupplierInvoiceAPI01.SupplierInvoice = $projection.SupplierInvoice
                                                                                      and _SupplierInvoiceAPI01.FiscalYear      = $projection.FiscalYear
  association [1..1] to I_SuplrInvcItemPurOrdRefAPI01 as _SuplrInvcItemPurOrdRefAPI01 on  _SuplrInvcItemPurOrdRefAPI01.SupplierInvoice     = $projection.SupplierInvoice
                                                                                      and _SuplrInvcItemPurOrdRefAPI01.FiscalYear          = $projection.FiscalYear
                                                                                      and _SuplrInvcItemPurOrdRefAPI01.SupplierInvoiceItem = $projection.SupplierInvoiceItem
{
  key I_SupplierInvoiceItmAcctAssgmt.SupplierInvoice,
  key I_SupplierInvoiceItmAcctAssgmt.FiscalYear,
  key SupplierInvoiceItem,
  key OrdinalNumber,
      CostCenter,
      ControllingArea,
      BusinessArea,
      ProfitCenter,
      FunctionalArea,
      GLAccount,
      SalesOrder,
      SalesOrderItem,
      CostObject,
      CostCtrActivityType,
      BusinessProcess,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID_2'
      WBSElementInternalID,
      WBSElementInternalID_2,
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      I_SupplierInvoiceItmAcctAssgmt.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      SupplierInvoiceItemAmount,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      PurchaseOrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      Quantity,
      TaxCode,
      AccountAssignmentNumber,
      AccountAssignmentIsUnplanned,
      PersonnelNumber,
      WorkItem,
      MasterFixedAsset,
      FixedAsset,
      DebitCreditCode,
      TaxJurisdiction,
      InternalOrder,
      ProjectNetworkInternalID,
      NetworkActivityInternalID,
      ProjectNetwork,
      NetworkActivity,
      CommitmentItem,
      FundsCenter,
      Fund,
      GrantID,
      PartnerBusinessArea,
      I_SupplierInvoiceItmAcctAssgmt.TaxCountry,
      ServiceDocument,
      ServiceDocumentItem,
      ServiceDocumentType,

      /* Associations */
      _SupplierInvoiceAPI01,
      _SuplrInvcItemPurOrdRefAPI01,
      I_SupplierInvoiceItmAcctAssgmt._Currency,
      _UnitOfMeasure,
      _WBSElementBasicData
}
```
