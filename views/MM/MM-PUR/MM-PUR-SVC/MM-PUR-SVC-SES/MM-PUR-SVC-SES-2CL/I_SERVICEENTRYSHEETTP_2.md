---
name: I_SERVICEENTRYSHEETTP_2
description: Serviceentrysheettp 2
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - interface-view
  - transactional-processing
  - service
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SERVICEENTRYSHEETTP_2

**Serviceentrysheettp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceEntrySheet` | `ServiceEntrySheet` |
| `ServiceEntrySheetName` | `ServiceEntrySheetName` |
| `Supplier` | `Supplier` |
| `SupplierName` | `SupplierName` |
| `PurchaseOrder` | `PurchaseOrder` |
| `PurchaseOrderCurrency` | `PurchaseOrderCurrency` |
| `IsDeleted` | `IsDeleted` |
| `ApprovalStatus` | `ApprovalStatus` |
| `ApprovalDateTime` | `ApprovalDateTime` |
| `ResponsiblePerson` | `ResponsiblePerson` |
| `SESOriginObjectType` | `SESOriginObjectType` |
| `Currency` | `Currency` |
| `MaterialDocument` | `MaterialDocument` |
| `MaterialDocumentYear` | `MaterialDocumentYear` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `IsEndOfPurposeBlocked` | `IsEndOfPurposeBlocked` |
| `PurgDocExternalSystem` | `PurgDocExternalSystem` |
| `PurgDocExternalReference` | `PurgDocExternalReference` |
| `ExternalRevisionDateTime` | `ExternalRevisionDateTime` |
| `PostingDate` | `PostingDate` |
| `PricingDocument` | `PricingDocument` |
| `TotalNetAmount` | `TotalNetAmount` |
| `TotalSESNetAmountInclSalesTax` | `TotalSESNetAmountInclSalesTax` |
| `_ServiceEntrySheetItem` | *Association* |
| `_ServiceEntrySheetNote` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Entry Sheet Header'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['ServiceEntrySheet']
@ObjectModel.representativeKey: 'ServiceEntrySheet'

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ServiceEntrySheet'

define root view entity I_ServiceEntrySheetTP_2
 provider contract transactional_interface
  as projection on R_ServiceEntrySheetTP as _ServiceEntrySheet
{
  key ServiceEntrySheet,
      ServiceEntrySheetName,
      Supplier,
      SupplierName,
      PurchaseOrder,
      PurchaseOrderCurrency,
      @Semantics.booleanIndicator:true
      IsDeleted,
      ApprovalStatus,
      ApprovalDateTime,
      ResponsiblePerson,
      SESOriginObjectType,
      Currency,
      MaterialDocument,
      MaterialDocumentYear,
      CreationDateTime,
      CreatedByUser,
      LastChangeDateTime,
      LastChangedByUser,
      PurchasingOrganization,
      PurchasingGroup,
      @Semantics.booleanIndicator:true
      IsEndOfPurposeBlocked,
      PurgDocExternalSystem,
      PurgDocExternalReference,
      ExternalRevisionDateTime,
      PostingDate,
      PricingDocument,
      @Semantics.amount.currencyCode: 'Currency'
      TotalNetAmount,
      @Semantics.amount.currencyCode: 'Currency'
      TotalSESNetAmountInclSalesTax,
      /* Associations */
      _ServiceEntrySheetItem : redirected to composition child I_ServiceEntrySheetItemTP_2,
      _ServiceEntrySheetNote : redirected to composition child I_ServiceEntrySheetNoteTP
}
```
