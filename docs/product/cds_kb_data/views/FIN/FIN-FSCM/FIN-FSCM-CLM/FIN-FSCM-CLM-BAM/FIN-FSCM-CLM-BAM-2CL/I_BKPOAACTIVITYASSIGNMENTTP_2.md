---
name: I_BKPOAACTIVITYASSIGNMENTTP_2
description: "Bkpoaactivityassignmenttp 2"
semantic_vi: "View I_BKPOAACTIVITYASSIGNMENTTP_2 hiển thị các chỉ định hoạt động của quyền đại diện ngân hàng, được sử dụng để quản lý các hoạt động liên quan đến quyền đại diện trong thành phần FIN-FSCM-CLM-BAM-2CL."
keywords:
  - "bank power of attorney"
  - "quyền đại diện ngân hàng"
  - "activity assignment"
  - "chỉ định hoạt động"
  - "fin-fscm-clm-bam-2cl"
  - "transactional processing"
  - "interface view"
  - "financial services"
  - "dịch vụ tài chính"
semantic_en: "The I_BKPOAACTIVITYASSIGNMENTTP_2 view exposes bank power of attorney activity assignments, which are used to manage activities associated with a power of attorney in the FIN-FSCM-CLM-BAM-2CL component."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - transactional-processing
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
---
# I_BKPOAACTIVITYASSIGNMENTTP_2

**Bkpoaactivityassignmenttp 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  |  |  |
| `BkPOAActivityAssignmentUUID` | ✓ | |  |  |  |  |
| `BankPowerOfAttorneyActivity` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |
| `_BankPowerOfAttorney` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Activity Assignments of POA - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType: { serviceQuality: #B,
                            sizeCategory:   #S,
                            dataClass:      #MASTER },
               sapObjectNodeType.name: 'BkPOAActivityAssignment'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'ActivityAssinment' ],
  elementSuffix: 'BPA',
  quota: { maximumFields: 100, maximumBytes: 100000 }
}
@AbapCatalog.extensibility.allowNewCompositions
define view entity I_BkPOAActivityAssignmentTP_2
  as projection on R_BkPOAActivityAssignmentTP as ActivityAssinment
{
  key BankPowerOfAttorneyUUID,
  key BkPOAActivityAssignmentUUID,
      BankPowerOfAttorneyActivity,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,
      /* Associations */
      _BankPowerOfAttorney : redirected to parent I_BankPowerOfAttorneyTP_2
}
```
