---
name: I_SERVICEENTRYSHEETITEMAPI01
description: "Serviceentrysheetitemapi 01"
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - interface-view
  - service
  - item-level
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SERVICEENTRYSHEETITEMAPI01

**Serviceentrysheetitemapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceEntrySheet` | ✓ | |  |  |  |  |
| `ServiceEntrySheetItem` | ✓ | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `Service` |  | |  |  |  |  |
| `ServiceEntrySheetItemDesc` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `ConfirmedQuantity` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `ServicePerformanceDate` |  | |  |  |  |  |
| `OriginObject` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `Currency` |  | | `_ServiceEntrySheet` | `Currency` |  |  |
| `PurgDocItemExternalReference` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  | `LastChangeUser` |  |  |
| `_ServiceEntrySheet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceEntrySheet` | `I_ServiceEntrySheetAPI01` | [1..1] |
| `_ServiceEntrySheetItmExtension` | `E_ServiceEntrySheetItem` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMSESITAPI01'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Service Entry Sheet Item'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]

define view I_ServiceEntrySheetItemAPI01
  as select from I_ServiceEntrySheetItemBasic

  association [1..1] to I_ServiceEntrySheetAPI01 as _ServiceEntrySheet             on  $projection.ServiceEntrySheet = _ServiceEntrySheet.ServiceEntrySheet
  association [0..1] to E_ServiceEntrySheetItem  as _ServiceEntrySheetItmExtension on  $projection.ServiceEntrySheet     = _ServiceEntrySheetItmExtension.ServiceEntrySheet
                                                                                   and $projection.ServiceEntrySheetItem = _ServiceEntrySheetItmExtension.ServiceEntrySheetItem
{
  key ServiceEntrySheet,
  key ServiceEntrySheetItem,
      PurchaseOrder,
      PurchaseOrderItem,
      IsDeleted,
      Service,
      ServiceEntrySheetItemDesc,
      ServicePerformer,
      AccountAssignmentCategory,
      MultipleAcctAssgmtDistribution,
      WorkItem,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ConfirmedQuantity,
      @Semantics.unitOfMeasure: true
      QuantityUnit,
      ServicePerformanceDate,
      OriginObject,
      @Semantics.amount.currencyCode: 'Currency'
      NetAmount,
      @Semantics.amount.currencyCode: 'Currency'
      NetPriceAmount,
      @Semantics.currencyCode:true
      _ServiceEntrySheet.Currency as Currency,
      PurgDocItemExternalReference,
      PurchaseContract,
      PurchaseContractItem,

      // Fields for Authorization Checks
      PurchasingOrganization,
      PurchasingGroup,
      Plant,
      IsEndOfPurposeBlocked,

      // Admin Data
      CreationDateTime,
      CreatedByUser,
      LastChangeDateTime,
      LastChangeUser              as LastChangedByUser,

      // Associations
      _ServiceEntrySheet
}
```
