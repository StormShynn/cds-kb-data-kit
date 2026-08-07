---
name: I_SERVICEENTRYSHEETAPI01
description: Serviceentrysheetapi 01
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
  - service
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SERVICEENTRYSHEETAPI01

**Serviceentrysheetapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceEntrySheet` | ✓ | |  |  |
| `ServiceEntrySheetName` |  | |  |  |
| `Supplier` |  | |  |  |
| `PurchaseOrder` |  | |  |  |
| `IsDeleted` |  | |  |  |
| `ApprovalStatus` |  | |  |  |
| `ApprovalDateTime` |  | |  |  |
| `ResponsiblePerson` |  | |  |  |
| `OriginObjectType` |  | |  |  |
| `Currency` |  | |  |  |
| `MaterialDocument` |  | |  |  |
| `MaterialDocumentYear` |  | |  |  |
| `PurgDocExternalSystem` |  | |  |  |
| `PurgDocExternalReference` |  | |  |  |
| `PostingDate` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  | `LastChangeUser` |
| `_ServiceEntrySheetItem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceEntrySheetItem` | `I_ServiceEntrySheetItemAPI01` | [1..*] |
| `_ServiceEntrySheetExtension` | `E_ServiceEntrySheet` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMSESAPI01'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Service Entry Sheet'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]

define view I_ServiceEntrySheetAPI01
  as select from I_ServiceEntrySheetBasic

  association [1..*] to I_ServiceEntrySheetItemAPI01 as _ServiceEntrySheetItem      on $projection.ServiceEntrySheet = _ServiceEntrySheetItem.ServiceEntrySheet

  association [0..1] to E_ServiceEntrySheet          as _ServiceEntrySheetExtension on $projection.ServiceEntrySheet = _ServiceEntrySheetExtension.ServiceEntrySheet

{
  key ServiceEntrySheet,
      ServiceEntrySheetName,
      Supplier,
      PurchaseOrder,
      IsDeleted,
      ApprovalStatus,
      ApprovalDateTime,
      ResponsiblePerson,
      OriginObjectType,
      Currency,
      MaterialDocument,
      MaterialDocumentYear,
      PurgDocExternalSystem,
      PurgDocExternalReference,
      PostingDate,

      // Fields for Authorization Checks
      PurchasingOrganization,
      PurchasingGroup,
      IsEndOfPurposeBlocked,

      // Admin Data
      CreationDateTime,
      CreatedByUser,
      LastChangeDateTime,
      LastChangeUser as LastChangedByUser,

      // Associations
      _ServiceEntrySheetItem
}
```
