---
name: I_SCHEDGAGRMTPARTNERTP_2
description: "Schedgagrmtpartnertp 2"
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - partner
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTPARTNERTP_2

**Schedgagrmtpartnertp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `SupplierSubrange` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `PartnerCounter` | ✓ | |  |  |  |  |
| `SchedgAgrmtPartner` |  | |  |  |  |  |
| `SchedgAgrmtPartnerName` |  | |  |  |  |  |
| `SchedgAgrmtType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierContact` |  | |  |  |  |  |
| `EmploymentInternalID` |  | |  |  |  |  |
| `PersonWorkAgreement` |  | |  |  |  |  |
| `DefaultPartner` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_SchedgAgrmtHdr` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Scheduling Agreement Partner'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'SchedulingAgreement','SchedulingAgreementItem', 'PurchasingOrganization','SupplierSubrange', 'Plant','PartnerFunction','PartnerCounter' ]

@ObjectModel: {
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  }
 }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SchedgAgrmtPartnerTP_2
  as projection on R_SchedgAgrmtPartnerTP
{
  key SchedulingAgreement,
  key SchedulingAgreementItem,
  key PurchasingOrganization,
  key SupplierSubrange,
  key Plant,
  key PartnerFunction,
  key PartnerCounter,
      SchedgAgrmtPartner,
      SchedgAgrmtPartnerName,
      SchedgAgrmtType,
      CreatedByUser,
      CreationDate,
      Supplier,
      SupplierContact,
      EmploymentInternalID,
      PersonWorkAgreement,
      DefaultPartner,
      PurchasingGroup,
      PurchasingDocumentType,
      LastChangeDateTime,

      /* Associations */
      _SchedgAgrmtHdr : redirected to parent I_SchedgAgrmtHdrTP_2
}
```
