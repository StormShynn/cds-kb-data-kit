---
name: V_MMIM_DDL_OM_OR_GR4PO_EMAIL
description: V Mmim Ddl OM OR GR 4PO Email
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - workflow
  - email
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# V_MMIM_DDL_OM_OR_GR4PO_EMAIL

**V Mmim Ddl OM OR GR 4PO Email**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocument` | ✓ | | `_MaterialDocumentRecord` | `MaterialDocument` |  |  |
| `MaterialDocumentYear` | ✓ | | `_MaterialDocumentRecord` | `MaterialDocumentYear` |  |  |
| `MaterialDocumentItem` | ✓ | | `_MaterialDocumentRecord` | `MaterialDocumentItem` |  |  |
| `PurchaseOrder` |  | | `_MaterialDocumentRecord` | `PurchaseOrder` |  |  |
| `PurchaseOrderItem` |  | | `_MaterialDocumentRecord` | `PurchaseOrderItem` |  |  |
| `FullNameOfPerson` |  | | `_AddressPersonName` | `PersonFullName` |  |  |
| `CalendarDay` |  | |  | `substring(_MaterialDocumentRecord.CreationDate, 7, 2)` |  |  |
| `CalendarMonth` |  | |  | `substring(_MaterialDocumentRecord.CreationDate, 5, 2)` |  |  |
| `CalendarYear` |  | |  | `substring(_MaterialDocumentRecord.CreationDate, 1, 4)` |  |  |
| `SystemID` |  | |  | `substring(_MaterialDocumentRecord.LogicalSystem, 1, 3)` |  |  |
| `ClientID` |  | |  | `substring(_MaterialDocumentRecord.LogicalSystem, 8, 3)` |  |  |
| `InvtryMgmtReferenceDocument` |  | | `_MaterialDocumentRecord` | `InvtryMgmtReferenceDocument` |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'V_MMIM_OR_GR4PO'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass:      #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory:   #XL
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Output Management E-Mail GR4PO'
define view V_Mmim_Ddl_Om_Or_GR4PO_EMAIL
  as select from I_MaterialDocumentRecord as _MaterialDocumentRecord
     left outer join I_User              as _User              on _MaterialDocumentRecord.CreatedByUser = _User.UserID
     left outer join I_AddressPersonName as _AddressPersonName on _User.AddressPersonID = _AddressPersonName.AddressPersonID
{
  key _MaterialDocumentRecord.MaterialDocument,
  key _MaterialDocumentRecord.MaterialDocumentYear,
  key _MaterialDocumentRecord.MaterialDocumentItem,
      _MaterialDocumentRecord.PurchaseOrder,
      _MaterialDocumentRecord.PurchaseOrderItem,
      _AddressPersonName.PersonFullName                      as FullNameOfPerson,
      substring(_MaterialDocumentRecord.CreationDate, 7, 2)  as CalendarDay,
      substring(_MaterialDocumentRecord.CreationDate, 5, 2)  as CalendarMonth,
      substring(_MaterialDocumentRecord.CreationDate, 1, 4)  as CalendarYear,
      substring(_MaterialDocumentRecord.LogicalSystem, 1, 3) as SystemID,
      substring(_MaterialDocumentRecord.LogicalSystem, 8, 3) as ClientID,
      _MaterialDocumentRecord.InvtryMgmtReferenceDocument    as InvtryMgmtReferenceDocument
}
where
  _MaterialDocumentRecord.MaterialDocumentRecordType = 'MDOC'
```
