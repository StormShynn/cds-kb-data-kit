---
name: I_PRAPAYMENTHEADERATTRIBUTE
description: "PRA Payment Header Attribute"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADERATTRIBUTE')/$value
semantic_en: "PRA Payment Header Attribute"
semantic_vi: "PRA Payment Header Attribute — CDS view giao diện dựa trên I_PRAPaymentHeader."
keywords:
  - "pra"
  - "payment"
  - "header"
  - "attribute"
  - "process"
  - "reference"
  - "owner"
  - "date"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_PRAPAYMENTHEADERATTRIBUTE

**PRA Payment Header Attribute**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADERATTRIBUTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessRun` | ✓ | |  |  | `NUMC(10)` | Proc 2.0 - Run ID |
| `PaymentReference` | ✓ | |  |  | `CHAR(13)` | Check Number |
| `PRAOwner` |  | |  |  | `CHAR(10)` | PRA owner |
| `PaymentDate` |  | |  |  | `DATS(8)` | Check Date |
| `PaymentType` |  | |  |  | `CHAR(1)` | Payment Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CheckStatus` |  | |  |  | `CHAR(2)` | Payment Processing - Check Status |
| `PaymentStatusDate` |  | |  |  | `DATS(8)` | Status Date |
| `PaymentHeaderRejectionRsn` |  | |  |  | `CHAR(3)` | Payment Processing - High Level Reject Code |
| `CheckIsOutOfTolerance` |  | |  |  | `CHAR(1)` | Payment Processing - Out-Of-Tolerance Flag |
| `CheckIsSentToBank` |  | |  |  | `CHAR(1)` | Flag Indicating Sent to Bank |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `_CheckIsOutOfTolerance` | | ✓ | | | | |
| `_CheckIsSentToBank` | | ✓ | | | | |
| `_CheckStatus` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_PaymentHdrRejectionRsn` | | ✓ | | | | |
| `_PaymentType` | | ✓ | | | | |
| `_PRAOwner` | | ✓ | | | | |
| `_ProcessRun` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADERATTRIBUTE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADERATTRIBUTE')/$value)*

```abap
@EndUserText.label: 'PRA Payment Header Attribute'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IPVPAYMENTHDRATT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PaymentReference'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAPaymentHeaderAttribute'
// We want to allow an association to be created fro mthe detail to the header for
// attributes such as check status.  The model was not allowing use of an association 
// to a cube view, so to work around this we built this view exposing only attributes
// in a projection which can be used to reference in an association

define view I_PRAPaymentHeaderAttribute
  as select from I_PRAPaymentHeader
{
      @ObjectModel.foreignKey.association: '_ProcessRun'
  key ProcessRun,
  key PaymentReference,
      @ObjectModel.foreignKey.association: '_PRAOwner'
      PRAOwner,
      @Semantics.businessDate.at: true
      PaymentDate,
      @ObjectModel.foreignKey.association: '_PaymentType'
      PaymentType,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_CheckStatus'
      CheckStatus,
      @Semantics.businessDate.at: true
      PaymentStatusDate,
      @ObjectModel.foreignKey.association: '_PaymentHdrRejectionRsn'
      PaymentHeaderRejectionRsn,
      @ObjectModel.foreignKey.association: '_CheckIsOutOfTolerance'
      @Semantics.booleanIndicator: true
      CheckIsOutOfTolerance,
      @ObjectModel.foreignKey.association: '_CheckIsSentToBank'
      CheckIsSentToBank,
      OriginTransaction,
      CreatedByUser,
      CreationDateTime,
      /* Associations */
      _CheckIsOutOfTolerance,
      _CheckIsSentToBank,
      _CheckStatus,
      _CompanyCode,
      _CreatedByUser,
      _PaymentHdrRejectionRsn,
      _PaymentType,
      _PRAOwner,
      _ProcessRun
}
```
